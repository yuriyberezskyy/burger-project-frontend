import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-cd27f.firebaseio.com/",
});

export default instance;
