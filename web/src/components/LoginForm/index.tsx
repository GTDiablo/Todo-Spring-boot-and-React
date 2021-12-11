import style from './style.module.scss';
//
import React, {memo, useState} from "react";
import Button from "../Button";

const LoginForm = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if(!!username && !!password){
            console.log('Logging in');
            localStorage.setItem('loggedin', JSON.stringify(true));
            window.location.reload();
        }
    }
    return(
        <form
            className={style["LoginForm"]}
            onSubmit={handleSubmit}
        >
            <div className={style["LoginForm__input-group"]}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={({target}) => setUsername(target.value)}
                />
            </div>
            <div className={style["LoginForm__input-group"]}>
                <label htmlFor="password">Password:</label>
                <input
                    type="text"
                    id="password"
                    value={password}
                    onChange={({target})=> setPassword(target.value)}
                />
            </div>

            <Button text="Login" className={style["LoginForm__submit"]} onClick={()=>{}} />

        </form>
    )
}

export default memo(LoginForm);
