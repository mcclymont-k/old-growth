import { createStore } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'

import rootReducer from './Reducers/index'


const defaultState = {
  user: {
    name: 'Kieran',
    age: 30,
    email: 'asdas@asdasd.com',
    contributionLevel: 3
  }
}

const store = createStore(rootReducer, defaultState)
export default store
