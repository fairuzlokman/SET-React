import { createStore, combineReducers } from "redux";
import homeReducer from "./slices/home";
import userReducer from "./slices/user";

const reducers = combineReducers({
    home: homeReducer,
    user: userReducer
});

const store = createStore(reducers);

export default store;