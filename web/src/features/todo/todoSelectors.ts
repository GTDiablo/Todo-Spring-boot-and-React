import {RootState} from "app/store";

const selectTodo = (state: RootState) => state.todo;

export const selectTodos = (state: RootState) => selectTodo(state).todos;

export const selectIsLoading = (state: RootState) => selectTodo(state).isLoading;

