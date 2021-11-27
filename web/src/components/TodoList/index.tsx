import style from './style.module.scss';
//
import React, {memo} from 'react';
import TodoModel from "../../models/todo";
import Todo from 'components/Todo';

type Props = {
    todos: TodoModel[];
    isLoading: boolean;
};

const TodoList = ({todos, isLoading}: Props) => {
    const isEmpty = todos.length < 1;

    const renderTodos = () => {
        if(isEmpty) return (<div className={style["TodoList__empty"]}>No todos</div>)
        return (
            <div className={style["TodoList__inner"]}>
                {todos.map((todo)=> (<Todo key={todo.id} {...todo}/>))}
            </div>
        )
    }

    return (
        <div className={style["TodoList"]}>
            {
                isLoading ? <div className={style["TodoList__loading"]}>Loading...</div> : renderTodos()
            }
        </div>
    )
}

export default memo(TodoList);
