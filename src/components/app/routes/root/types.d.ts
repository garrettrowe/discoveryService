import { Story, AnswerItem, FilterItem, QueryAggregation, DocumentItem } from 'common/types';
import { ModeTypes } from 'types'

export interface IProps {
  mode: ModeTypes
  query: any
  dispatch: any
  loading: boolean
  loadO: boolean
  wdsSuccess: boolean
  totalResults: number
  answerItems: AnswerItem[]
  filterItems: FilterItem[]
  queryAggregation: QueryAggregation
  storySelectorToggle: boolean
  selectedStory?: Story
  selectedAnswer?: AnswerItem,
  keysError: string
}