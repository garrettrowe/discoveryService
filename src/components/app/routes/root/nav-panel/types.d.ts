import { Story, AnswerItem, FilterItem, QueryAggregation, DocumentItem } from '../../../../../types/common/types'
import { ModeTypes } from '../../../../../types/types'

export interface NavPanelProps {
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
  selectedAnswer?: AnswerItem
  keysError: string
}