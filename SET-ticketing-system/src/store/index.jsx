import { createStore, combineReducers } from 'redux'
import ticketReducer from './slice/ticket'
import userReducer from './slice/user'

const reducers = combineReducers({
    user: userReducer,
    ticket: ticketReducer
})

const store = createStore(reducers)

export default store;