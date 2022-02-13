import { GETUSER, SETUSER } from "../constants/userConstants";

export const getUser = (user) => ({ type: GETUSER, payload: user });

export const setUser = (user) => ({ type: SETUSER, payload: user });
