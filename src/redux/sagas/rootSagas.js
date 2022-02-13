import { takeLatest } from "redux-saga/effects";
import { GETUSER } from "../constants/userConstants";
import { handleLoginUser } from "./handlers/userHandler";

export function* watcherSaga() {
  yield takeLatest(GETUSER, handleLoginUser);
}
