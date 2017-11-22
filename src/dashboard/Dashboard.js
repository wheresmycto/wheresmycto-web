import React, { Component } from 'react'

import Layout from '../layout/Layout'

class Dashboard extends Component {
  componentWillMount() {
    this.requireCurrentUser(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.requireCurrentUser(nextProps)
  }

  requireCurrentUser(props) {
    const { history, auth: { currentUser } } = props
    if (!currentUser) {
      history.replace('/')
    }
  }

  render() {
    return (
      <Layout {...this.props}>
        <h2>Ask any question and a wise CTO will answer</h2>
      </Layout>
    )
  }
}

export default Dashboard
