import axios from "axios";

export const api = axios.create({
  baseURL: "https://teacher-s-tasks.herokuapp.com/api",
});
