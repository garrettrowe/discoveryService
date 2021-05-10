

import React, { FunctionComponent, ReactElement, useState } from 'react'
import { Typography, List, ListItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { QuestionPanelProps } from './types'
import { wdsNlQuery } from "../../../../../../store/actions";

const styles = {
  listItem: {
    paddingLeft: 0,
  }
}

const useStyles = makeStyles(styles);

export const QuestionPanel: FunctionComponent<QuestionPanelProps> = (props): ReactElement<HTMLDivElement> => {
  const { dispatch, queries } = props;
  const classes = useStyles();

  const sendTestQuery = (query_string) => {
    dispatch(wdsNlQuery({ query_string: query_string }));
  };

  return (
    <>
      <Typography variant="h5">Business Needs/Questions</Typography>
      <List>
        {
          queries.map(({ label, query }) => {
            return (
              <ListItem className={classes.listItem} onClick={() => sendTestQuery(query || label)}>{label}</ListItem>
            )
          })
        }
      </List>
    </>
  )
}