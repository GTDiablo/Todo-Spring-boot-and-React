import { createSlice} from '@reduxjs/toolkit';
//
import User from "../../models/user";

export interface UserState {
    user?: User;
    isLoading: boolean;
}

const initialState: UserState = {
    user: undefined,
    isLoading: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    }
});

export default userSlice.reducer
