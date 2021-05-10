

import React, { FunctionComponent, ReactElement } from 'react'
import { Grid, List, ListItem, Typography, makeStyles } from '@material-ui/core'
import { EntitiesPanelProps } from './types'
import { InlineLoading } from 'carbon-components-react'

const styles = {
  listItem: {
    paddingLeft: 0,
  } 
}

const useStyles = makeStyles(styles);

export const EntitiesPanel: FunctionComponent<EntitiesPanelProps> = ({
  loading, selectedAnswer
}): ReactElement<HTMLDivElement> => {
  const classes = useStyles()

  return (
    <Grid item container direction="column">
      <Grid item>
        {
          loading && (<InlineLoading iconDescription="Active loading indicator" description="Fetching entities..."/>)
        }
      </Grid>
      {
        selectedAnswer && !loading && (
          <Grid item container direction="column">
            <Typography variant="h5">Discovery Results</Typography>
            <List>
              {
                selectedAnswer.raw?.enriched_text?.entities.map(({text}, i) => {
                  return (
                    <ListItem key={i} className={classes.listItem}>
                      <div>{text}</div>
                    </ListItem>
                  )
                })  
              }
            </List> 
            {

            }
          </Grid>
        )
      }
    </Grid>
  )
}