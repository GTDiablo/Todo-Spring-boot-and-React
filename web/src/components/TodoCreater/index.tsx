import style from './style.module.scss'
//
import React, {memo, useState} from "react";
import Button from "../Button";
import {useDispatch} from "react-redux";
import {createTodoAsync} from "../../features/todo/todoActions";

const TodoCreator = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState<string>('');

    const handleSubmit = () => {
        if(!!title){
            const newTodo = {
                title,
                isCompleted: false,
            }
            dispatch(createTodoAsync(newTodo));
            setTitle('');
        }
    }
    return (
        <div className={style["TodoCreator"]}>
            <input
                className={style["TodoCreator__input"]}
                type="text"
                value={title}
                onKeyUp={(event)=> event.key === 'Enter' && handleSubmit()}
                onChange={(event) => setTitle(event.target.value)}
            />
            <Button
                text="Add"
                className={style["TodoCreator__button"]}
                onClick={handleSubmit}
            />

        </div>
    )
}

export default memo(TodoCreator);
