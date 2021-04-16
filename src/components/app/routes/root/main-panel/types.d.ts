import { Story, AnswerItem, FilterItem, QueryAggregation, DocumentItem } from 'common/types';
import { ModeTypes } from 'types'

export interface MainPanelProps {
  mode: Mode
  dispatch: any
  query: any
  loading: boolean
  wdsSuccess: boolean
  totalResults: number
  answerItems: AnswerItem[]
  filterItems: FilterItem[]
  queryAggregation: QueryAggregation
  storySelectorToggle: boolean
  selectedStory?: Story
  selectedAnswer?: AnswerItem
  keysError: string
}