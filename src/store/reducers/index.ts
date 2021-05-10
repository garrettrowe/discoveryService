

import { combineReducers } from 'redux'
import { initialAppState, InitialAppState } from 'store/initial-state'
import { IAction } from 'types/types.d'
import { ActionTypes } from 'store/actions'

import { AnswerItem } from '../../types/common/types'

export const appState = (state: InitialAppState = initialAppState, action: IAction): InitialAppState => {
  switch (action.type) {
    case ActionTypes.RECEIVE_WDS_RES: {
      const msg = action.payload.data;
      let keysErrorMsg = ''
      if(msg.message === 'BAD') {
        if(msg.output !== undefined && msg.output.error !== undefined) {
          keysErrorMsg = msg.output.error + ' '
        }
        keysErrorMsg = keysErrorMsg + 'Please check the Discovery API key, environment id & collection id set in the "Service Configuration" of the left nav bar.'
        console.log(keysErrorMsg)

        return {
          ...state,
          wdsSuccess: false,
          totalResults: null,
          keysError: keysErrorMsg
        }
      }
      return {
        ...state,
        selectedAnswer: action.payload.data.document ? findDocument(action.payload.data.document, action.payload.data.raw_output) : null,
        selectedDocument: null,
        wdsSuccess: action.payload.data.status == "success" ? true : false,
        totalResults: action.payload.data.raw_output.matching_results,
        answerItems: action.payload.data.answerItems,
        filterItems: action.payload.data.filterItems,
        queryAggregation: action.payload.data.queryAggregation,
        keysError:''
      }
    }

    case ActionTypes.SET_SELECTED_ANSWER: {
      return {
        ...state,
        selectedAnswer: action.payload.selectedAnswer
      }
    }

    case ActionTypes.SET_STORY_TOGGLE_ACTIVE: {
      return {
        ...state,
        storySelectorToggle: action.payload.storySelectorToggle
      }
    }

    case ActionTypes.SET_SELECTED_STORY: {
      console.log('SET_SELECTED_STORY', action.payload.selectedStory);
      return {
        ...state,
        selectedStory: action.payload.selectedStory,
        wdsSuccess: false
      }
    }


    case ActionTypes.SET_LOADING_STATE: {
      return {
        ...state,
        loading: action.payload.loading
      }
    }

    case ActionTypes.SET_TAOPTIONS_STATE: {
      return {
        ...state,
        loadO: action.payload.loadO
      }
    }

    case ActionTypes.SET_NOTIFICATION:
      return { ...state, notification: action.payload.notification }

    default: return state
  }
}


export const mainReducer = combineReducers({ appState })

function findDocument(docName, rawOutput) {
  let dummyAnswerItem = {} as AnswerItem
  if (rawOutput.results.length > 0) {
    if (rawOutput.results[0].metadata) {
        dummyAnswerItem.pub_date = rawOutput.results[0].metadata.publish_date
        dummyAnswerItem.file_author = rawOutput.results[0].metadata.author
    }
    dummyAnswerItem.documentLevelAnswer = true
    dummyAnswerItem.file_title = docName
    dummyAnswerItem.confidence = null
    dummyAnswerItem.file_type = docName.match(/\.[0-9a-z]+$/i)[0]
    dummyAnswerItem.file_name = docName
    dummyAnswerItem.leading_text = ""
    dummyAnswerItem.text = ""
    dummyAnswerItem.trailing_text = ""
    dummyAnswerItem.title = ""
    dummyAnswerItem.raw = rawOutput.results[0]
    dummyAnswerItem.location = [0, 0]
    dummyAnswerItem.file_segment_count =  rawOutput.results[0].segment_metadata ? rawOutput.results[0].segment_metadata.total_segments : null
  }

  return dummyAnswerItem
}