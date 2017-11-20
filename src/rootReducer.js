import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import auth from './auth/reducer'

const reducers = {
  auth,
  form,
}

const rootReducer = combineReducers(reducers)
export default rootReducer
