import { combineReducers } from "redux";
import { reducerUser } from "./reducerUser";

export const rootReducer=combineReducers({
    users: reducerUser
})