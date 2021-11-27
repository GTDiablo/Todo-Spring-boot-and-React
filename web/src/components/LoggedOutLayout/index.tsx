import style from './style.module.scss';
//
import React, {memo, useState} from "react";
import RegistrationForm from "../RegistrationForm";
import LoginForm from "../LoginForm";

const LoggedOutLayout = () => {
    const [userHasAccount, setUserHasAccount] = useState<boolean>(false);

    const toggleForm = () => {
        setUserHasAccount(!userHasAccount);
    }

    return (
        <div className={style["LoggedOutLayout"]}>
            <div className={style["LoggedOutLayout__box"]}>
                {userHasAccount ? <LoginForm /> : <RegistrationForm />}
                <div
                    className={style["LoggedOutLayout__toggle-form"]}
                    onClick={toggleForm}
                >
                    { userHasAccount ? 'Dont have an account yet?' : 'You already have an account?'}
                </div>
            </div>
        </div>
    )
}

export default memo(LoggedOutLayout);
