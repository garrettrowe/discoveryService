

import { getAuthTokenFromCookie } from 'utils'
import { ModeTypes } from 'types'
import { Story, FilterItem, AnswerItem, QueryAggregation, DocumentItem, NotificationData }  from '../types/common/types'

export interface InitialAppState {
  // mode: ModeTypes
  name: string
  authToken: string
  storySelectorToggle: boolean
  selectedStory: Story
  selectedDocument: DocumentItem
  loading: boolean
  loadO: boolean
  wdsSuccess: boolean
  totalResults: number
  filterItems: FilterItem[]
  answerItems: AnswerItem[]
  queryAggregation: QueryAggregation
  selectedAnswer?: AnswerItem
  keysError: string
  notification: NotificationData

}

export const initialAppState: InitialAppState = {
  name: 'Expert Assist',
  // mode: 'sales',
  authToken: getAuthTokenFromCookie(),
  storySelectorToggle: false,
  selectedDocument: null,
  selectedStory: null,
  wdsSuccess: null,
  loading: false,
  loadO: false,
  totalResults: 0,
  filterItems: [],
  answerItems: [],
  queryAggregation: null,
  keysError: '',
  notification: null
}