import style from './style.module.scss';
//
import React, { memo } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../../features/user/userActions";
import {selectLoggedInUser} from "../../features/user/userSelectors";

const Header = () => {
    const dispatch = useDispatch();
    const loggedInUser = useSelector(selectLoggedInUser);
    const username = !!loggedInUser ? loggedInUser.username : 'Anonimus';

    const handleLogoutButtonClicked = () => {
        dispatch(logoutUser());
    }
    return (
        <div className={style["Header"]}>
            <div className={style["Header__inner"]}>
                <div className={style["Header__name"]}>
                    Logged in as: {username}
                </div>
                <div
                    className={style["Header__logout"]}
                    onClick={handleLogoutButtonClicked}
                >
                    Logout
                </div>
            </div>
        </div>
    )
}

export default memo(Header);
