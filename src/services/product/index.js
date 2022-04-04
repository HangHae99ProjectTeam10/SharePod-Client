import http from "api/http";
import {
  addOneProduct,
  getOneProductDetail,
  getProductList,
  getReelsList,
  getSearchList,
  getSearchListMore,
  setFavoriteAction,
  setFavoriteActionInDetail,
  setFavoriteActionInSearch,
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
  editProduct: (boradId, data, mediaFiles) => {
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
        "patchRequestDTO",
        new Blob([JSON.stringify(boardData)], { type: "application/json" })
      );

      formData.append("imgFiles", mediaFiles.firstImgUrl);
      formData.append("imgFiles", mediaFiles.secondImgUrl);
      formData.append("imgFiles", mediaFiles.lastImgUrl);
      formData.append("videoFile", mediaFiles.videoUrl);
      http
        .patch(`/board/${boradId}`, formData, {
          Headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          alert("게시글이 수정되었습니다.");
          // dispatch(addOneProduct(res.data.boardData));
          history.goBack();
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

  getSearchList: (category, boardRegion, filterType, searchTitle) => {
    return function (dispatch, getState) {
      const userId = getState().auth.authUser?.userId
        ? getState().auth.authUser?.userId
        : "";

      http
        .get(
          `/board/sort?&category=${category}&boardRegion=${boardRegion}&filterType=${filterType}&userId=${userId}&searchTitle=${searchTitle}&startNum=0`
        )
        .then((res) => {
          dispatch(getSearchList(res.data));
        });
    };
  },

  getSearchListMore: (
    category,
    boardRegion,
    filterType,
    searchTitle,
    startNum
  ) => {
    return function (dispatch, getState) {
      const userId = getState().auth.authUser?.userId
        ? getState().auth.authUser?.userId
        : "";

      const result_count = getState().product.result_count;
      console.log("category:", category, "boardRegion:");

      if (result_count >= 16) {
        http
          .get(
            `/board/sort?&category=${category}&boardRegion=${boardRegion}&filterType=${filterType}&userId=${userId}&searchTitle=${searchTitle}&startNum=${startNum}`
          )
          .then((res) => {
            dispatch(getSearchListMore(res.data));
          });
      }
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

  setFavoriteInSearch: (boardId) => {
    return function (dispatch, getState) {
      const userId = getState().auth.authUser?.userId
        ? getState().auth.authUser?.userId
        : "";
      http
        .post(`/like/${boardId}`, {
          userId: userId,
        })
        .then((res) => {
          dispatch(setFavoriteActionInSearch(boardId));
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
  getProductReels: (count, setIsLoading) => {
    if (setIsLoading) {
      setIsLoading(true);
    }
    return function (dispatch) {
      http.get(`/board/video/`).then((res) => {
        dispatch(getReelsList(res.data.videoData, count));
      });
    };
  },
};
export default ProductService;
