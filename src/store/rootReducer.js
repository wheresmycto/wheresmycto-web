import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import auth from '../auth/reducer'
import layout from '../layout/reducer'

const reducers = {
  auth,
  layout,
  form,
}

const rootReducer = combineReducers(reducers)
export default rootReducer
