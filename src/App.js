import React, { Component } from 'react'
import { MuiThemeProvider } from 'material-ui'
import { getMuiTheme } from 'material-ui/styles'
import { lightBlueA100 } from 'material-ui/styles/colors'
import 'typeface-roboto'

import './App.css'
import GradientWrap from './GradientWrap'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: lightBlueA100,
  },
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div
          style={{
            paddingTop: 40,
            width: '80%',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <GradientWrap colors={['#00c9ff', '#92fe9d']} percents={[20, 80]}>
            <h1 style={{ marginBottom: 80 }}>Where's my CTO?</h1>
          </GradientWrap>
          <h2>
            Be part of a global network of non-technical founders and get access
            to the insights of rock-star CTOs
          </h2>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
