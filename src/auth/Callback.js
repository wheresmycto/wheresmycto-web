import { Component } from 'react'
import auth0 from './auth0'

class Callback extends Component {
  componentWillMount() {
    const { history, success, failure } = this.props

    auth0.parseHash((error, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        success(authResult)
      } else if (error) {
        failure(error)
      }
      history.replace('/')
    })
  }

  render() {
    return null
  }
}

export default Callback
