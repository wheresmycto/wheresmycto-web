import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'

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

  componentWillReceiveProps(nextProps) {
    const { credentials, userInfo } = nextProps
    const { credentials: oldCredentials } = this.props

    if (credentials && !oldCredentials) {
      userInfo(credentials)
    }
  }

  render() {
    const { render, startingUp, credentials, currentUser } = this.props

    if (startingUp || (credentials && !currentUser)) {
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

const ConnectedAuth = connect(state => ({ ...state.auth }), actions)(Auth)

export default withRouter(ConnectedAuth)
