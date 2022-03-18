import React, { useState } from "react";

import styled from "styled-components";

import Dropdown from "../../components/DropdownCopy";

const ProductSearchResult = () => {
  const receivedSearchMapData = "강남구";
  const [searchFilter, setSearchFilter] = useState("recent");
  const [searchMapData, setSearchMapData] = useState("");

  const handleSearchFilter = (e) => {
    setSearchFilter(e.target.value);
    console.log(searchFilter);
  };

  const productSearchList = [
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2020/02/07/14/09/vacuum-cleaner-4827253_960_720.jpg",
      title: "귀여운 로봇청소기",
      mapData: "동대문구",
      dailyRentalFee: 2000,
      modifiedAt: "2022.03.18",
      isLiked: true,
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2020/02/07/14/09/vacuum-cleaner-4827253_960_720.jpg",
      title: "귀여운 로봇청소기",
      mapData: "동대문구",
      dailyRentalFee: 2000,
      modifiedAt: "2022.03.18",
      isLiked: false,
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2020/02/07/14/09/vacuum-cleaner-4827253_960_720.jpg",
      title: "귀여운 로봇청소기",
      mapData: "동대문구",
      dailyRentalFee: 2000,
      modifiedAt: "2022.03.18",
      isLiked: true,
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2020/02/07/14/09/vacuum-cleaner-4827253_960_720.jpg",
      title: "귀여운 로봇청소기",
      mapData: "동대문구",
      dailyRentalFee: 2000,
      modifiedAt: "2022.03.18",
      isLiked: false,
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2020/02/07/14/09/vacuum-cleaner-4827253_960_720.jpg",
      title: "귀여운 로봇청소기",
      mapData: "동대문구",
      dailyRentalFee: 2000,
      modifiedAt: "2022.03.18",
      isLiked: false,
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2020/02/07/14/09/vacuum-cleaner-4827253_960_720.jpg",
      title: "귀여운 로봇청소기",
      mapData: "동대문구",
      dailyRentalFee: 2000,
      modifiedAt: "2022.03.18",
      isLiked: true,
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2020/02/07/14/09/vacuum-cleaner-4827253_960_720.jpg",
      title: "귀여운 로봇청소기",
      mapData: "동대문구",
      dailyRentalFee: 2000,
      modifiedAt: "2022.03.18",
      isLiked: false,
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2020/02/07/14/09/vacuum-cleaner-4827253_960_720.jpg",
      title: "귀여운 로봇청소기",
      mapData: "동대문구",
      dailyRentalFee: 2000,
      modifiedAt: "2022.03.18",
      isLiked: true,
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2020/02/07/14/09/vacuum-cleaner-4827253_960_720.jpg",
      title: "귀여운 로봇청소기",
      mapData: "동대문구",
      dailyRentalFee: 2000,
      modifiedAt: "2022.03.18",
      isLiked: false,
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2020/02/07/14/09/vacuum-cleaner-4827253_960_720.jpg",
      title: "귀여운 로봇청소기",
      mapData: "동대문구",
      dailyRentalFee: 2000,
      modifiedAt: "2022.03.18",
      isLiked: true,
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2020/02/07/14/09/vacuum-cleaner-4827253_960_720.jpg",
      title: "귀여운 로봇청소기",
      mapData: "동대문구",
      dailyRentalFee: 2000,
      modifiedAt: "2022.03.18",
      isLiked: false,
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2020/02/07/14/09/vacuum-cleaner-4827253_960_720.jpg",
      title: "귀여운 로봇청소기",
      mapData: "동대문구",
      dailyRentalFee: 2000,
      modifiedAt: "2022.03.18",
      isLiked: true,
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2020/02/07/14/09/vacuum-cleaner-4827253_960_720.jpg",
      title: "귀여운 로봇청소기",
      mapData: "동대문구",
      dailyRentalFee: 2000,
      modifiedAt: "2022.03.18",
      isLiked: true,
    },
  ];

  const mapDataList = [
    { value: "종로구", name: "종로구" },
    { value: "중구", name: "중구" },
    { value: "용산구", name: "용산구" },
    { value: "성동구", name: "성동구" },
    { value: "광진구", name: "광진구" },
    { value: "동대문구", name: "동대문구" },
    { value: "중랑구", name: "중랑구" },
    { value: "성북구", name: "성북구" },
    { value: "강북구", name: "강북구" },
    { value: "도봉구", name: "도봉구" },
    { value: "노원구", name: "노원구" },
    { value: "은평구", name: "은평구" },
    { value: "서대문구", name: "서대문구" },
    { value: "마포구", name: "마포구" },
    { value: "양천구", name: "양천구" },
    { value: "강서구", name: "강서구" },
    { value: "구로구", name: "구로구" },
    { value: "금천구", name: "금천구" },
    { value: "영등포구", name: "영등포구" },
    { value: "동작구", name: "동작구" },
    { value: "관악구", name: "관악구" },
    { value: "서초구", name: "서초구" },
    { value: "강남구", name: "강남구" },
    { value: "송파구", name: "송파구" },
    { value: "강동구", name: "강동구" },
  ];
  return (
    <ProductSearchResultWrap>
      <div className="dropdownWrap">
        <Dropdown options={mapDataList} changeData={setSearchMapData} />
      </div>
      <div className="boardTop">
        <span className="boardAmount">총 {productSearchList.length}개</span>
        <div className="boardFilterButtons">
          <label className={searchFilter === "recent" && "checked"}>
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
          <label className={searchFilter === "cost" && "checked"}>
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
          <label className={searchFilter === "quality" && "checked"}>
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
        {productSearchList.map((p, idx) => {
          return (
            <ProductCard onClick={() => {}} key={idx}>
              <img src={p.imageUrl1} />
              <button className={p.isLiked ? "isLiked like" : "like"}>❤</button>
              <div className="boardInfo">
                <h3>{p.title}</h3>
                <span className="mapData">🌐 서울 {p.mapData}</span>
                <span className="dailyRentalFee">
                  <strong>{p.dailyRentalFee.toLocaleString()}</strong>원 / 일
                </span>
                <span className="time">{p.modifiedAt}</span>
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
