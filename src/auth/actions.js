import auth0 from './auth0'

export const credentialsKey = 'wheresMyCtoAuthCredentials'

export const openDialog = () => {
  auth0.authorize()
  return { type: '@auth/OPEN_DIALOG' }
}

export const success = ({ expiresIn, accessToken, idToken }) => {
  const expiresAt = JSON.stringify(expiresIn * 1000 + new Date().getTime())
  const credentials = { accessToken, idToken, expiresAt }
  localStorage.setItem(credentialsKey, JSON.stringify(credentials))
  return { type: '@auth/SUCCESS', credentials }
}

export const failure = error => {
  localStorage.removeItem(credentialsKey)
  return { type: '@auth/FAILURE', error }
}

export const setCredentials = credentials => ({
  type: '@auth/SET_CREDENTIALS',
  credentials,
})

export const signOut = () => {
  localStorage.removeItem(credentialsKey)
  return { type: '@auth/SIGN_OUT' }
}
