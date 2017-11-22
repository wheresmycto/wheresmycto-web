import React, { Component } from 'react'
import { RaisedButton } from 'material-ui'

class Home extends Component {
  componentWillMount() {
    const { history, auth: { currentUser } } = this.props
    if (currentUser) {
      history.replace('/dashboard')
    }
  }

  render() {
    const { auth: { openDialog } } = this.props

    return (
      <div style={{ textAlign: 'center', width: '80%', margin: '0 auto' }}>
        <h1>Where&#39;s my CTO?</h1>
        <h2>
          Get access to the insights of wise CTOs{' '}
          <span role="img" aria-label="Sage">
            👳🏽
          </span>
        </h2>
        <p>
          We know it&#39;s not always easy to be a non-technical founder.
          It&#39;s hard to earn the respect of the tech guys when you don&#39;t
          know how to code. Heck, sometimes it&#39;s even hard to trust
          they&#39;re really doing what needs to be done! That is: if you manage
          to attract them at all{' '}
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
        <RaisedButton
          label="Join us for free"
          primary={true}
          onClick={openDialog}
        />
        <ul>
          <li>Be part of a global network of non-technical founders</li>
          <li>
            Ask questions and get comprehensive answers from experienced CTOs
          </li>
          <li>
            Schedule 1:1 sessions with people you wouldn&#39;t otherwise be able
            to access
          </li>
          <li>
            Be confident you&#39;re not wasting precious money and resources
          </li>
          <li>Finally get the respect you deserve as a founder</li>
        </ul>
        <RaisedButton
          label="Join us for free"
          primary={true}
          onClick={openDialog}
        />
        <p>
          Made by{' '}
          <a
            href="http://seasoned.cc"
            target="_blank"
            rel="noreferrer noopener"
          >
            Seasoned
          </a>
        </p>
      </div>
    )
  }
}
export default Home
