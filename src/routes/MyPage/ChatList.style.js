import {
  bg_gray_color,
  font_berry_blue_color,
  font_charcoal_gray_color,
  font_dark_gray_color,
  font_light_charcoal_gray_color,
  line_light_gray_color,
  main_color,
} from "constants/ColorSet";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 824px;
  padding: 30px 40px;
  background-color: #fff;
  height: 100%;
  h3 {
    margin_bottom: 16px;
    font-size: 18px;
    font-weight: 500;
    color: ${font_berry_blue_color};
  }
`;

export const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${bg_gray_color};
`;

export const ChatListWrapper = styled.div``;

export const ChatCard = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid ${line_light_gray_color};
  border-bottom: 1px solid ${line_light_gray_color};
  padding: 10px 0px;
  cursor: pointer;
`;

export const ChatPartnerProfileImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;

export const ChatCardTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 32px;
  p {
    width: 350px;
    box-sizing: border-box;
    font-size: 14px;
    color: ${font_charcoal_gray_color};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export const ChatPartnerInfo = styled.div`
  .nickname {
    font-size: 18px;
    color: ${font_dark_gray_color};
  }
  .mapData {
    margin-left: 8px;
    font-size: 14px;
    color: ${font_light_charcoal_gray_color};
  }
`;

export const ChatCardSide = styled.div`
  display: flex;
  margin-left: auto;
  span {
    margin: 8px 30px 0 0;
    font-size: 14px;
    font-weight: 350;
    color: ${font_light_charcoal_gray_color};
  }
  img {
    width: 65px;
    height: 65px;
    border-radius: 10px;
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
