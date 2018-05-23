import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { updateUser } from './reducer'

const rootReducer = combineReducers({user: updateUser, routing: routerReducer})

export default rootReducer
