import { AnswerItem, FilterItem, DocumentItem } from '../../../../../../types/common/types'

export interface EntitiesPanelProps {
  answers: AnswerItem[]
  queryAggregation:QueryAggregation
  wdsSuccess: boolean
  totalResults: number
  loading: boolean
  selectedAnswer?:AnswerItem
  }