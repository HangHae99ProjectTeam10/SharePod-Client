import { line_light_gray_color, main_color } from "constants/ColorSet";
import styled from "styled-components";

export const PersonalChatWrap = styled.section`
  width: 824px;
  background-color: #fff;
`;

export const ChatSection = styled.div`
  display: flex;
  border-radius: 8px;
`;

export const ChatField = styled.div`
  position: relative;
  width: 847px;
  background: #fdfdfd;
  // box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.09);
  border-radius: 0 8px 8px 0;
`;

export const BoxHeader = styled.div`
  display: flex;
  align-items: center;
  color: #8c8c8c;
  img {
    margin: 0px 20px;
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 40px;
  }

  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 26px;
    width: 24px;
    height: 24px;
    box-sizing: border-box;
    border: none;
    color: #8c8c8c;
    font-size: 24px;
    background: transparent;
    cursor: pointer;
  }
`;

export const BoardInfo = styled.div`
  padding: 18px 24px;
  border-top: 1px solid ${line_light_gray_color};
  border-bottom: 1px solid ${line_light_gray_color};
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 36px;
    height: 36px;
    border-radius: 5px;
    margin-right: 14px;
  }
  button {
    width: 110px;
    height: 36px;
    border-radius: 6px;
    border: none;
    border: 1px solid ${main_color};
    color: ${main_color};
    background: white;
    font-weight: bold;
    cursor: pointer;
  }
  .boardTitle {
    font-size: 1rem;
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
`;

export const Blank = styled.div`
  width: 36px;
  height: 36px;
`;

export const MessageField = styled.div`
  padding: 15px 24px;
  overflow-y: auto;
  position: relative;
  height: 500px;
  box-sizing: border-box;
`;
export const MessageFieldInner = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 24px;
  box-sizing: border-box;
  height: 500px;
`;

export const MyMessageCardWrapper = styled.div`
  justify-content: end;
  display: flex;
  align-items: center;
`;

export const MyMessageCard = styled.div`
  display: flex;
  justify-content: flex-end;

  .time {
    justify-content: flex-end;
    font-size: 11px;
    color: #999;
  }
  p {
    min-width: 30px;
    max-width: 335px;
    border-radius: 10px 0 10px 10px;
    padding: 11px 13px;
    font-size: 14px;
    background-color: #ededed;
    color: #777;
  }
`;

export const MyMessageTime = styled.div`
  padding-top: 10px;
  padding-right: 10px;
  font-size: 0.8rem;
`;
export const PartnerMessegeCardWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const PartnersMessageCard = styled.div`
  display: flex;
  img {
    width: 50px;
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
    min-width: 50px;
    max-width: 335px;
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
export const PartnerMessageTime = styled.div`
  padding-top: 10px;
  padding-left: 10px;
  font-size: 0.8rem;
`;

export const MessageBar = styled.div`
  display: flex;
  padding: 20px;

  input {
    width: 675px;
    height: 48px;
    box-sizing: border-box;
    margin-right: 8px;
    border-radius: 10px;
    border: none;
    padding: 0 48px;
    background: ${line_light_gray_color};
    font-size: 18px;
  }
  button {
    width: 116px;
    height: 48px;
    box-sizing: border-box;
    border-radius: 10px;
    border: none;
    background-color: ${main_color};
    font-size: 14px;
    font-weight: 600;
    color: white;
    cursor: pointer;
  }
`;
