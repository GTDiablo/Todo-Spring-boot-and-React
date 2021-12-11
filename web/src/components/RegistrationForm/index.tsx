import style from './style.module.scss';
//
import React, {memo, useState} from "react";
import Button from "../Button";

const RegistrationForm = () => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showSuccess, setShowSuccess] = useState<boolean>(false);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if(!!username && !!password && !!email){
            console.log('Registrate in');
            setUsername('')
            setPassword('')
            setEmail('')
            setShowSuccess(true);
            return;
        }
    }
    return(
        <form
            className={style["RegistrationForm"]}
            onSubmit={handleSubmit}
        >
            <div className={style["RegistrationForm__input-group"]}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={({target}) => setUsername(target.value)}
                />
            </div>
            <div className={style["RegistrationForm__input-group"]}>
                <label htmlFor="username">Email:</label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={({target}) => setEmail(target.value)}
                />
            </div>
            <div className={style["RegistrationForm__input-group"]}>
                <label htmlFor="password">Password:</label>
                <input
                    type="text"
                    id="password"
                    value={password}
                    onChange={({target})=> setPassword(target.value)}
                />
            </div>

            <Button text="Sign up" className={style["RegistrationForm__submit"]}  onClick={()=>{}} />
            {showSuccess && <div className={style['RegistrationForm__success']}>Successful registration.</div>}

        </form>
    )
}

export default memo(RegistrationForm);
