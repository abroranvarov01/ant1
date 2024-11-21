import axios from "axios";
import { loadState } from "./storge";

const request = axios.create({
  baseURL: "http://localhost:3000",
});

request.interceptors.request.use(
  (config) => {
    const user = loadState("user");
    if (user && user.accessToken) {
      config.headers.Authorization = `Bearer ${user.accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default request;
