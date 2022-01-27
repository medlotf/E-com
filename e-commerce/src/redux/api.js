import { loginFailure, loginStart, loginSuccess, logoutUser, registerUser } from "./userRedux";
import { publicRequest } from "../requestMethod";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};

export const logout = async (dispatch) => {
    dispatch(logoutUser());
};

export const register = async (dispatch, user) => {
    try {
        const res = await publicRequest.post("/auth/register", user);
        console.log(res.data)
        dispatch(registerUser());
    } catch (err) {
        console.log(err)
    }
};