

import React, { FunctionComponent, ReactElement, useEffect } from 'react'
import { IProps } from './types.d'
import { NavPanel } from './nav-panel'
import { MainPanel } from './main-panel'
import { ActionTypes } from '../../../../store/actions'
import { Config } from '../../../../config'

import Notification from '../../notification'
import './styles.scss'

export const Root: FunctionComponent<IProps> = (props): ReactElement<HTMLDivElement> => {

  useEffect(() => {
      dispatch({
        type: ActionTypes.SET_SELECTED_STORY,
        payload: {selectedStory: {
          name: 'Custom',
          description: 'User specific custom collection',
          doc_types: ['PDFs, DOCs, JSONs'],
          icon: 'Categories24',
          adjective: 'custom',
          isEnabled: true
        } }
      })
  },[])

  const {
    mode,
    query,
    dispatch,
    loading,
    loadO,
    wdsSuccess,
    storySelectorToggle,
    answerItems,
    selectedAnswer,
    selectedStory,
    queryAggregation,
    totalResults,
    keysError
  } = props

  // main component render
  return (
    <div className='root'>
      <div className='main-container'>
        <NavPanel {...props}/>
        <MainPanel {...props}/>
      </div>
      <Notification />
    </div>
  )
}