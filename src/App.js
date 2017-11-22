import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { MuiThemeProvider } from 'material-ui'
import { getMuiTheme } from 'material-ui/styles'
import { grey500 } from 'material-ui/styles/colors'
import 'normalize.css'
import 'typeface-roboto'

import './App.css'
import Auth from './auth/Auth'
import Home from './home/Home'
import Dashboard from './dashboard/Dashboard'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: grey500,
  },
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Router>
          <Auth
            render={authProps => (
              <Switch>
                <Route
                  exact
                  path="/"
                  render={routeProps => (
                    <Home auth={{ ...authProps }} {...routeProps} />
                  )}
                />
                <Route
                  exact
                  path="/dashboard"
                  render={routeProps => (
                    <Dashboard auth={{ ...authProps }} {...routeProps} />
                  )}
                />
              </Switch>
            )}
          />
        </Router>
      </MuiThemeProvider>
    )
  }
}
export default App
