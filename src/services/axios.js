import axios from "axios";

const instance = axios.create({
  baseURL: "http://13.125.219.196",
});

export { instance };
