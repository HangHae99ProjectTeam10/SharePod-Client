import { setAuthUser } from "redux/actions/Auth";

import { instance } from "services/axios";
import { setCookie } from "shared/Cookie";

const userRegistAxios = (
  userName,
  nickname,
  password,
  passwordCheck,
  mapData,
  userImg
) => {
  return function (dispatch, getState, history) {
    const user = {
      username: userName,
      nickname: nickname,
      password: password,
      passwordcheck: passwordCheck,
      mapdata: mapData,
    };

    const userRegistForm = new FormData();

    userRegistForm.append(
      "userRegisterRequestDto",
      new Blob([JSON.stringify(user)], { type: "application/json" })
    );
    userRegistForm.append("imgfile", userImg);

    instance
      .post("/user/register", userRegistForm, {
        Headers: {
          "content-type": "multipart/from-data",
        },
      })
      .then((res) => {
        window.alert("회원가입을 축하드립니다.");
        history.replace("/");
      })
      .catch((err) => console.log("회원가입 실패 :", err));
  };
};

const loginAxios = (username, password) => {
  return function (dispatch, getState, { history }) {
    const user = {
      username,
      password,
    };

    instance
      .post("/user/login", user)
      .then((res) => {
        console.log(res.headers);
        return res.data;
      })
      .then((data) => {
        const user_info = {
          userId: data.userid,
          userImg: data.userimg,
          nickname: data.nickname,
          mapData: data.mapdata,
        };
        setCookie("token", user_info.nickname);
        dispatch(setAuthUser(user_info));
      })
      .catch((err) => console.log("로그인 실패 :", err));
  };
};

const userActionCreator = {
  loginAxios,
  userRegistAxios,
};

export { userActionCreator };
