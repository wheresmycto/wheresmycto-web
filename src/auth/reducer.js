const initialState = {
  startingUp: true,
  credentials: null,
  currentUser: null,
  error: null,
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case '@auth/SUCCESS': {
      return {
        ...state,
        credentials: action.credentials,
      }
    }
    case '@auth/FAILURE': {
      return {
        ...state,
        error: action.error,
      }
    }
    case '@auth/SET_CREDENTIALS': {
      return {
        ...state,
        startingUp: false,
        credentials: action.credentials,
      }
    }
    case '@auth/SIGN_OUT': {
      return {
        ...state,
        startingUp: false,
      }
    }
    default:
      return state
  }
}
