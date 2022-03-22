import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import styled from "styled-components";

import Dropdown from "../../components/Dropdown";
import { mapDataList } from "constants/mapDataList";
import ProductService from "services/product";
import {
  ProductCard,
  ProductSearchResultBoard,
  ProductSearchResultWrap,
  RegionSelectWrapper,
} from "./ProductSearchResult.style";
import { InputLabel, MenuItem, Select } from "@mui/material";

const ProductSearchResult = () => {
  const dispatch = useDispatch();
  const receivedSearchMapData = "강남구";
  const urlData = "";
  const [searchFilter, setSearchFilter] = useState("recent");
  const [searchMapData, setSearchMapData] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const postAmount = 8;

  const handleSearchFilter = (e) => {
    setSearchFilter(e.target.value);
  };

  useEffect(() => {
    dispatch(ProductService.getProductList(postAmount));
  }, []);

  const searchInfo = {
    searchFilter,
    searchMapData,
    searchTitle,
  };
  const { product_list } = useSelector(({ product }) => product);

  const [selectValue, setSelectValue] = useState("");

  const handleChangeSelect = (event) => {
    setSelectValue(event.target.value);
  };

  return (
    <ProductSearchResultWrap>
      <RegionSelectWrapper>
        <Select
          style={{
            width: "300px",
          }}
          displayEmpty
          value={selectValue}
          onChange={handleChangeSelect}
          renderValue={
            selectValue !== ""
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
          총 {product_list && product_list.length}개
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
              <ProductCard onClick={() => {}} key={p.boardId}>
                <img src={p.firstImgUrl} alt="" />
                <FavoriteBorderIcon
                  style={{
                    position: "absolute",
                    right: "3%",
                    top: "3%",
                    color: "white",
                  }}
                />
                <div className="boardInfo">
                  <div className="boardInfo_title">{p.title}</div>
                  <div className="mapData">
                    <LocationOnIcon />
                    서울 종로구
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
