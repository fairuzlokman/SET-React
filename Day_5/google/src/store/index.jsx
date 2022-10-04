import { createStore, combineReducers } from 'redux'
import userReducer from './slice/user'


const reducers = combineReducers({
    user: userReducer
})

const store = createStore(reducers)

export default store;