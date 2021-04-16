

export interface Story {
  name: string
  description: string
  doc_types: [string]
  icon: string
  isEnabled: boolean
  adjective: string
}

export interface NlqParams {
  query_string: string
  filter?: any
  document?: any
  isSalesMode?: boolean
}

export interface FilterItem {
  id: number
  text: string
}

export interface AnswerItem {
  title: string
  text: string
  leading_text: string
  trailing_text: string
  confidence: number
  location: number[]
  file_title: string
  file_type: string
  file_name: string
  file_segment_count: number
  raw: WDSRawDoc
  page_num?: string
  file_author?: string
  pub_date?: string
  upVoted?: boolean
  downVoted?: boolean
  documentLevelAnswer?: boolean
}

export interface QueryAggregation {
  original_query: string
  concepts: ConceptItem[]
  mentions: MentionItem[]
  file_names: DocumentItem[]
}

export interface ConceptItem {
  text: string
  relevance: number
  dbpedia: string
}

export interface MentionItem {
  text: string
  results: number
}

export interface DocumentItem {
  name: string
  matching_results: number
  file_name?: string
  author?: string
  publish_date?: string
}

export interface DBpediaItem {
  dbpedia_url: string
  dbpedia_abstract?: string
  dbpedia_image?: any
}


export interface WDSRawDoc {
  id: string
  subtitle: Array<string>
  text: string
  enriched_text: EnrichedTextObject
  extracted_metadata: any
  result_metadata: any
  segment_metadata: any
}

export interface FeedbackItem {
  segment_title: string
  feedback_positive: boolean
  query: string
}

export type NotificationType = 'error' | 'info' | 'success' | 'warning'

export interface NotificationData {
  kind: NotificationType
  title: string
  subtitle?: string
  error_code?: string
}
