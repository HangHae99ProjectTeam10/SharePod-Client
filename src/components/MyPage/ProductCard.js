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
import { getSubMinutes } from "components/common/getDate";

const ProductCard = (props) => {
  const moveToDetail = (id) => {
    history.push(`/product/product-detail/${id}`);
  };

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
        {getSubMinutes(props.modifiedAt)}전
      </LikeListCardModifiedAt>
    </LikeListCard>
  );
};
export default ProductCard;
