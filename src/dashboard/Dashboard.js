import React, { Component } from 'react'

class Dashboard extends Component {
  componentWillMount() {
    const { history, auth: { currentUser } } = this.props
    if (!currentUser) {
      history.replace('/')
    }
  }

  render() {
    return <h1>Dashboard</h1>
  }
}

export default Dashboard
