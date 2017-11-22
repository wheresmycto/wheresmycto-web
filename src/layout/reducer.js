const initialState = {
  drawerOpen: false,
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case '@layout/OPEN_DRAWER': {
      return {
        ...state,
        drawerOpen: true,
      }
    }
    case '@layout/CLOSE_DRAWER': {
      return {
        ...state,
        drawerOpen: false,
      }
    }
    default:
      return state
  }
}
