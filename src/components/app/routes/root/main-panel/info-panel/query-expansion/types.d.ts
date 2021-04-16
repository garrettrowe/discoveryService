import { AnswerItem, FilterItem, QueryAggregation, Story } from '../../../../../../types/common/types'

export interface QueryExpansionProps {
    dispatch: any,
    queryAggregation?: QueryAggregation
    selectedStory?: Story
    mode: Mode
  }