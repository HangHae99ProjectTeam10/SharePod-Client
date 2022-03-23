import {
  bg_gray_color,
  font_glare_black,
  font_light_gray_color,
  line_light_gray_color,
} from "constants/ColorSet";
import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${bg_gray_color};
`;

export const ChatSection = styled.div`
  display: flex;
  width: 1140px;
  margin: 0 auto;
  height: 100%;
`;

export const ChatSelectBox = styled.div`
  // width: 360px;
  background-color: #fff;
  border: 1px solid ${line_light_gray_color};
`;
export const ChatSelectBoxHeader = styled.div`
  display: flex;
  padding: 16px 19px;
  border-bottom: 1px solid ${line_light_gray_color};
  img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }
  h3 {
    margin: 10px 0 0 12px;
    font-size: 16px;
    font-weight: 500;
    color: ${font_glare_black};
  }
`;

export const RecentPartnerBox = styled.div`
  overflow-y: auto;
  max-height: 80vh;
`;

export const RecentPartnerCard = styled.div`
  display: flex;
  border: 1px solid ${line_light_gray_color};
  padding: 16px 24px 16px 18px;
  cursor: pointer;
`;

export const RecentPartnerUserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 13px;
`;

export const RecentPartnerCardTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  box-sizing: border-box;
  .nickname {
    margin: 10px 4px 0 0;
    font-size: 16px;
    font-weight: 500;
    color: ${font_glare_black};
  }
  .boardData {
    font-size: 12px;
    color: ${font_light_gray_color};
  }
  .recentMessage {
    margin-bottom: 2px;
    font-size: 14px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #777;
  }
`;

export const RecentPartnerProductImg = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 53px;
  border-radius: 10px;
`;

export const ChatFieldWrapper = styled.div`
  position: relative;
  width: 847px;
  background: #fdfdfd;
  border-radius: 0 8px 8px 0;
`;

export const ChatFieldHeader = styled.div``;

export const BoardInfo = styled.div`
  padding: 18px 24px;
  border: 1px solid #ededed;
  display: flex;
  img {
    width: 36px;
    height: 36px;
    border-radius: 5px;
    margin-right: 14px;
  }
  div {
    display: flex;
    flex-direction: column;
    font-size: 10px;
    .boardTitle {
      color: #ebebeb;
      background: #8b8585;
      width: 200px;
      padding: 1px 3px;
    }
    .rentalfee {
      color: #777;
      strong {
        font-size: 14px;
        margin-right: 3px;
      }
    }
  }
`;

export const Blank = styled.div`
  width: 36px;
  height: 36px;
`;

export const MessageField = styled.div`
  padding: 15px 24px;
  overflow-y: auto;
  max-height: 430px;
`;

export const DateNotice = styled.div`
  position: relative;
  margin: 23px 0px;
  div {
    width: 100%;
    height: 1px;
    background-color: #dedede;
  }
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 10;
    transform: translate(-50%, -50%);
    padding: 5px 12px;
    background-color: #fdfdfd;
    font-size: 14px;
    font-weight: 500;
    color: #999;
  }
`;

export const MyMessageCard = styled.div`
  display: flex;
  width: 386px;
  margin-left: auto;
  align-items: flex-end;
  .time {
    margin: 0 5px 13px 0;
    font-size: 11px;
    color: #999;
  }
  p {
    width: 335px;
    box-sizing: border-box;
    margin-top: 8px;
    margin-left: auto;
    border-radius: 10px 0 10px 10px;
    padding: 11px 13px;
    font-size: 14px;
    background-color: #ededed;
    color: #777;
  }
`;

export const PartnersMessageCard = styled.div`
  display: flex;
  img {
    width: 30px;
    height: 30px;
    margin-right: 7px;
    border-radius: 15px;
    background-color: #c4c4c4;
  }
  span {
    margin-bottom: 5px;
    font-size: 14px;
    color: #777;
  }
  .flex {
    display: flex;
    width: 386px;
    align-items: flex-end;
  }
  p {
    width: 335px;
    box-sizing: border-box;
    margin-top: 8px;
    border-radius: 0 10px 10px 10px;
    padding: 11px 13px;
    font-size: 14px;
    background-color: #ededed;
    color: #777;
  }
  .time {
    margin: 0 0 13px 5px;
    font-size: 11px;
    color: #999;
  }
`;

export const MessageBar = styled.div`
  position: absolute;
  display: flex;
  bottom: 18px;
  left: 24px;
  z-index: 100;
  input {
    width: 675px;
    height: 48px;
    box-sizing: border-box;
    margin-right: 8px;
    border-radius: 10px;
    border: none;
    padding: 0 48px;
    background: #ededed;
    font-size: 18px;
  }
  button {
    width: 116px;
    height: 48px;
    box-sizing: border-box;
    border-radius: 10px;
    border: none;
    background-color: #8c8c8c;
    font-size: 14px;
    font-weight: 600;
    color: #f2f2f2;
    cursor: pointer;
  }
`;
