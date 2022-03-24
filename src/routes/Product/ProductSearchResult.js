import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { mapDataList } from "constants/mapDataList";
import ProductService from "services/product";
import {
  ProductCard,
  ProductSearchResultBoard,
  ProductSearchResultWrap,
  RegionSelectWrapper,
  useStyles,
} from "./ProductSearchResult.style";
import { MenuItem, Select } from "@mui/material";
import { history } from "redux/store";

const ProductSearchResult = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [searchFilter, setSearchFilter] = useState("recent");
  const [searchMapData, setSearchMapData] = useState("");
  const [searchTitle, setSearchTitle] = useState("");

  const { product_list } = useSelector(({ product }) => product);
  const { authUser } = useSelector(({ auth }) => auth);

  const [selectRegion, setSelectRegion] = useState("");

  const handleChangeSelect = (event) => {
    setSelectRegion(event.target.value);
  };

  /**TODO: 검색 필터 적용이 */
  useEffect(() => {
    // startNum, category, boardRegion, filterType, searchTitle
    dispatch(ProductService.getSearchList("", "", selectRegion, "", ""));
  }, [dispatch, selectRegion]);

  const moveToDetail = (id) => {
    history.push(`/product/product-detail/${id}`);
  };

  const onHandleFavoriteBtn = (boardId) => {
    dispatch(ProductService.setFavorite(boardId));
  };
  return (
    <ProductSearchResultWrap>
      <RegionSelectWrapper>
        <Select
          style={{
            width: "300px",
          }}
          displayEmpty
          value={selectRegion}
          onChange={handleChangeSelect}
          renderValue={
            selectRegion !== ""
              ? undefined
              : () => <div>동네를 설정해주세요</div>
          }
        >
          {mapDataList.map((p) => {
            return (
              <MenuItem key={p} value={p}>
                {p}
              </MenuItem>
            );
          })}
        </Select>
      </RegionSelectWrapper>
      <div className="boardTop">
        <span className="boardAmount">
          {/* 총 {search_list && search_list.length}개 */}
        </span>
        <div className="boardFilterButtons">
          <label className={searchFilter === "recent" ? "checked" : null}>
            최신순
          </label>
        </div>
      </div>
      <ProductSearchResultBoard>
        {product_list &&
          product_list.map((p, idx) => {
            return (
              <ProductCard key={p.id}>
                <img
                  src={p.firstImgUrl}
                  alt=""
                  onClick={() => {
                    moveToDetail(p.boardId);
                  }}
                />
                {authUser && (
                  <div
                    className={classes.favoriteBtn}
                    onClick={() => {
                      onHandleFavoriteBtn(p.boardId);
                    }}
                  >
                    {p.isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                  </div>
                )}

                <div className="boardInfo">
                  <div className="boardInfo_title">{p.title}</div>
                  <div className="mapData">
                    <LocationOnIcon />
                    서울 {p.boardRegion}
                  </div>
                  <span className="dailyRentalFee">
                    <strong>{p.dailyRentalFee.toLocaleString()}</strong>원 / 일
                  </span>
                  <span className="time">1분전</span>
                </div>
              </ProductCard>
            );
          })}
      </ProductSearchResultBoard>
    </ProductSearchResultWrap>
  );
};

export default ProductSearchResult;
