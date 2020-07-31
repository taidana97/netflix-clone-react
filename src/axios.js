import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

// https://api.themoviedb.org/3/foo-bar
// ex: instance.get("/foo-bar");

export default instance;
