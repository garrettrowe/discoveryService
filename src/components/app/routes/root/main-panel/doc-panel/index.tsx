

import React, { FunctionComponent, ReactElement, useContext } from 'react'
import { Grid, Typography, Paper, makeStyles } from '@material-ui/core'
import parse from 'html-react-parser';
import { DocPanelProps } from './types'
import { InlineLoading } from 'carbon-components-react'

import Watson20 from '@carbon/icons-react/es/watson/20'

import './styles.scss'

const styles = {
  paper: {
    lineHeight: '1.5rem',
    padding: '2rem',

    '& em': {
        backgroundColor: '#d0ddf4',
        margin: '0px 1px',
        padding: '0px 2px',
        // border-radius: 3px;
    },
  } 
}

const useStyles = makeStyles(styles);

export const DocPanel: FunctionComponent<DocPanelProps> = ({
  loading, wdsSuccess, totalResults, queryAggregation, selectedAnswer
}): ReactElement<HTMLDivElement> => {
  const classes = useStyles();

  const entities = selectedAnswer?.raw?.enriched_text?.entities || [];
  
  const doc = entities.reduce((s, {text}) => {
      return s.replace(text, `<em>${text}</em>`)
    }, selectedAnswer?.raw?.text || '');


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

  return (
    <Grid item container direction="column">
      <Grid item className="filterbar">
        {wdsSuccess && !loading 
          ? <div className='results-group'>
              <Watson20 className='result-icon'/> 
              {renderDocumentStatement()}
              <div id="sdu"><div/></div>
            </div>
          : <InlineLoading iconDescription="Active loading indicator" description="Fetching document..."/>
        }
      </Grid>
      {
        selectedAnswer && !loading && (
          <Grid item container spacing={2}>
            <Grid item container direction="column">
              <Grid item>
                <Typography variant="h5">{selectedAnswer.title}</Typography>
                <Typography variant="h6"><a href={selectedAnswer.file_title} target="_blank">{selectedAnswer.file_title}</a></Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Paper className={classes.paper} elevation={3}>
                {parse(doc)}
              </Paper>
            </Grid>
          </Grid>
        )
      }
    </Grid>
  )
}