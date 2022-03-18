import React from "react";

import styled from "styled-components";

const LikeList = () => {
  const myLikedList = [
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "레보네이트 공기청정기",
      mapData: "강서구",
      dailyRentalFee: 2000,
      modifiedAt: "2022.03.10",
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "레보네이트 공기청정기",
      mapData: "강서구",
      dailyRentalFee: 2000,
      modifiedAt: "2022.03.10",
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "레보네이트 공기청정기",
      mapData: "강서구",
      dailyRentalFee: 2000,
      modifiedAt: "2022.03.10",
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "레보네이트 공기청정기",
      mapData: "강서구",
      dailyRentalFee: 2000,
      modifiedAt: "2022.03.10",
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "레보네이트 공기청정기",
      mapData: "강서구",
      dailyRentalFee: 2000,
      modifiedAt: "2022.03.10",
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "레보네이트 공기청정기",
      mapData: "강서구",
      dailyRentalFee: 2000,
      modifiedAt: "2022.03.10",
    },
  ];

  return (
    <LikeListWrap>
      {myLikedList.map((p) => {
        return (
          <LikeListCard>
            <img src={p.imageUrl1} />
            <h3>{p.title}</h3>
            <span className="mapData">🌐서울 {p.mapData}</span>
            <span className="dailyRentalFee">
              <strong>{p.dailyRentalFee.toLocaleString()}</strong> 원 / 일
            </span>
            <span className="modifiedAt">{p.modifiedAt}</span>
          </LikeListCard>
        );
      })}
    </LikeListWrap>
  );
};
const LikeListWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 42px 30px;
  padding-bottom: 296px;
`;

const LikeListCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  img {
    width: 255px;
    height: 255px;
    margin-bottom: 16px;
    border-radius: 10px;
  }
  h3 {
    margin: 0 0 4px;
    font-size: 18px;
    font-weight: 500;
    color: #323232;
  }
  .mapData {
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 350;
    color: #777;
  }
  .dailyRentalFee {
    font-size: 16px;
    font-weight: 700;
    color: #323232;
  }
  .modifiedAt {
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 14px;
    font-weight: 350;
    color: #777;
  }
`;

export default LikeList;
