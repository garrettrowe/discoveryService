import { Request, Response } from 'express'
import { Config } from '../config'
import { AnswerItem, FilterItem, QueryAggregation, ConceptItem, Story, DocumentItem } from '../../../src/types/common/types'

const { DISCOVERY_API_KEY, DISCOVERY_ENV, DISCOVERY_ENG_COLLECTION, DISCOVERY_AUTO_COLLECTION, DISCOVERY_CUSTOM_API_KEY, DISCOVERY_CUSTOM_COLLECTION, DISCOVERY_CUSTOM_ENV } = Config.discovery

const DiscoveryV1 = require('watson-developer-cloud/discovery/v1');

const discoveryDefault = new DiscoveryV1({
  version: '2019-04-02',
  iam_apikey: DISCOVERY_API_KEY,
  url: 'https://gateway.watsonplatform.net/discovery/api'
});

// exposing WDS collection info, likely use for default collection stats before query
export const wdsInfo = (req: Request, res: Response) => {
    discoveryDefault.listCollections({ environment_id: DISCOVERY_ENV },
      function (error, data) {
        console.log(JSON.stringify(data, null, 2));
        res.send({
          status: 'success',
          message: 'ok',
          output: data
        })
      })
}

export const wdsFeedback = (req: Request, res: Response) => {

  console.log("Received training feedback")
  console.log(req.body.segment_title + " submitted as " + req.body.feedback)
  console.log("for the query: " + req.body.query)
  res.send({
    status: 'success',
    message: 'ok',
  })
}

// exposing WDS query
export const wdsQuery = (req: Request, res: Response) => {

  let query = req.body.nlq.query
  let collection = DISCOVERY_ENG_COLLECTION
  let environment = DISCOVERY_ENV
  let apiKey = DISCOVERY_API_KEY

  let queryParams = {
    environment_id: environment,
    collection_id: collection,
    filter: req.body.filter ? req.body.filter : null,
    natural_language_query: req.body.nlq,
    passages: true,
    passages_characters:150,
    passages_count: 35,
    deduplicate: true,
    deduplicate_field: "text",
    highlight: true,
    aggregation: `[
      nested(enriched_text.concepts).filter(enriched_text.concepts.relevance>0.92).term(enriched_text.concepts.text,count:5).top_hits(1),
      nested(enriched_text.keywords).filter(enriched_text.keywords.relevance>0.8).term(enriched_text.keywords.text,count:10),
      term(extracted_metadata.filename,count:10).top_hits(1)
    ]`
  }

  discoveryDefault.query(queryParams,
    function (error, data) {
      if (error) {
        console.log('error', error)
        res.send({
          status: 'NONONO',
          message: 'BAD',
          output: error,
          collection_id: collection
        })
      } else {

        let answerItems: AnswerItem[] = []
        let filterItems: FilterItem[] = []
        let queryAggregation = {} as QueryAggregation
        let labelList: String[] = []

        let passagesRetrieved = false

        if (data.passages) {
          if (data.passages.length > 0) {
            passagesRetrieved = true
          }
        }

        data.results = data.results.sort(rankDocs)

        for (let item in data.results) {
          if (item) {
            let newItem = {} as AnswerItem

            if (passagesRetrieved) {
              let passageOutput = passageReconciler(data.results[item], data.passages)
              newItem.text = passageOutput.text
              newItem.leading_text = passageOutput.leading_text
              newItem.trailing_text = passageOutput.trailing_text
              newItem.location = passageOutput.location
            } else {
              textSlicer(data.results[item].text)
            }

            newItem.title = data.results[item].title

            newItem.confidence = data.results[item].result_metadata.confidence
            newItem.file_title = data.results[item].source_link
            newItem.file_name = data.results[item].extracted_metadata.filename

            newItem.file_type = data.results[item].extracted_metadata.filename.match(/\.[0-9a-z]+$/i)[0]

            newItem.file_segment_count = data.results[item].segment_metadata ? data.results[item].segment_metadata.total_segments : null

            if (data.results[item].metadata) {
              if (data.results[item].metadata.page_number) {
                newItem.page_num = data.results[item].metadata.page_number
              } else {
                if (data.results[item].page_number) {
                  newItem.page_num = removeAbnormalities(data.results[item].page_number)
                }

              }

              if (data.results[item].metadata.author) {
                newItem.file_author = data.results[item].metadata.author
              }

              if (data.results[item].metadata.publish_date) {
                newItem.pub_date = data.results[item].metadata.publish_date
              }
            }

            if (data.results[item].page_number && !newItem.page_num) {
              newItem.page_num = data.results[item].page_number
            }

            newItem.raw = data.results[item]

            answerItems.push(newItem)
            if (data.results[item].enriched_text !== undefined) {
              let filterItem = {} as FilterItem
              if(data.results[item].enriched_text.categories[0] !== undefined) {
                var label = data.results[item].enriched_text.categories[0].label.split("/")[1]
                if (labelList.indexOf(label) == -1) {
                  filterItem.id = labelList.length + 1
                  filterItem.text = label
                  filterItems.push(filterItem)
                  labelList.push(label)
                }
              }
            }
          }
        }

        
        queryAggregation.original_query = query 
        let conceptAggregations: ConceptItem[] = [] 
        let rawConceptAggregations = []
        if(data.aggregations.length > 0)
        {
          if(data.aggregations[0].aggregations.length > 0){
            if(data.aggregations[0].aggregations[0].aggregations.length > 0){
              rawConceptAggregations = data.aggregations[0].aggregations[0].aggregations[0].results
            }
          }
        }

        let file_names: DocumentItem[] = []

        try{
          for (let item in rawConceptAggregations) {
            if (rawConceptAggregations[item].matching_results > 3) {
              let conceptItem = {} as ConceptItem
              let key = rawConceptAggregations[item].key
              console.log(rawConceptAggregations[item])
              let topHitConcept = rawConceptAggregations[item].aggregations[0].hits.hits[0]
              conceptItem.text = topHitConcept.text
              conceptItem.dbpedia = topHitConcept.dbpedia_resource
              conceptItem.relevance = topHitConcept.relevance
              conceptAggregations.push(conceptItem)
            }
          }

          queryAggregation.concepts = conceptAggregations.sort(rankConcepts)

          if(data.aggregations[1].aggregations[0].aggregations != null) {
            queryAggregation.mentions = data.aggregations[1].aggregations[0].aggregations[0].results
          }

          if(data.aggregations[1].aggregations[0].aggregations != null) {
            for (let i in  data.aggregations[1].aggregations[0].aggregations[0].results) {
              let newDocItem = {} as DocumentItem
              newDocItem.name = data.aggregations[1].aggregations[0].aggregations[0].results[i].key
              newDocItem.matching_results = data.aggregations[1].aggregations[0].aggregations[0].results[i].matching_results
              file_names.push(newDocItem)
            }
          } 
        }catch(fail){}

        queryAggregation.file_names = file_names
        queryAggregation.original_query = req.body.nlq

        res.send({
          status: 'success',
          message: 'ok',
          answerItems,
          filterItems,
          queryAggregation,
          document: req.body.document ? req.body.document : null,
          raw_output: data
        })
      }

    })
}

export const wdsAC = (req: Request, res: Response) => {

  let query = req.body.nlq.query
  let collection = DISCOVERY_ENG_COLLECTION
  let environment = DISCOVERY_ENV
  let apiKey = DISCOVERY_API_KEY
  let outitems = []

  let queryParams = {
    environment_id: environment,
    collection_id: collection,
    natural_language_query: req.body.nlq,
    passages: true,
    deduplicate: true,
    deduplicate_field: "passage_text",
    count:0,
    passages_characters:50,
    passages_count: 5
  }

  discoveryDefault.query(queryParams,
    function (error, data) {
    console.log(data)
      if (error) {
        console.log('error', error)
        res.send({
          status: 'NONONO',
          message: 'BAD',
          output: error,
          collection_id: collection
        })
      } else {

      console.log(queryParams.natural_language_query)

        let answerItems: AnswerItem[] = []
        for (let item in data.passages) {
          if (item) {
            let oi = data.passages[item].passage_text.trim().replace(/^\./, "").trim().replace(/$\./, "").trim()
            if (!outitems.includes(hashCode(oi))) {
              let newItem = {} as AnswerItem
              outitems.push(hashCode(oi))
              newItem.text = oi
              newItem.title = queryParams.natural_language_query
              answerItems.push(newItem)
            }
          }
        }
console.log("ai: " + JSON.stringify(answerItems))
        res.send({
          status: 'success',
          message: 'ok',
          answerItems
        })
      }
    })
}


function rankConcepts (a, b) {
  if (a.relevance > b.relevance) {
    return -1
  } else {
    return 1
  }
}

function rankDocs (a, b) {
  if (a.result_metadata.confidence > b.result_metadata.confidence) {
    return -1
  } else {
    return 1
  }
}


//Change character from 102$_{ }$ to 102 or 47$_{ }P to 47.
function removeAbnormalities (num) {
  return num[0].replace(/[`~!@#$%^&*()_|+\-=?;: a-zA-Z'",.<>\{\}\[\]\\\/]/gi, '')
}

function passageReconciler(wds_doc, wds_passages) {
  let targetDoc = wds_doc.id
  let resultObject = {
    text: "",
    leading_text: "",
    trailing_text: "",
    location: [0,0]
  }

  for (let i in wds_passages) {
    if (wds_passages[i].document_id === targetDoc) {
      resultObject.text = wds_passages[i].passage_text
      resultObject.location[0] = wds_passages[i].start_offset
      resultObject.location[1] = wds_passages[i].end_offset
      if (wds_passages[i].start_offset === 0) {
        resultObject.leading_text = '"'
        resultObject.text = resultObject.text
        if (wds_doc.text.length > wds_passages[i].end_offset + 160) {
          resultObject.trailing_text = wds_doc.text.slice(wds_passages[i].end_offset, wds_passages[i].end_offset + 160) + ' ..."'
        } else {
          resultObject.trailing_text = wds_doc.text.slice(wds_passages[i].end_offset, wds_doc.text.length) +'"'
        }
      } else if (wds_passages[i].end_offset === wds_doc.text.length) {
        resultObject.text = resultObject.text
        resultObject.trailing_text = '"'
        if (wds_passages[i].start_offset - 160 > 0) {
          resultObject.leading_text = '"...' + wds_doc.text.slice(wds_passages[i].start_offset - 160, wds_passages[i].start_offset)
        } else {
          resultObject.leading_text = '"' + wds_doc.text.slice(0, wds_passages[i].start_offset)
        }

      } else {
        resultObject.leading_text = '"... ' + wds_doc.text.slice(wds_passages[i].start_offset - 105, wds_passages[i].start_offset)
        resultObject.text = resultObject.text
        resultObject.trailing_text = wds_doc.text.slice(wds_passages[i].end_offset, wds_passages[i].end_offset + 105) + ' ..."'
      }
      break
    }
    if (Number(i) === (wds_passages.length - 1)) {
      // last one, just slice the text
      resultObject = textSlicer(wds_doc.text)
    }
  }

  return resultObject
}

function hashCode(str) {
    var hash = 0,
        i, chr;
    for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0;
    }
    return hash;
}

function textSlicer(text) {
  let resultObject = {
    text: "",
    location: [0,0],
    leading_text: "",
    trailing_text: ""
  }

  resultObject.leading_text = '"' + text.slice(0,290)
  resultObject.text = ""
  resultObject.trailing_text = '..."'
  resultObject.location[0] = 0
  resultObject.location[1] = 250

  return resultObject
}