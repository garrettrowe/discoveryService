

import React, { FunctionComponent, ReactElement, useContext } from 'react'
import { DocViewerProps } from './types'
import { ActionTypes } from 'store/actions'
import { storeContext } from '../../../../../../../../src'

import { Tag } from 'carbon-components-react'

import CloseFilled24 from '@carbon/icons-react/lib/close/24';

import './styles.scss'

export const DocViewerPanel: FunctionComponent<DocViewerProps> = (props): ReactElement<HTMLDivElement> => {

  const { selectedAnswer, selectedStory, mode } = props
  const { dispatch } = useContext(storeContext)

  const onCloseDocument = () => {
    dispatch({
      type: ActionTypes.SET_SELECTED_ANSWER,
      payload: { selectedAnswer: null, selectedDocument: null }
    })
  }

  // main component render
  return (
    <div className='doc-view'>
      <div className='doc-info'>
        <div className='doc-header'>
          <CloseFilled24 className="chevron-toggle"  onClick={onCloseDocument} />
          <div className='title'>
            <h3>{selectedAnswer.title}</h3>
            <h4 className='file-metadata'><a href={selectedAnswer.file_title} target="_blank">{selectedAnswer.file_title}</a></h4>
          </div>
        </div>
      </div>
      <div className='document-panel'>
        <p>{selectedAnswer.raw.text}</p>
      </div>
    </div>
  )
}