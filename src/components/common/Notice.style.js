import {
  font_black_color,
  font_charcoal_gray_color,
  font_dark_gray_color,
  font_deep_gray_color,
  like_color,
  line_light_gray_color,
  main_color,
  main_variant_color_2,
} from "constants/ColorSet";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  margin: 10px 10px 0 0;
  z-index: 2000;
  .noticeCount {
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
    line-height: 1px;
    text-align: center;
    color: #fff;
    cursor: pointer;
  }
`;

export const NoticeButton = styled.div`
  svg {
    width: 24px;
    height: 24px;
    color: ${font_charcoal_gray_color};
    cursor: pointer;
  }
`;

//NoticeModal
export const NoticeModalWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: -10px;
  display: ${(props) => (!props.floatingModal ? "none" : "flex")};
  flex-direction: column;
  align-items: flex-end;
  width: 375px;
  height: 490px;
  z-index: 10;
  .triangle {
    margin-top: 5px;
    margin-right: 20px;
    width: 0;
    position: relative;
    border-bottom: 10px solid #fff;
    border-left: 10px solid transparent;
    border-right: 0 solid transparent;
  }
`;

export const NoticeModalBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-height: 430px;
  overflow: hidden;
  overflow-y: auto;
  border-radius: 10px;
  background-color: #fff;
`;
export const NoticeModalBoxHeader = styled.div`
  width: 100%;
  background-color: #fff;
  color: #fff;
  border-bottom: 1px solid ${line_light_gray_color};
  button:hover {
    color: ${font_black_color};
  }
  button {
    padding: 24px;
    border: none;
    font-size: 16px;
    color: ${font_deep_gray_color};
    background-color: transparent;
    cursor: pointer;
  }
  .checked,
  .checked:hover {
    color: ${main_variant_color_2};
  }
`;

export const NoticeModalBoxHeaderEveryNoticeButton = styled.button``;
export const NoticeModalBoxHeaderRentalRequestButton = styled.button``;
export const NoticeModalBoxHeaderPersonalChatButton = styled.button``;

export const NoticeCardWrapper = styled.div`
  // display: ${(props) => (props.noticeCardHidden ? "none" : "flex")};
  display: flex;
  width: 330px;
  height: 105px;
  margin: 8px 24px;
  box-sizing: border-box;
  border-bottom: 1px solid ${line_light_gray_color};
  img {
    width: 32px;
    height: 32px;
    margin-right: 11px;
    border-radius: 16px;
  }
`;

export const NoticeCardInfoBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  .userRegion {
    margin-bottom: 5px;
    font-size: 12px;
    color: ${font_deep_gray_color};
  }
  .noticeContent {
    font-size: 14px;
    color: ${font_dark_gray_color};
    margin: 0;
  }
  .actionButton {
    padding: 5px 0;
    font-size: 12px;
    width: 102px;
    box-sizing: border-box;
    margin-top: 5px;
    border-radius: 5px;
    color: #fff;
    border: none;
    background-color: ${main_color};
    cursor: pointer;
  }
  .deleteButton {
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    border: none;
    color: #fff;
    cursor: pointer;
  }
`;

export const NoticeCardInfoBoxButtons = styled.div``;
