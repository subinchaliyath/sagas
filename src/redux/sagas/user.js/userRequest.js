import axios from "axios";
export function requestLoginUser({ email, password }) {
  return axios.post("http://localhost:4000/login", { email, password });
}
