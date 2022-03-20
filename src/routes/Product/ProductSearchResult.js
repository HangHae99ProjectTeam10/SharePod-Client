import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";

import Dropdown from "../../components/Dropdown";
import { mapDataList } from "constants/mapDataList";
import ProductService from "services/product";

const ProductSearchResult = () => {
  const dispatch = useDispatch();
  const receivedSearchMapData = "강남구";
  const urlData = "";
  const [searchFilter, setSearchFilter] = useState("recent");
  const [searchMapData, setSearchMapData] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const postAmount = 999;

  const handleSearchFilter = (e) => {
    setSearchFilter(e.target.value);
  };

  useEffect(() => {
    dispatch(ProductService.getProductList(postAmount, searchInfo));
  }, []);

  const searchInfo = {
    searchFilter,
    searchMapData,
    searchTitle,
  };
  const productSearchList = useSelector((state) => state.board.boardList);

  return (
    <ProductSearchResultWrap>
      <div className="dropdownWrap">
        <Dropdown options={mapDataList} changeData={setSearchMapData} />
      </div>
      <div className="boardTop">
        <span className="boardAmount">
          총 {productSearchList && productSearchList.length}개
        </span>
        <div className="boardFilterButtons">
          <label className={searchFilter === "recent" ? "checked" : null}>
            최신순
            <input
              type="radio"
              value="recent"
              name="filter"
              hidden
              onChange={handleSearchFilter}
            />
          </label>
          <span>|</span>
          <label className={searchFilter === "cost" ? "checked" : null}>
            가격 낮은 순
            <input
              type="radio"
              value="cost"
              name="filter"
              hidden
              onChange={handleSearchFilter}
            />
          </label>
          <span>|</span>
          <label className={searchFilter === "quality" ? "checked" : null}>
            품질순
            <input
              type="radio"
              value="quality"
              name="filter"
              hidden
              onChange={handleSearchFilter}
            />
          </label>
        </div>
      </div>
      <ProductSearchResultBoard>
        {productSearchList &&
          productSearchList.map((p, idx) => {
            return (
              <ProductCard onClick={() => {}} key={idx}>
                <img src={p.firstImgUrl} />
                <button className={"p.isLiked" ? "isLiked like" : "like"}>
                  ❤
                </button>
                <div className="boardInfo">
                  <h3>{p.title}</h3>
                  <span className="mapData">🌐 서울 {"p.mapData"}</span>
                  <span className="dailyRentalFee">
                    <strong>{p.dailyRentalFee.toLocaleString()}</strong>원 / 일
                  </span>
                  <span className="time">{"p.modifiedAt"}</span>
                </div>
              </ProductCard>
            );
          })}
      </ProductSearchResultBoard>
    </ProductSearchResultWrap>
  );
};

const ProductSearchResultWrap = styled.section`
  width: 1142px;
  margin: 0 auto;
  padding: 74px 0;
  .dropdownWrap {
    width: 390px;
    height: 48px;
    margin: 0 auto 64px;
  }
  .boardTop {
    display: flex;
    justify-content: space-between;
    .boardAmount {
      font-size: 13px;
      color: #8c8c8c;
    }
    .boardFilterButtons {
      display: flex;
      justify-content: space-between;
      width: 300px;
      label,
      span {
        font-size: 13px;
        color: #8c8c8c;
      }
      .checked {
        color: #000;
      }
      label {
        cursor: pointer;
      }
    }
  }
`;

const ProductSearchResultBoard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px 30px;
  margin-top: 11px;
`;

const ProductCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 263px;
  img {
    width: 263px;
    height: 263px;
    margin-bottom: 6px;
    border-radius: 10px 10px 0 0;
  }
  .like {
    position: absolute;
    top: 8px;
    right: 10px;
    border: none;
    background: transparent;
    font-size: 18px;
    color: #fff;
  }
  .isLiked {
    color: #ef3dea;
  }
  .boardInfo {
    position: relative;
    display: flex;
    flex-direction: column;
    h3 {
      margin: 0 0 2px;
      font-size: 16px;
      color: #777;
    }
    .mapData {
      margin-bottom: 4px;
      font-size: 13px;
      color: #777;
    }
    .dailyRentalFee {
      font-size: 11px;
      color: #777;
      strong {
        margin-right: 3px;
        font-size: 16px;
        font-weight: 700;
      }
    }
    .time {
      position: absolute;
      bottom: 0;
      right: 0;
      font-size: 12px;
      color: #777;
    }
  }
`;

export default ProductSearchResult;
