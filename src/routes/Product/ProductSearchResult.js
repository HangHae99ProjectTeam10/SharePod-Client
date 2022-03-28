import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { mapDataList } from "constants/mapDataList";
import ProductService from "services/product";
import {
  LoaderWrapper,
  ProductCard,
  ProductSearchResultBoard,
  ProductSearchResultWrap,
  RegionSelectWrapper,
  useStyles,
} from "./ProductSearchResult.style";
import { MenuItem, Select } from "@mui/material";
import { history } from "redux/store";
import PageLoader from "components/common/PageLoader";
import { flexbox } from "@mui/lab/node_modules/@mui/system";
import { getDate, getHours, getMinutes, getMonth, getYear } from "date-fns";

const ProductSearchResult = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [searchFilter, setSearchFilter] = useState("recent");
  const [searchMapData, setSearchMapData] = useState("");
  const [searchTitle, setSearchTitle] = useState(
    window.location.search.split("?")[1]
      ? decodeURI(window.location.search.split("?")[1])
      : ""
  );

  const { search_list } = useSelector(({ product }) => product);
  const { authUser } = useSelector(({ auth }) => auth);

  const [selectRegion, setSelectRegion] = useState("");

  const handleChangeSelect = (event) => {
    setSelectRegion(event.target.value);
  };

  /**TODO: 검색 필터 적용이 */
  useEffect(() => {
    // startNum, category, boardRegion, filterType, searchTitle
    setCount(0);
    dispatch(
      ProductService.getSearchList(0, "", selectRegion, "", searchTitle)
    );
  }, [dispatch, selectRegion, searchTitle]);

  const moveToDetail = (id) => {
    history.push(`/product/product-detail/${id}`);
  };

  const onHandleFavoriteBtn = (boardId) => {
    dispatch(ProductService.setFavoriteInSearch(boardId));
  };

  // Infinity Scroll
  const [target, setTarget] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== 0) {
      dispatch(
        ProductService.getSearchList(count, "", selectRegion, "", searchTitle)
      );
    }
  }, [count]);

  const getMoreItem = async () => {
    setIsLoaded(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setCount(count + 16);
    setIsLoaded(false);
  };

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoaded) {
      await getMoreItem();
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  const nowTimeData = new Date();
  const nowYear = getYear(nowTimeData);
  const nowMonth = getMonth(nowTimeData);
  const nowDate = getDate(nowTimeData);
  const nowHour = getHours(nowTimeData);
  const nowMinute = getMinutes(nowTimeData);

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
        {search_list &&
          search_list.map((p, idx) => {
            const dataDate = new Date(p.modifiedAt);
            const year = getYear(dataDate);
            const month = getMonth(dataDate);
            const date = getDate(dataDate);
            const hour = getHours(dataDate);
            const minute = getMinutes(dataDate);
            return (
              <ProductCard key={p.id}>
                <img
                  src={p.firstImgUrl}
                  alt=""
                  onClick={() => {
                    moveToDetail(p.id);
                  }}
                />
                {authUser && (
                  <div
                    className={classes.favoriteBtn}
                    onClick={() => {
                      onHandleFavoriteBtn(p.id);
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
                    {/* <strong>{p.dailyRentalFee.toLocaleString()}</strong>원 / 일 */}
                  </span>
                  <span className="time">
                    {nowYear !== year
                      ? `${nowYear - year}년 전`
                      : nowMonth !== month
                      ? `${nowMonth - month}개월 전`
                      : nowDate !== date
                      ? `${nowDate - date}일 전`
                      : nowHour !== hour
                      ? `${nowHour - hour}시간 전`
                      : nowMinute !== minute
                      ? `${nowMinute - minute}분 전`
                      : null}
                  </span>
                </div>
              </ProductCard>
            );
          })}
        <LoaderWrapper ref={setTarget} className="Target-Element">
          {isLoaded && <PageLoader />}
        </LoaderWrapper>
      </ProductSearchResultBoard>
    </ProductSearchResultWrap>
  );
};

export default ProductSearchResult;
