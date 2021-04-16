

import React, { FunctionComponent, ReactElement } from 'react'
import { InfoProps } from './types'

import { DocViewerPanel } from './doc-viewer'
import { QueryExpansionPanel } from './query-expansion'

import './styles.scss'

export const InfoPanel: FunctionComponent<InfoProps> = (props): ReactElement<HTMLDivElement> => {

  const { dispatch, selectedAnswer, selectedStory, queryAggregation, mode } = props

  // main component render
  return (
    <div className='info-panel'>
      {selectedAnswer
        ? <DocViewerPanel selectedAnswer={selectedAnswer} mode={mode} selectedStory={selectedStory}/> 
        : <QueryExpansionPanel 
            dispatch={dispatch}
            queryAggregation={queryAggregation}
            selectedStory={selectedStory}
            mode={mode}
          />
      }
    </div>
  )
}