import React, { useState } from "react";

import styled from "styled-components";
import ChatList from "./ChatList";
import LikeList from "./LikeList";
import MyUserInfo from "./MyUserInfo";
import RentalList from "./RentalList";
import Withdrawal from "./Withdrawal";

const MyInfoSetting = () => {
  const [radioValue, setRadioValue] = useState("1");
  const handleRadioButton = (e) => {
    setRadioValue(e.target.value);
    console.log(radioValue);
  };
  return (
    <MyInfoWrap>
      <MyPageHeader>
        <h2>마이페이지</h2>
      </MyPageHeader>
      <MyPageContentsField>
        <MyPageButtons>
          <label className={radioValue === "1" ? "checked" : null}>
            내 정보
            <input
              type="radio"
              hidden
              name="mypage"
              value="1"
              onChange={handleRadioButton}
            />
          </label>
          <label className={radioValue === "2" ? "checked" : null}>
            찜 목록
            <input
              type="radio"
              hidden
              name="mypage"
              value="2"
              onChange={handleRadioButton}
            />
          </label>
          <label className={radioValue === "3" ? "checked" : null}>
            대여 리스트
            <input
              type="radio"
              hidden
              name="mypage"
              value="3"
              onChange={handleRadioButton}
            />
          </label>
          <label className={radioValue === "4" ? "checked" : null}>
            1:1 채팅 리스트
            <input
              type="radio"
              hidden
              name="mypage"
              value="4"
              onChange={handleRadioButton}
            />
          </label>
          <label className={radioValue === "5" ? "checked" : null}>
            회원 탈퇴
            <input
              type="radio"
              hidden
              name="mypage"
              value="5"
              onChange={handleRadioButton}
            />
          </label>
        </MyPageButtons>
        <SelectedContent>
          {radioValue === "1" ? (
            <MyUserInfo />
          ) : radioValue === "2" ? (
            <LikeList />
          ) : radioValue === "3" ? (
            <RentalList />
          ) : radioValue === "4" ? (
            <ChatList />
          ) : radioValue === "5" ? (
            <Withdrawal />
          ) : (
            <MyUserInfo />
          )}
        </SelectedContent>
      </MyPageContentsField>
    </MyInfoWrap>
  );
};

const MyInfoWrap = styled.section`
  padding: 0px 165px;
`;

const MyPageHeader = styled.div`
  padding: 54px 0 24px;
  border-bottom: 1px solid #ededed;
  h2 {
    font-size: 24px;
    font-weight: 700;
    color: #323232;
  }
`;

const MyPageContentsField = styled.div`
  display: flex;
  padding-top: 40px;
`;

const MyPageButtons = styled.div`
  display: flex;
  flex-direction: column;
  label {
    width: 160px;
    height: 48px;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 9px 16px;
    cursor: pointer;
  }
  .checked {
    background-color: #f2f3f4;
  }
`;

const SelectedContent = styled.div``;

export default MyInfoSetting;
