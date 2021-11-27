import {RootState} from "app/store";

const selectUser = (state: RootState) => state.user;

export const selectLoggedInUser = (state: RootState) => selectUser(state).user
