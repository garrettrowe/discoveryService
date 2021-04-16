

import React, { FunctionComponent, ReactElement, useState } from 'react'
import { AnswerPanelProps } from './types'
import { OverflowMenuItem, InlineLoading } from 'carbon-components-react'
import { AnswerItem } from './answer-item'
import { SkeletonAnswerGroup } from './skeleton-answer-item'

import Watson20 from '@carbon/icons-react/es/watson/20'
import ChevronDown24 from '@carbon/icons-react/es/chevron--down/24'
import ChevronRight24 from '@carbon/icons-react/es/chevron--right/24'

import ClassSet from 'classnames'
import './styles.scss'

export const AnswersPanel: FunctionComponent<AnswerPanelProps> = (props): ReactElement<HTMLDivElement> => {
  const [ expandedTop, setExpandedTop ] = useState(true)
  const [ expandedOthers, setExpandedOthers ] = useState(false)

  const { loading, wdsSuccess, answers, selectedAnswer, totalResults, queryAggregation } = props

	const accordionTitleClasses = ClassSet({
		'accordion-title': true,
		'hide-accordion': selectedAnswer
	})

  const toggleExpansion = (type:string) => {
    if (type === 'top') {
      expandedTop ? setExpandedTop(false) : setExpandedTop(true)
    } else if (type === 'other') {
      expandedOthers ? setExpandedOthers(false) : setExpandedOthers(true)
    }
  }

  const renderAnswerPanel = () => {
    return (
      <div>
        <div>
          {answers.slice(0,3).map((item, index) => 
            <AnswerItem loading={false} answer={item} selected={selectedAnswer} originalQuery={queryAggregation.original_query} key={index} index={index}> </AnswerItem>
          )}
          <div className='separator'>
            <hr></hr>
          </div>
        </div>
        <div className='accordion'>
          <div className={accordionTitleClasses} onClick={() => toggleExpansion('other')}>
            <div className='button'>
              {expandedOthers ? <ChevronDown24/> :<ChevronRight24/>}
            </div>
            <div className='title'>
              <h2>Other related answers</h2>
            </div>
          </div>
          <div className='accordian-content' >
            {expandedOthers 
              ? answers.slice(3).map((item, index) => 
                <AnswerItem loading={false} answer={item} selected={selectedAnswer} originalQuery={queryAggregation.original_query} key={index} index={index + 1}> </AnswerItem>)
              : null
            }
          </div>
        </div>
      </div>
    )

  } 

  const renderResults = () => {
    return (
      <div className='panel-row'>
        {loading 
          ? <SkeletonAnswerGroup />
          : renderAnswerPanel()
        }
      </div>
    )
  }

  const renderNoResults = () => {
    return (
      <div className='panel-row'>
        <div className='no-answers-title'>
          <h2>No answers found.</h2>
        </div>
      </div>
    )
  }

  const renderDocumentStatement = () =>{
    if (selectedAnswer) {
      if (selectedAnswer.documentLevelAnswer) {
        return (
          <p className='results-info'>found {totalResults} answers in {selectedAnswer.file_title}</p>
        )
      } else {
        return (
          <p className='results-info'>found {totalResults} answers in {queryAggregation.file_names.length} different documents</p>
        )
      }
    } else {
      return (
        <p className='results-info'>found {totalResults} answers in {queryAggregation.file_names.length} different documents</p>
      )
    }
  }

// main component render
  return (
    <div className='answer-panel'>
      <div className='filterbar'>
        {wdsSuccess && !loading 
          ? <div className='results-group'>
              <Watson20 className='result-icon'/> 
              {renderDocumentStatement()}
              <div id="sdu"><div/></div>
            </div>
          : <InlineLoading iconDescription="Active loading indicator" description="Fetching results..."/>
        }
      </div>
      {wdsSuccess && answers.length == 0  && !loading 
        ? renderNoResults()
        : renderResults()
      }
    </div>
  )
}