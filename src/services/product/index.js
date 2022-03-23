import http from "api/http";
import {
  addOneProduct,
  getOneProductDetail,
  getProductList,
  getSearchList,
  setFavoriteAction,
  setFavoriteActionInDetail,
} from "redux/actions/Product";

const ProductService = {
  getProductList: () => {
    return function (dispatch, getState, history) {
      const userId = getState().auth.authUser?.userId
        ? getState().auth.authUser?.userId
        : "";
      http
        .get(`/board?userId=${userId}`)
        .then((res) => {
          dispatch(getProductList(res.data.listData));
        })
        .catch((err) => console.log("게시글 불러오기 :", err));
    };
  },

  addProduct: (data, mediaFiles) => {
    return function (dispatch, getState, history) {
      const userId = getState().auth.authUser?.userId
        ? getState().auth.authUser?.userId
        : "";
      const boardData = {
        ...data,
        userId: userId,
      };
      const formData = new FormData();
      formData.append(
        "boardWriteRequestDTO",
        new Blob([JSON.stringify(boardData)], { type: "application/json" })
      );

      formData.append("imgFiles", mediaFiles.firstImgUrl);
      formData.append("imgFiles", mediaFiles.secondImgUrl);
      formData.append("imgFiles", mediaFiles.lastImgUrl);
      formData.append("videoFile", mediaFiles.videoUrl);
      http
        .post("/board", formData, {
          Headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          alert("게시글이 등록되었습니다.");
          dispatch(addOneProduct(res.data.boardData));
          history.push("/");
        })
        .catch((err) => console.log("게시글 등록 실패: ", err.response));
    };
  },

  getOneProductDetail: (boardId) => {
    return function (dispatch, getState) {
      const userId = getState().auth.authUser?.userId
        ? getState().auth.authUser?.userId
        : "";
      http.get(`/board/${boardId}?userId=${userId}`).then((res) => {
        dispatch(getOneProductDetail(res.data.data));
      });
    };
  },

  getSearchList: (startNum, category, boardRegion, filterType, searchTitle) => {
    return function (dispatch, getState) {
      const userId = getState().auth.authUser?.userId
        ? getState().auth.authUser?.userId
        : "";
      http
        .get(
          `/board/sort?startNum=${startNum}&category=${category}&boardRegion=${boardRegion}&filterType=${filterType}&userId=${userId}&searchTitle=${searchTitle}`
        )
        .then((res) => {
          console.log(res);
          dispatch(getProductList(res.data.listData));
          // dispatch(getOneProductDetail(res.data.data));
        });
    };
  },
  setFavorite: (boardId) => {
    return function (dispatch, getState) {
      const userId = getState().auth.authUser?.userId
        ? getState().auth.authUser?.userId
        : "";
      http
        .post(`/like/${boardId}`, {
          userId: userId,
        })
        .then((res) => {
          dispatch(setFavoriteAction(boardId));
        });
    };
  },

  setFavoriteIndetail: (boardId) => {
    return function (dispatch, getState) {
      const userId = getState().auth.authUser?.userId
        ? getState().auth.authUser?.userId
        : "";
      http
        .post(`/like/${boardId}`, {
          userId: userId,
        })
        .then((res) => {
          dispatch(setFavoriteActionInDetail(boardId));
        });
    };
  },
};

export default ProductService;
