import {createAsyncThunk} from "@reduxjs/toolkit";
import userAPI from "./userAPI";

type UserLoginActionArg = {
    username: string;
    password: string;
}
export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (body: UserLoginActionArg) => await userAPI.loginUser(body)
);
export const signUpUser = createAsyncThunk(
    'user/signUpUser',
    async (body: UserLoginActionArg) => await userAPI.signUpUser(body)
);

export const logoutUser = createAsyncThunk(
    'user/logoutUser',
    async () => await userAPI.logoutUser()
);

