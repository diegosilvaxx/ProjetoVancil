import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:44324/api/v1/"
});

export default api;
