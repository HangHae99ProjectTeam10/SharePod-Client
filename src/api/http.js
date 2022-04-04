import axios from "axios";
import { getToken } from "./GetToken";
import { API_ENDPOINTS } from "./ApiEndpoint";

const http = axios.create({
  baseURL: process.env.REACT_APP_API_HOST,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  (config) => {
    const token = getToken();

    config.headers = {
      Authorization: `${token ? token : ""}`,
      ...config.headers,
    };

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    return response;
  },

  async (error) => {
    if (error.response.status === 401) {
      axios
        .post(
          process.env.REACT_APP_API_HOST + "/user/reissue",

          {
            accessToken: localStorage.getItem("sharepod.token"),
            refreshToken: localStorage.getItem("sharepod.refresh.token"),
          }
        )
        .then((res) => {
          let accessToken = res.headers.accesstoken;
          let refreshToken = res.headers.refreshtoken;

          localStorage.setItem("sharepod.token", accessToken);
          localStorage.setItem("sharepod.refresh.token", refreshToken);
          window.alert("토큰이 만료되었습니다. 새로고침해주세요");
        })
        .catch((err) => {
          if (err.response.status === 404) {
            console.log("여기");
            window.alert("로그인이 만료되었습니다.");
            localStorage.removeItem("persist:root");
            localStorage.removeItem("sharepod.token");
            localStorage.removeItem("sharepod.refresh.token");
            window.location.href = API_ENDPOINTS.LOGIN;
          }
        });
    }

    return Promise.reject(error);
  }
);

export default http;
