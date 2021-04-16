

import { Request, Response } from 'express'
import { Config } from '../config'
import { DBpediaItem, ConceptItem } from '../../../src/types/common/types'

var fs = require('fs')
var path = require('path')
var os = require('os')

var cheerio = require('cheerio')
var requestPromise = require('request-promise-native')
var Crawler = require("crawler");

export const crawlDbpedia = async (req: Request, res: Response) => {
  console.log(req.body.concept)
  let concept_req= req.body.concept
  let dbpediaResponse = {} as DBpediaItem
  
  const $ = await requestPromise(req.body.concept.dbpedia, {
    transform: body => cheerio.load(body),
  });

  const abstract = $('.lead').text()
  const image = $('a[rel="dbo:thumbnail"]').attr('href')

  console.log(image)
  dbpediaResponse.dbpedia_abstract = abstract
  dbpediaResponse.dbpedia_image = image
  // dbpediaResponse.dbpedia_abstract = response
  res.send({
    status: 'success',
    message: 'ok',
    dbpediaObject: dbpediaResponse
  })

}
