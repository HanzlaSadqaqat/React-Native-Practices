import { combineReducers } from "redux";
import todoReducer from "./todoReducer";


export const RootReducer = combineReducers({
    todoReducer: todoReducer
})

export type rootState = ReturnType<typeof RootReducer>