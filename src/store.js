import { createStore } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'

import rootReducer from './Reducers/index'


const defaultState = {
  user: {}
}

const store = createStore(rootReducer, defaultState)
export default store
