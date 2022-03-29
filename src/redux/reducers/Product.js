import {
  ADD_PRODUCT,
  GET_ONE_PRODUCT_DETAIL,
  GET_PRODUCT_LIST,
  GET_SEARCH_LIST,
  GET_SEARCH_LIST_MORE,
  SET_FAVORITE_ACTION,
  SET_FAVORITE_ACTION_IN_SEARCH,
  SET_FAVORITE_ACTION_IN_DETAIL,
} from "constants/ActionTypes";

const INIT_STATE = {
  product_list: [],
  product_detail: {},
  search_list: [],
};

const Product = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCT_LIST: {
      return {
        product_list: action.payload,
      };
    }
    case ADD_PRODUCT: {
      return {
        product_list: [action.payload, ...state.product_list],
      };
    }

    case GET_ONE_PRODUCT_DETAIL: {
      return {
        product_detail: action.payload,
      };
    }
    case GET_SEARCH_LIST: {
      console.log(action.payload);
      return {
        search_list: action.payload,
      };
    }
    case GET_SEARCH_LIST_MORE: {
      console.log(state.search_list);
      console.log(action.payload);
      if (state.search_list || action.payload) {
        return {
          search_list: [...state.search_list, ...action.payload],
        };
      }
      return {
        search_list: [],
      };
    }
    case SET_FAVORITE_ACTION: {
      const index = state.product_list.findIndex(
        (p) => p.id === action.payload
      );
      const _product_list = state.product_list;
      const isliked = _product_list[index]?.isLiked;
      _product_list[index].isLiked = !isliked;
      return {
        ...state,
        product_list: _product_list,
      };
    }
    case SET_FAVORITE_ACTION_IN_SEARCH: {
      const index = state.search_list.findIndex((p) => p.id === action.payload);
      const _product_list = state.search_list;
      const isliked = _product_list[index]?.isLiked;
      _product_list[index].isLiked = !isliked;
      return {
        ...state,
        product_list: _product_list,
      };
    }
    case SET_FAVORITE_ACTION_IN_DETAIL: {
      const liked = state.product_detail?.liked;
      const _product_detail = state.product_detail;
      _product_detail.liked = !liked;
      return {
        ...state,
        product_detail: _product_detail,
      };
    }

    default:
      return state;
  }
};
export default Product;
