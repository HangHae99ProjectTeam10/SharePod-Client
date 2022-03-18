import { setAuthUser } from "redux/actions/Auth";

import { instance } from "services/axios";
import { setCookie } from "shared/Cookie";

const loginAxios = (userName, password) => {
  return function (dispatch, getState, { history }) {
    const user = {
      username: userName,
      password,
    };

    instance
      .post("user/login", user)
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
};

export { userActionCreator };
