import style from './style.module.scss';
//
import React, {memo, useEffect} from 'react';
import TodoCreator from "../TodoCreater";
import TodoList from "../TodoList";
import Todo from "../../models/todo";
import { useDispatch, useSelector} from "react-redux";
import { getTodosAsync } from "../../features/todo/todoActions";
import {selectIsLoading, selectTodos} from "../../features/todo/todoSelectors";
import Header from "../Header";

const LoggedInLayout = () => {
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getTodosAsync());
    }, [dispatch]);

    const todos: Todo[] = useSelector(selectTodos);
    const isLoading: boolean = useSelector(selectIsLoading);
    return (
        <div className={style["LoggedInLayout"]}>
            <Header />
            <div className={style["LoggedInLayout__container"]}>
                <TodoCreator />
                <TodoList
                    todos={todos}
                    isLoading={isLoading}
                />
            </div>
        </div>
    )
}

export default memo(LoggedInLayout);
