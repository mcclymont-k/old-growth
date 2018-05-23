import { createStore } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'

import rootReducer from './Reducers/index'


const defaultState = {
  user: {},
  forestData: [
      {
        place: 'Russia',
        total: 3
      },
      {
        place: 'Norway',
        total: 3
      },
      {
        place: 'France',
        total: 12
      },
      {
        place: 'United Kingdom',
        total: 12
      },
      {
        place: 'Nova Scotia',
        total: 14
      },
      {
        place: 'Australia',
        total: 17
      },
      {
        place: 'U.S.A',
        total: 172
      }
    ]
}

const store = createStore(rootReducer, defaultState)
export default store
