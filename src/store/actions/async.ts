

import axios from 'axios'
import { Dispatch } from 'redux'
import { setNotification, setLoadingState, receiveWDSRes } from 'store/actions'
import { getKeysFromCookie } from 'utils'
import { NlqParams, WDSRawDoc, FeedbackItem, Story } from 'types/common/types'


export const wdsNlQuery = (query: NlqParams) => {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(setLoadingState(true))
      const { data } = await axios.post('/api/wdsQuery', {
          nlq: query.query_string,
          filter: query.filter ? query.filter : null,
          document: query.document ? query.document : null
        }
      )

      let wdsRes: WDSRawDoc[] = data
      dispatch(receiveWDSRes({wdsRes}))
      dispatch(setLoadingState(false))
    }
    catch (err) {
      console.error('There was an error with the wds request:', err)
    }
  }
}

export const wdsFeedback = (feedback: FeedbackItem) => {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      const { data } = await axios.post('/api/wdsFeedback', { feedback } )
      console.log('feedback', data)
    }
    catch (err) {
      console.error('There was an error with the wds request:', err)
    }
  }
}

