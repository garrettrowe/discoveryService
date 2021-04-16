

import { InitialAppState } from '../../store/initial-state' 

export interface IAppProps {
  appState: any
  dispatch: any
}

export interface IAppState {
  isNavOpen: boolean
}