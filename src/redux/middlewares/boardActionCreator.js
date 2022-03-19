import { getBoard } from "redux/actions/Board";

import { instance } from "services/axios";
import { getCookie } from "shared/Cookie";

const getBoardAxios = (postAmount, searchInfo) => {
  if (!searchInfo) {
    return function (dispatch, getState, history) {
      instance
        .get(`/board?limit=${postAmount}`)
        .then((res) => {
          console.log(res);
          dispatch(getBoard(res.data.listdata));
        })
        .catch((err) => console.log("게시글 불러오기 :", err));
    };
  }
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

const postBoardAxios = (post, mediaFiles) => {
  return function (dispatch, getState, history) {
    const boardData = {
      userId: "1",
      title: post.title,
      contents: post.contents,
      originPrice: 0,
      dailyRentalFee: post.dailyRentalFee,
      boardRegion: post.boardRegion,
      category: post.category,
      productQuality: post.productQuality,
      boardTag: "",
    };
    const uploadProductForm = new FormData();
    uploadProductForm.append(
      "boardWriteRequestDTO",
      new Blob([JSON.stringify(boardData)], { type: "application/json" })
    );

    // uploadProductForm.append("firstImgUrl", mediaFiles["firstImgUrl"]);
    // uploadProductForm.append("secondImgUrl", mediaFiles["secondImgUrl"]);
    // uploadProductForm.append("lastImgUrl", mediaFiles["lastImgUrl"]);
    const imageFiles = [
      mediaFiles["firestImgUrl"],
      mediaFiles[("secondImgUrl", mediaFiles["lastImgUrl"])],
    ];
    uploadProductForm.append("imgFiles", imageFiles);
    uploadProductForm.append("videoFile", mediaFiles["videoUrl"]);

    const accessToken = sessionStorage.getItem("accessToken");
    console.log(accessToken);
    instance
      .post("/board", uploadProductForm, {
        Headers: {
          Authorization: accessToken,
        },
      })
      .then((res) => {
        alert("게시글이 등록되었습니다.");
      })
      .catch((err) => console.log("게시글 등록 실패: ", err));
  };
};

const boardActionCreator = {
  getBoardAxios,
  postBoardAxios,
};

export { boardActionCreator };
