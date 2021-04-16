

import React, { FunctionComponent, ReactElement } from 'react'
import { MainPanelProps } from './types.d'
import { AnswersPanel } from './answers-panel'
import { InfoPanel } from './info-panel'

import './styles.scss'

export const MainPanel: FunctionComponent<MainPanelProps> = (props): ReactElement<HTMLDivElement> => {

  const {
    mode,
    dispatch,
    loading,
    query,
    wdsSuccess,
    answerItems,
    selectedAnswer,
    queryAggregation,
    selectedStory,
    totalResults,
    keysError
  } = props
  
  let imgSrc = "/assets/img/WDS_Illustration_solid.png"
  let qq =
    query.location.search === ""
      ? false
      : decodeURI(query.location.search.replace("?", ""));
  if (qq){
    imgSrc = "https://" + qq + "/logo.png";
  }

  const renderWDSResults = () => {
    return (
      <>
        <AnswersPanel
          loading={loading}
          wdsSuccess={wdsSuccess}
          answers={answerItems}
          totalResults={totalResults}
          queryAggregation={queryAggregation}
          selectedAnswer={selectedAnswer} />
          {loading
            ? null
            : <InfoPanel
                queryAggregation={queryAggregation}
                selectedAnswer={selectedAnswer}
                selectedStory={selectedStory}
                dispatch={dispatch}
                mode={mode}
              />
          }
      </>
    )
  }



  // main component render
  return (
    <div className='main-panel'>
      {(keysError!=='' ? <div className='keys-error'>{keysError}</div> : null)}
      {loading || wdsSuccess
        ? renderWDSResults()
        : <img className='sdu-image' src={imgSrc}></img>
      }
    </div>
  )
}