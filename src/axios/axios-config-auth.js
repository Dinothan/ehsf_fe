import axios from "axios";
import { BASE_URL } from "../store/actions/url";
const authConfig = axios.create({
  baseURL: BASE_URL,
  // withCredentials: true
});

export default authConfig;