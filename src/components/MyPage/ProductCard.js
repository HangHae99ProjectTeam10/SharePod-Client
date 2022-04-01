import React from "react";
import {
  LikeListCard,
  LikeListCardDailyRentalFee,
  LikeListCardImg,
  LikeListCardModifiedAt,
  LikeListMapData,
} from "./ProductCard.style";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { history } from "redux/store";
import { getDate, getHours, getMinutes, getMonth, getYear } from "date-fns";

const ProductCard = (props) => {
  const moveToDetail = (id) => {
    history.push(`/product/product-detail/${id}`);
  };

  const nowTimeData = new Date();
  const nowYear = getYear(nowTimeData);
  const nowMonth = getMonth(nowTimeData);
  const nowDate = getDate(nowTimeData);
  const nowHour = getHours(nowTimeData);
  const nowMinute = getMinutes(nowTimeData);

  const dataDate = new Date(props.modifiedAt);
  const year = getYear(dataDate);
  const month = getMonth(dataDate);
  const date = getDate(dataDate);
  const hour = getHours(dataDate);
  const minute = getMinutes(dataDate);
  console.log(props.modifiedAt);

  return (
    <LikeListCard
      onClick={() => {
        moveToDetail(props.boardId);
      }}
    >
      <LikeListCardImg src={props.firstImg} />
      <h4>{props.boardTitle}</h4>
      <LikeListMapData>
        <LocationOnOutlinedIcon /> 서울 {props.mapData}
      </LikeListMapData>
      <LikeListCardDailyRentalFee>
        <strong>{props.dailyRentalFee.toLocaleString()}</strong> 원 / 1 일
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
};
export default ProductCard;
