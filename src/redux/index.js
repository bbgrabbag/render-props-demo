import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import contacts from "./contacts";

const store = createStore(combineReducers({ contacts }), applyMiddleware(thunk));

export default store;