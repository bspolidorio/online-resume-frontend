import axios from "axios";

const api = axios.create({
  baseURL: "https://online-resume-backend.herokuapp.com",
});

export default api;
