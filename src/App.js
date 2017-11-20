import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { MuiThemeProvider } from 'material-ui'
import { getMuiTheme } from 'material-ui/styles'
import { grey700 } from 'material-ui/styles/colors'
import 'normalize.css'
import 'typeface-roboto'

import './App.css'
import Auth from './auth/Auth'
import HomePage from './home/HomePage'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: grey700,
  },
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Auth
          render={authProps => (
            <Router>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={routeProps => (
                    <HomePage auth={{ ...authProps }} {...routeProps} />
                  )}
                />
              </Switch>
            </Router>
          )}
        />
      </MuiThemeProvider>
    )
  }
}
export default App
