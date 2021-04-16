import { AnswerItem } from '../../../../../../types/common/types'

export interface AnswerProps {
	answer: AnswerItem
  loading: boolean
  index: number
  originalQuery: string
  selected?: AnswerItem
}