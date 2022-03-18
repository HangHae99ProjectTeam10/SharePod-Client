import { getBoard } from "redux/actions/Board";

import { instance } from "services/axios";

const getBoardAxios = (postAmount) => {
  return function (dispatch, getState, history) {
    instance
      .get(`/board?limit=${postAmount}`)
      .then((res) => {
        console.log(res);
        dispatch(getBoard(res.data.listdata));
      })
      .catch((err) => console.log("게시글 불러오기 :", err));
  };
};

const boardActionCreator = {
  getBoardAxios,
};

export { boardActionCreator };
