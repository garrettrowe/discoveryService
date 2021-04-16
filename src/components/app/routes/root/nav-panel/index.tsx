

import React, { FunctionComponent, ReactElement } from 'react'
import { NavPanelProps } from './types.d'
import { QueryBar } from './query-bar'

import ClassSet from 'classnames'	
import './styles.scss'

export const NavPanel: FunctionComponent<NavPanelProps> = (props): ReactElement<HTMLDivElement> => {

  const { 
    mode,
    query,
    dispatch,
    loading,
    selectedStory,
    keysError,
    loadO
  } = props
  
  // main component render
  return (
    <div className='nav-panel'>
      <div className='selections'>
        <QueryBar
              dispatch={dispatch}
              loading={loading}
              selectedStory={selectedStory}
              query={query}
              mode={mode}
              loadO={loadO}
            />
      </div>   
    </div>
  )
}