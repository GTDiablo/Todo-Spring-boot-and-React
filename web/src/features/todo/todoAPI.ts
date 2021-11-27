import apiHelper from "app/apiHelper";
import Todo from "models/todo";

type TodoID = Todo['id'];

const getAllTodos = async (): Promise<Todo[]> => {
    const response = await apiHelper.get<Todo[]>('/todos');
    return response.data;
}

const getTodo = async (id: TodoID): Promise<Todo> => {
    const response = await apiHelper.get(`/todos/${id}`);
    return response.data;
}

const updateTodo = async (id: TodoID, body: Partial<Todo>): Promise<Todo> => {
   const response = await apiHelper.put<Todo>(`/todos/${id}`, body);
    return response.data;
}

const deleteTodo = async (id: TodoID): Promise<Todo> => {
    const response = await apiHelper.delete(`/todos/${id}`);
    return response.data;
}

const createTodo = async (body: Pick<Todo, 'title'| 'isCompleted'>) => {
    const response = await apiHelper.post<Todo>('/todos', body);
    return response.data;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getAllTodos,
    getTodo,
    updateTodo,
    deleteTodo,
    createTodo,
}
