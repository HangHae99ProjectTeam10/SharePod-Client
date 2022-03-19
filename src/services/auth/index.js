import { history } from "redux/store";
import { API_ENDPOINTS } from "api/ApiEndpoint";
import { setAuthUser } from "redux/actions/Auth";
import http from "api/http";

const JWTAuth = {
  onRegister: (data, userImg) => {
    return (dispatch) => {
      const formData = new FormData();

      formData.append(
        "userRegisterRequestDto",
        new Blob([JSON.stringify(data)], { type: "application/json" })
      );
      formData.append("imgFile", userImg);

      http
        .post(API_ENDPOINTS.REGISTER, formData, {
          Headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          window.alert("회원가입을 축하드립니다.");
          history.replace("/");
        })
        .catch((err) => {
          window.alert(err.response.data.msg);
        });
    };
  },
  onLogin: ({ username, password }) => {
    return (dispatch) => {
      http
        .post(API_ENDPOINTS.LOGIN, {
          username: username,
          password: password,
        })
        .then((res) => {
          const userInfo = {
            userId: res.data.userId,
            userImg: res.data.userImg,
            nickname: res.data.nickName,
            mapData: res.data.userRegion,
          };
          let accessToken = res.headers.accesstoken;
          let refreshToken = res.headers.refreshtoken;

          localStorage.setItem("sharepod.token", accessToken);
          localStorage.setItem("sharepod.refresh.token", refreshToken);

          history.push("/");
          dispatch(setAuthUser(userInfo));
        })
        .catch((error) => {
          console.log(error.response);
          window.alert(error.response.data.msg);
        });
    };
  },
};
export default JWTAuth;
