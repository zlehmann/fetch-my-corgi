import { combineReducers } from 'redux'
import dogsReducer from './dogs_reducer'

const rootReducer = combineReducers({
  dogs: dogsReducer,
})

export default rootReducer
