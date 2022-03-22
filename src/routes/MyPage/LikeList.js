import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  HorizontalLine,
  LikeListCard,
  LikeListCardDailyRentalFee,
  LikeListCardImg,
  LikeListCardModifiedAt,
  LikeListMapData,
  LikeListWrapper,
  Wrapper,
} from "./LikeList.style";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { getDate, getHours, getMinutes, getMonth, getYear } from "date-fns";

const LikeList = () => {
  const myLikedList = [
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "레보네이트 공기청정기",
      mapData: "강서구",
      dailyRentalFee: 2000,
      modifiedAt: "2022-03-20T16:23:03.056",
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "레보네이트 공기청정기",
      mapData: "강서구",
      dailyRentalFee: 2000,
      modifiedAt: "2022-03-20T16:23:03.056",
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "레보네이트 공기청정기",
      mapData: "강서구",
      dailyRentalFee: 2000,
      modifiedAt: "2022-03-20T16:23:03.056",
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "레보네이트 공기청정기",
      mapData: "강서구",
      dailyRentalFee: 2000,
      modifiedAt: "2022-03-20T16:23:03.056",
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "레보네이트 공기청정기",
      mapData: "강서구",
      dailyRentalFee: 2000,
      modifiedAt: "2022-03-20T16:23:03.056",
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "레보네이트 공기청정기",
      mapData: "강서구",
      dailyRentalFee: 2000,
      modifiedAt: "2022-03-20T16:23:03.056",
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "레보네이트 공기청정기",
      mapData: "강서구",
      dailyRentalFee: 2000,
      modifiedAt: "2022-03-20T16:23:03.056",
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "레보네이트 공기청정기",
      mapData: "강서구",
      dailyRentalFee: 2000,
      modifiedAt: "2022-03-20T16:23:03.056",
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "레보네이트 공기청정기",
      mapData: "강서구",
      dailyRentalFee: 2000,
      modifiedAt: "2022-03-20T16:23:03.056",
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "레보네이트 공기청정기",
      mapData: "강서구",
      dailyRentalFee: 2000,
      modifiedAt: "2022-03-20T16:23:03.056",
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "레보네이트 공기청정기",
      mapData: "강서구",
      dailyRentalFee: 2000,
      modifiedAt: "2022-03-20T16:23:03.056",
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "레보네이트 공기청정기",
      mapData: "강서구",
      dailyRentalFee: 2000,
      modifiedAt: "2022-03-20T16:23:03.056",
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "레보네이트 공기청정기",
      mapData: "강서구",
      dailyRentalFee: 2000,
      modifiedAt: "2022-03-20T16:23:03.056",
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "레보네이트 공기청정기",
      mapData: "강서구",
      dailyRentalFee: 2000,
      modifiedAt: "2022-03-20T16:23:03.056",
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "레보네이트 공기청정기",
      mapData: "강서구",
      dailyRentalFee: 2000,
      modifiedAt: "2022-03-20T16:23:03.056",
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "레보네이트 공기청정기",
      mapData: "강서구",
      dailyRentalFee: 2000,
      modifiedAt: "2022-03-20T16:23:03.056",
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "레보네이트 공기청정기",
      mapData: "강서구",
      dailyRentalFee: 2000,
      modifiedAt: "2022-03-20T16:23:03.056",
    },
  ];
  const { userLikedBoard } = useSelector(({ myPage }) => myPage.myPageData);
  console.log(userLikedBoard);

  const nowTimeData = new Date();
  const nowYear = getYear(nowTimeData);
  const nowMonth = getMonth(nowTimeData);
  const nowDate = getDate(nowTimeData);
  const nowHour = getHours(nowTimeData);
  const nowMinute = getMinutes(nowTimeData);
  const pageAmount = 5;
  return (
    <Wrapper>
      <h3>찜한 내역</h3>
      <HorizontalLine />
      <LikeListWrapper>
        {myLikedList.map((p) => {
          const dataDate = new Date(p.modifiedAt);
          const year = getYear(dataDate);
          const month = getMonth(dataDate);
          const date = getDate(dataDate);
          const hour = getHours(dataDate);
          const minute = getMinutes(dataDate);
          return (
            <LikeListCard>
              <LikeListCardImg src={p.imageUrl1} />
              <h4>{p.title}</h4>
              <LikeListMapData>
                <LocationOnOutlinedIcon /> 서울 {p.mapData}
              </LikeListMapData>
              <LikeListCardDailyRentalFee>
                <strong>{p.dailyRentalFee.toLocaleString()}</strong> 원 / 일
              </LikeListCardDailyRentalFee>
              <LikeListCardModifiedAt>
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
              </LikeListCardModifiedAt>
            </LikeListCard>
          );
        })}
      </LikeListWrapper>
    </Wrapper>
  );
};

export default LikeList;
