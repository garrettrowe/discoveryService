

import React, { FunctionComponent, ReactElement, useState, useEffect } from 'react'

import { ConfidenceProps } from './types'
import './styles.scss'

export const ConfidenceBar: FunctionComponent<ConfidenceProps> = (props): ReactElement<HTMLDivElement> => {
  const [ displayedConfidence, setDisplayedConfidence ] = useState(0)

  const { confidence } = props
  useEffect(() => {
    setTimeout(() => {
      setDisplayedConfidence(confidence)
    }, 500)
    
  }, [])

  const ProgressBar = ({ confidence }) => ( 
    <div className="progressbar">
      <div className="progress" style={{ width: `${confidence}%`}} />
    </div>
  )
// main component render
  return (
      <ProgressBar confidence={displayedConfidence}></ProgressBar>
  )
}