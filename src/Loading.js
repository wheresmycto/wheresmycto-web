import React from 'react'
import { CircularProgress } from 'material-ui'

const Loading = props => (
  <div
    style={{
      textAlign: 'center',
      paddingTop: 40,
    }}
  >
    <CircularProgress />
  </div>
)

export default Loading
