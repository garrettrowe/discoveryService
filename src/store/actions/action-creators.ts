

import { ActionTypes } from 'store/actions'
import { ModeTypes, IAction } from 'types'
import { NotificationData } from '../../types/common/types'


export const setSelectedAnswer = (answer: any) => {
  return {
    type: ActionTypes.SET_SELECTED_ANSWER,
    payload: { selectedAnswer: answer }
  }
}

export const setAuthToken = (authToken: string) => {
  return {
    type: ActionTypes.SET_AUTH_TOKEN,
    payload: { authToken }
  }
}

export const setLoadingState = (loading: boolean) => {
  return {
    type: ActionTypes.SET_LOADING_STATE,
    payload: { loading }
  }
}

export const setTAOptions = (loadO: boolean) => {
  return {
    type: ActionTypes.SET_TAOPTIONS_STATE,
    payload: { loadO }
  }
}

export const receiveWDSRes = (data: any) => {
  return {
    type: ActionTypes.RECEIVE_WDS_RES,
    payload: { data: data.wdsRes }
  }
}

export const setAppMode = (mode: ModeTypes | string | string[]): IAction => {
  return {
    type: ActionTypes.SET_APP_MODE,
    payload: { mode }
  }
}

export const setNotification = (notification: NotificationData): IAction => {
  return {
    type: ActionTypes.SET_NOTIFICATION,
    payload: { notification }
  }
}

