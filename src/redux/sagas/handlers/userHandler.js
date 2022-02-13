import { call, put } from "redux-saga/effects";
import { setUser } from "../../actions/userActions";
import { SETUSERFAIL, SETUSERLOADING } from "../../constants/userConstants";
import { requestLoginUser } from "../user.js/userRequest";

export function* handleLoginUser({ payload }) {
  try {
    yield put({ type: SETUSERLOADING });
    const { data } = yield call(requestLoginUser, payload);
    yield put(setUser(data));
  } catch (error) {
    yield put({ type: SETUSERFAIL });
    console.log(error);
  }
}
