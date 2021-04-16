

import { Action } from 'redux'

// just react
export interface IAction extends Action {
  type: string
  payload?: any
}

export type ModeTypes = 'sales' | 'embedded' | 'self-service'

// common to both react and node
export * from './common'

// /*
// Args for React GA event function.
// Based on args found here https://github.com/react-ga/react-ga#reactgaeventargs
// Category is left out since it is assigned in wrapper function
// */
// export interface IAnalytics {
//   action: string
//   label?: string
//   value?: number
//   nonInteraction?: boolean
//   transport?: string
// }