import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import Children from '../Children'
import Loading from '../Loading'

import Callback from './Callback'
import { credentialsKey } from './actions'
import * as actions from './actions'

class Auth extends Component {
  componentWillMount() {
    const { setCredentials, signOut } = this.props
    const credentials = JSON.parse(localStorage.getItem(credentialsKey))
    const now = new Date().getTime()

    if (credentials && now < credentials.expiresAt) {
      setCredentials(credentials)
    } else {
      signOut()
    }
  }

  render() {
    const { render, startingUp } = this.props

    if (startingUp) {
      return <Loading />
    }

    return (
      <Children>
        <Route
          exact
          path="/auth/callback"
          render={routeProps => <Callback {...this.props} {...routeProps} />}
        />
        {render(this.props)}
      </Children>
    )
  }
}

export default connect(state => ({ ...state.auth }), actions)(Auth)
