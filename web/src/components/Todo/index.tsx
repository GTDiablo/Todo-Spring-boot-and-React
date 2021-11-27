import style from './style.module.scss';
//
import React, {memo, useEffect, useState} from "react";
//
import TodoModel from "../../models/todo";
import EditableText from "../EditableText";
import {useDispatch} from "react-redux";
import {updateTodoAsync, deleteTodoAsync} from "../../features/todo/todoActions";
import Todo from "../../models/todo";

type Props = TodoModel;

const Index = (
    {
        id,
        title,
        // createdAt,
        isCompleted,
    }:Props
) => {
    const dispatch = useDispatch();

    const [localTitle, setLocalTitle] = useState(title);
    const [localIsCompleted, setLocalIsCompleted] = useState(isCompleted);

    useEffect(()=> {
        const payload: Todo = {
            id,
            title: localTitle,
            isCompleted: localIsCompleted,
        };
        dispatch(updateTodoAsync(payload));
    }, [id, localTitle, localIsCompleted, dispatch]);

    const handleDelete = () => {
        dispatch(deleteTodoAsync(id));
    }

    return(
        <div className={style["Todo"]}>
            <div className={style["Todo__body"]}>
                <div className={style["Todo__body__main"]}>
                    <EditableText
                        text={localTitle}
                        editable
                        onTextChange={(text)=> setLocalTitle(text)}
                    />
                    <input
                        className={style["Todo__body__checkbox"]}
                        type="checkbox"
                        defaultChecked={localIsCompleted}
                        onChange={()=> setLocalIsCompleted(!localIsCompleted)}
                    />
                </div>
            </div>
            <div onClick={handleDelete} className={style["Todo__delete"]}>Delete</div>
            {/*<div className={style["Todo__footer"]}>Created at: {createdAt.toLocaleDateString()}</div>*/}
        </div>
    )
}

export default memo(Index);
