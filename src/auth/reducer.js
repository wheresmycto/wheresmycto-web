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
        credentials: action.credentials,
      }
    }
    case '@auth/SIGN_OUT': {
      return {
        ...state,
        startingUp: false,
      }
    }
    case '@auth/USER_INFO_SUCCESS': {
      return {
        ...state,
        startingUp: false,
        currentUser: action.user,
      }
    }
    case '@auth/USER_INFO_FAILURE': {
      return {
        ...state,
        startingUp: false,
        error: action.error,
      }
    }
    default:
      return state
  }
}
