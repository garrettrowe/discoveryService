import { Story, ModeTypes } from '../../../../../types/common/types'

export interface QueryBarProps {
    dispatch: any
    query: any
    loading: boolean
    selectedStory: Story
    mode: ModeTypes
    loadO: any
}