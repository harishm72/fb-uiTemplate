import { combineReducers } from 'redux'
import postReducer from './postReducer'
import optionReducer from './optionReducer'

export default combineReducers({
  posts : postReducer,
  options : optionReducer
})