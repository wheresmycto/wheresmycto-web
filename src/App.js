import React, { Component } from 'react'
import { MuiThemeProvider, RaisedButton } from 'material-ui'
import { getMuiTheme } from 'material-ui/styles'
import { grey700 } from 'material-ui/styles/colors'
import 'normalize.css'
import 'typeface-roboto'

import './App.css'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: grey700,
  },
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={{ textAlign: 'center', width: '80%', margin: '0 auto' }}>
          <h1>Where's my CTO?</h1>
          <h2>
            Get access to the insights of wise CTOs{' '}
            <span role="img" aria-label="Sage">
              👳🏽
            </span>
          </h2>
          <p>
            We know it's not always easy to be a non-technical founder. It's
            hard to earn the respect of the tech guys when you don't know how to
            code. Heck, sometimes it's even hard to trust they're really doing
            what needs to be done! That is: if you manage to attract them at all{' '}
            <span role="img" aria-label="Scream">
              🙀
            </span>
          </p>
          <p>
            OMG! If only there was a way to get ahead of them and make sure your
            startup is on the right track...well, here it is! A community of
            non-technical founders and seasoned CTOs ready to help you{' '}
            <span role="img" aria-label="Smile">
              😄
            </span>
          </p>
          <RaisedButton label="Join us for free" primary={true} />
          <ul>
            <li>Be part of a global network of non-technical founders</li>
            <li>
              Ask questions and get comprehensive answers from experienced CTOs
            </li>
            <li>
              Schedule 1:1 sessions with people you wouldn't otherwise be able
              to access
            </li>
            <li>
              Be confident you're not wasting precious money and resources
            </li>
            <li>Finally get the respect you deserve as a founder</li>
          </ul>
          <RaisedButton label="Join us for free" primary={true} />
        </div>
      </MuiThemeProvider>
    )
  }
}
export default App
