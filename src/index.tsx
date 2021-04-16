

import React, { createContext } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { mainReducer } from 'store'
import { composeWithDevTools } from 'redux-devtools-extension'
import { App } from 'app'
import { persistFileData } from 'store/middleware'
import { Config } from './config'


import thunkMiddleware from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'

const store = createStore(mainReducer, composeWithDevTools(
	applyMiddleware(thunkMiddleware)
))

export const storeContext = createContext({
	state: store.getState(),
	dispatch: store.dispatch
})

export const AppModeContext = createContext({
	// appMode: store.getState().appState.mode
})


render ((
	<Provider store={store}>
		<BrowserRouter history={createHistory()} basename={Config.baseUrlPath}>
			<Route component={App} />
		</BrowserRouter>
	</Provider>
),document.querySelector('.view'))
