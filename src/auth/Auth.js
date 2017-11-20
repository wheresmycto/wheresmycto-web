import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from './actions'

class Auth extends Component {
  render() {
    const { render } = this.props
    return <div>{render(this.props)}</div>
  }
}

export default connect(state => ({ ...state.auth }), actions)(Auth)
