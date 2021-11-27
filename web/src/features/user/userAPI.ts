// import apiHelper from "app/apiHelper";
import User from "../../models/user";

type UserLoginActionArg = {
    username: string;
    password: string;
}

const loginUser = async (body: UserLoginActionArg): Promise<User> => {
    console.log('Loggin in user:', body);
    const user: User = { id: 1, username: 'Zsolt'};
    return user;
}

const logoutUser = async () => {
    console.log('Logging out user');
}

const signUpUser = async (body: UserLoginActionArg): Promise<User> => {
    console.log('Loggin in user:', body);
    const user: User = { id: 1, username: 'Zsolt'};
    return user;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    loginUser,
    logoutUser,
    signUpUser
}
