
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import {users} from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const logger = createLogger({
  collapsed: true,
})
 
export const store = createStore(
  users,
  composeEnhancers(applyMiddleware(thunk, logger))
)





