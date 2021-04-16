

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router';
import { Route, withRouter, Switch, Redirect, RouteComponentProps } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import { IAppProps, IAppState } from './app.d'
import { Root } from './routes'
import { ModeTypes } from 'types/types'
import { Config } from 'config'

import './styles.scss'

class app extends Component<IAppProps, IAppState> {

  WelcomeNavigator = ( props: RouteComponentProps ) => {
    const match = props.match
    const mode = "sales"

    return (
      <>
          <Route render={() => {
            return (
              <Root {...this.props.appState} dispatch={this.props.dispatch} query={this.props} mode={mode} />
            )
          }}/>
      </>
    )
  }

  render() {
    const params = new URLSearchParams(location.search)
    return (
      <div className="app">
        <Switch>
          <Route path='/:query' component={this.WelcomeNavigator} />
          <Route path='/' component={this.WelcomeNavigator} />
          <Route component={() => <Redirect to='/'/>} />
        </Switch>
      </div>

    )
  }
}

export const App = withRouter (
  connect(state => state)(hot(app))
)
