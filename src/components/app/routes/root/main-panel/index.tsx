

import React, { FunctionComponent, ReactElement, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { MainPanelProps } from './types.d';
import { ActionTypes } from '../../../../../store/actions';
import { EntitiesPanel } from './entities-panel';
import { QuestionPanel } from './questions-panel';
import { DocPanel } from './doc-panel';
import queries from './queries.json';

import './styles.scss'

export const MainPanel: FunctionComponent<MainPanelProps> = (
  {
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
  }
): ReactElement<HTMLDivElement> => {
  
  let imgSrc = "/assets/img/WDS_Illustration_solid.png"
  let qq =
    query.location.search === ""
      ? false
      : decodeURI(query.location.search.replace("?", ""));
  if (qq){
    imgSrc = "https://" + qq + "/logo.png";
  }

  useEffect(() => {
    if(answerItems?.length > 0){
      dispatch({
        type: ActionTypes.SET_SELECTED_ANSWER,
        payload: {selectedAnswer: answerItems[0]}
      })
    }

  },[answerItems]);


  // main component render
  return (
    <div className='main-panel'>
      <Grid item container spacing={2}>
        <Grid item container direction="column" xs={3} spacing={2}>
          <Grid item>
            <QuestionPanel dispatch={dispatch} queries={queries} />
          </Grid>
          <Grid item>
              <EntitiesPanel
                loading={loading}
                wdsSuccess={wdsSuccess}
                answers={answerItems}
                totalResults={totalResults}
                queryAggregation={queryAggregation}
                selectedAnswer={selectedAnswer} />
          </Grid>
        </Grid>
        <Grid item xs={9}>
          {(keysError!=='' ? <div className='keys-error'>{keysError}</div> : null)}
          {loading || wdsSuccess
            ? (
              <DocPanel
                loading={loading}
                wdsSuccess={wdsSuccess}
                answers={answerItems}
                totalResults={totalResults}
                queryAggregation={queryAggregation}
                selectedAnswer={selectedAnswer} />
            )
            : <img className='sdu-image' src={imgSrc}></img>
          }
        </Grid>
      </Grid>
    </div>
  )
}