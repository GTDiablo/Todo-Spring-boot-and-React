import {createAsyncThunk} from "@reduxjs/toolkit";
import todoApi from "./todoAPI";
import Todo from "models/todo";

type TodoID = Todo['id'];


export const getTodosAsync = createAsyncThunk(
    'todo/getTodos',
    async () => await todoApi.getAllTodos()
);

export const getTodoAsync = createAsyncThunk(
    'todo/getTodo',
    async (id: TodoID) => {
        return await todoApi.getTodo(id);
    }
);

export const updateTodoAsync = createAsyncThunk(
    'todo/updateTodo',
    async (payload: Todo) => todoApi.updateTodo(payload.id, payload)
)

export const createTodoAsync = createAsyncThunk(
    'todo/creatTodo',
    async (todo: Pick<Todo, 'title' | 'isCompleted'>)=> {
        return await todoApi.createTodo(todo);
    }
);

export const deleteTodoAsync = createAsyncThunk(
  'todo/deleteTodo',
  async (id: Todo['id']) => {
      await todoApi.deleteTodo(id);
      return id;
  }
);
