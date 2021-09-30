import {combineReducers} from "redux";
import {postsReducer} from "./postsReducer";
import {usersReducer} from "./usersReducer";

export * from './usersReducer'
export * from './postsReducer'

export const rootReducer = combineReducers({
    posts: postsReducer,
    users: usersReducer
})