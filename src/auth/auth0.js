import { WebAuth } from 'auth0-js'

const {
  REACT_APP_AUTH0_DOMAIN,
  REACT_APP_AUTH0_CLIENT_ID,
  REACT_APP_AUTH0_CALLBACK_URL,
} = process.env

const auth0 = new WebAuth({
  domain: REACT_APP_AUTH0_DOMAIN,
  clientID: REACT_APP_AUTH0_CLIENT_ID,
  redirectUri: REACT_APP_AUTH0_CALLBACK_URL,
  audience: `https://${REACT_APP_AUTH0_DOMAIN}/userinfo`,
  responseType: 'token id_token',
  scope: 'openid profile email',
})

export default auth0
