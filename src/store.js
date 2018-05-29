import { createStore } from 'redux'

import rootReducer from './Reducers/index'


const defaultState = {
  user: {},
  articles: []
}

const store = createStore(rootReducer, defaultState)
export default store
