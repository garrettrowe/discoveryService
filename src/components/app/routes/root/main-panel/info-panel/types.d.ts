import { AnswerItem, FilterItem, QueryAggregation, DocumentItem, Story} from '../../../../../types/common/types'

export interface InfoProps {
  dispatch: any
  queryAggregation: QueryAggregation
  selectedAnswer?: AnswerItem
  selectedStory?: Story
  mode: Mode
}