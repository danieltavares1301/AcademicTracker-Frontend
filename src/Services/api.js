import axios from "axios";
import { getToken } from "./authService";

const api = axios.create({
  baseURL: "https://academic-tracker-api.herokuapp.com/",
});

api.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
