import {
  SETUSER,
  SETUSERFAIL,
  SETUSERLOADING,
} from "../constants/userConstants";
const initialstate = {
  userInfo: { email: null, id: null },
};

export const userLoginReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SETUSERLOADING:
      return { ...state, loading: true };
    case SETUSER:
      return {
        ...state,
        userInfo: action.payload,
        loading: false,
        error: false,
      };
    case SETUSERFAIL:
      return {
        ...state,
        userInfo: {},
        loading: true,
        error: false,
      };
    default:
      return state;
  }
};
