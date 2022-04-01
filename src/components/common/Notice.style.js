import { font_charcoal_gray_color, like_color } from "constants/ColorSet";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  margin: 10px 10px 0 0;
  span {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 13px;
    height: 13px;
    border-radius: 7px;
    background-color: ${like_color};
    font-size: 13px;
    text-align: center;
    color: #fff;
    cursor: pointer;
  }
  svg {
    width: 24px;
    height: 24px;
    color: ${font_charcoal_gray_color};
    cursor: pointer;
  }
`;

export const NoticeModalWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: ${(props) => (!props.floatingModal ? "none" : "flex")};
  width: 375px;
  height: 490px;
  background-color: tomato;
`;
