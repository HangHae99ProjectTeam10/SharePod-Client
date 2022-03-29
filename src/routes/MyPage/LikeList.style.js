import {
  bg_gray_color,
  font_charcoal_gray_color,
  line_light_gray_color,
  main_color,
} from "constants/ColorSet";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 824px;
  height: 1070px;
  padding: 30px;
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

export const PaginationButtons = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
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

export const NothingPostedWrapper = styled.div`
  padding: 146px 200px 400px;
`;

export const NothingPostedInner = styled.div`
  text-align: center;
  p {
    margin-bottom: 16px;
    font-size: 14px;
    color: ${font_charcoal_gray_color};
  }
  button {
    width: 294px;
    height: 56px;
    border: none;
    border-radius: 28px;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    background-color: ${main_color};
    cursor: pointer;
  }
`;
