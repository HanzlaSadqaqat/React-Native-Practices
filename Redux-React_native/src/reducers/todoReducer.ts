import { createReducer, createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

export interface todoState {
    id: string,
    description: string
}

const initialState: todoState[] = [{
    id: "",
    description: ""
}]

const todoSlice = createSlice({
    name: "todoList",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const newState = {
                id: nanoid(),
                description: action.payload
            }
            state.push(newState)
            return state
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state = state.filter((todo) => todo.id !== action.payload)
            return state
        }
    }
})
export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer