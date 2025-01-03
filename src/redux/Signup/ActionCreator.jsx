import * as Action from "./ActionType";

export const signupSuccess = (user) => ({ type: Action.SIGNUP_SUCCESS, payload: user });
export const signupFailure = (error) => ({ type: Action.SIGNUP_FAILURE, payload: error });
export const loginFailure = (error) => ({ type: Action.LOGIN_FAILURE, payload: error });
export const loginSuccess = (user) => ({ type: Action.LOGIN_SUCCESS, payload: user });
export const logout = () => ({ type: Action.LOGOUT }); 