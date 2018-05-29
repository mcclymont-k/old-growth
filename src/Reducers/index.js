import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { updateArticles } from './articleReducer'
import { updateUser } from './reducer'

const rootReducer = combineReducers({user: updateUser, articles: updateArticles, routing: routerReducer})

export default rootReducer
