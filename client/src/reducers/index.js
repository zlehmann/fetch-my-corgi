import { combineReducers } from 'redux'
import dogsReducer from './dogs_reducer'
import sheltersReducer from './shelters_reducer'

const rootReducer = combineReducers({
  dogs: dogsReducer,
  shelters: sheltersReducer,
})

export default rootReducer
