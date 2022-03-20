import http from "api/http";
import { getBoard } from "redux/actions/Board";

const getBoardAxios = (postAmount, searchInfo) => {
  if (!searchInfo) {
    return function (dispatch, getState, history) {
      http
        .get(`/board?limit=${postAmount}`)
        .then((res) => {
          console.log(res);
          dispatch(getBoard(res.data.listdata));
        })
        .catch((err) => console.log("게시글 불러오기 :", err));
    };
  }
  return function (dispatch, getState, history) {
    http
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
      userId: 6,
      title: post.title,
      contents: post.contents,
      originPrice: 0,
      dailyRentalFee: parseInt(post.dailyRentalFee),
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

    const imageFiles = [
      mediaFiles["imageSrc1"],
      mediaFiles["imageSrc2"],
      mediaFiles["imageSrc3"],
    ];
    uploadProductForm.append("imgFiles", imageFiles);
    uploadProductForm.append("videoFile", mediaFiles["videoSrc"]);
    http
      .post("/board", uploadProductForm)
      .then((res) => {
        console.log(res);
        alert("게시글이 등록되었습니다.");
      })
      .catch((err) => console.log("게시글 등록 실패: ", err.response));
  };
};

const boardActionCreator = {
  getBoardAxios,
  postBoardAxios,
};

export { boardActionCreator };
