import {
  bg_gray_color,
  line_light_gray_color,
  main_color,
} from "constants/ColorSet";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 824px;
  padding: 39px 32px 177px 30px;
  background-color: #fff;
  h3 {
    margin: 0 0 13px 0;
  }
`;

export const HorizontalLine = styled.div`
  width: 940px;
  height: 1px;
  background-color: ${bg_gray_color};
  margin-bottom: 27px;
`;

export const LikeListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 42px 30px;
`;

export const LikeListCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  h4 {
    margin: 0 0 4px;
    font-size: 18px;
    font-weight: 500;
    color: #323232;
  }
`;

export const LikeListCardImg = styled.img`
  width: 235px;
  height: 235px;
  margin-bottom: 16px;
  border-radius: 10px;
  object-fit: cover;
`;

export const LikeListMapData = styled.div`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 350;
  color: #777;
  svg {
    vertical-align: bottom;
    width: 14px;
    margin-bottom: -3px;
  }
`;

export const LikeListCardDailyRentalFee = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #323232;
`;

export const LikeListCardModifiedAt = styled.span`
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 14px;
  font-weight: 350;
  color: #777;
`;

export const PaginationButtons = styled.div`
  list-style-type: none;
  display: flex;
  justify-content: center;
  margin: 58px auto 0;
`;

export const PageMoveButton = styled.div`
  display: inline-block;
  width: 28px;
  height: 28px;
  border: 1px solid ${line_light_gray_color};
  color: ${main_color};
  box-sizing: border-box;
  border-radius: 14px;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  cursor: pointer;
`;

export const PageNumsButtonWrapper = styled.div`
  display: inline-block;
  margin-right: 24px;
  span {
    display: inline-block;
    width: 24px;
    height: 24px;
    box-sizing: border-box;
    margin-left: 24px;
    border-radius: 12px;
    text-align: center;
    cursor: pointer;
  }
  .checked {
    background-color: ${main_color};
    color: #fff;
  }
`;
