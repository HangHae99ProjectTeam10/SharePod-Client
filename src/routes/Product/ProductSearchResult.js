import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { mapDataList } from "constants/mapDataList";
import ProductService from "services/product";
import {
  BoardFilterButtons,
  LoaderWrapper,
  ProductCard,
  ProductSearchFilterWrapper,
  ProductSearchResultBoard,
  ProductSearchResultWrap,
  RegionSelectWrapper,
  useStyles,
} from "./ProductSearchResult.style";
import { MenuItem, Select } from "@mui/material";
import { history } from "redux/store";
import PageLoader from "components/common/PageLoader";
import { getDate, getHours, getMinutes, getMonth, getYear } from "date-fns";

const ProductSearchFilter = (props) => {
  const { searchFilterToggle, setSearchFilter } = props;
  const handleSetSearchFilter = (filterValue) => {
    setSearchFilter(filterValue);
  };
  return (
    <ProductSearchFilterWrapper searchFilterToggle={searchFilterToggle}>
      <span
        defaultValue="recent"
        onClick={() => handleSetSearchFilter("recent")}
      >
        최신순
      </span>
      <span
        defaultValue="quality"
        onClick={() => handleSetSearchFilter("quality")}
      >
        품질순
      </span>
      <span defaultValue="cost" onClick={() => handleSetSearchFilter("cost")}>
        금액순
      </span>
    </ProductSearchFilterWrapper>
  );
};

const ProductSearchResult = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const urlData = window.location.search;

  const [searchFilterToggle, setSearchFilterToggle] = useState(false);
  const [searchTitle, setSearchTitle] = useState(
    urlData.split("&")[1] ? decodeURI(urlData.split("&")[1]) : ""
  );
  const [categoryTitle, setCategoryTitle] = useState(
    urlData.split("&")[2] ? urlData.split("&")[2] : ""
  );
  const [selectRegion, setSelectRegion] = useState(
    urlData.split("&")[3] ? urlData.split("&")[3] : ""
  );
  const [searchFilter, setSearchFilter] = useState("recent");
  const [count, setCount] = useState(0);

  const { search_list } = useSelector(({ product }) => product);
  const { authUser } = useSelector(({ auth }) => auth);

  const handleChangeSelect = (event) => {
    if (event.target.value === "전체보기") {
      setSelectRegion("");
    } else {
      setSelectRegion(event.target.value);
    }
  };

  useEffect(() => {
    setCount(0);
    dispatch(
      ProductService.getSearchList(
        categoryTitle,
        selectRegion,
        searchFilter,
        searchTitle
      )
    );
  }, [dispatch, categoryTitle, selectRegion, searchTitle, searchFilter]);

  useEffect(() => {
    console.log(count);
    if (count >= 1) {
      dispatch(
        ProductService.getSearchListMore(
          categoryTitle,
          selectRegion,
          searchFilter,
          searchTitle,
          count
        )
      );
    }
  }, [count]);

  const moveToDetail = (id) => {
    history.push(`/product/product-detail/${id}`);
  };

  const onHandleFavoriteBtn = (boardId) => {
    dispatch(ProductService.setFavoriteInSearch(boardId));
  };

  // Infinity Scroll
  const [target, setTarget] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const getMoreItem = async () => {
    setIsLoaded(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setCount((count) => count + 16);
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

  const filterList = {
    recent: "최신순",
    quality: "품질순",
    cost: "금액순",
  };

  const handleSearchFilterToggle = () => {
    if (searchFilterToggle) {
      setSearchFilterToggle(false);
    } else {
      setSearchFilterToggle(true);
    }
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
        <BoardFilterButtons>
          <label
            className="searchFilter"
            onClick={() => handleSearchFilterToggle()}
          >
            {filterList[searchFilter]} ▿
          </label>
          <ProductSearchFilter
            searchFilterToggle={searchFilterToggle}
            setSearchFilter={setSearchFilter}
          ></ProductSearchFilter>
        </BoardFilterButtons>
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
                    <strong>{p.dailyRentalFee.toLocaleString()}</strong>원 / 일
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
