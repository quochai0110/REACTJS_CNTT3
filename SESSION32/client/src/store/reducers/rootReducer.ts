import { combineReducers } from "redux";
import { reducerCounter } from "./reducerCouter";
import { reducerUser } from "./reducerUser";

export const rootReducer = combineReducers({
    counter: reducerCounter,
    users: reducerUser
})