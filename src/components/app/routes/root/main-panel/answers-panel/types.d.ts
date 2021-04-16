import { AnswerItem, QueryAggregation } from '../../../../../types/common/types'

export interface AnswerPanelProps {
  answers: AnswerItem[]
  queryAggregation:QueryAggregation
  wdsSuccess: boolean
  totalResults: number
  loading: boolean
  selectedAnswer?:AnswerItem
}