import { createSlice} from '@reduxjs/toolkit';
//
import Todo from "models/todo";
import {createTodoAsync, deleteTodoAsync, getTodosAsync,} from './todoActions'

export interface TodoState {
    todos: Todo[];
    isLoading: boolean;
}

const initialState: TodoState = {
    todos: [],
    isLoading: true,
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Getting all todos
            .addCase(getTodosAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getTodosAsync.fulfilled, (state, action)=> {
               state.isLoading = false;
               state.todos = action.payload.reverse()
            })
            // Save todo
            .addCase(createTodoAsync.fulfilled, (state, action)=> {
                state.todos = [action.payload, ...state.todos];
            })
            // Delete
            .addCase(deleteTodoAsync.fulfilled, (state, action)=> {
                state.todos = state.todos.filter((todo: Todo) => todo.id !== action.payload);
            })
    }
});

export default todoSlice.reducer
