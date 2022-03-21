import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ChatList from "./ChatList";
import LikeList from "./LikeList";
import MyUserInfo from "./MyUserInfo";
import MyProduct from "./MyProduct";
import RentalList from "./RentalList";
import Withdrawal from "./Withdrawal";
import MyPageService from "services/myPage";
import {
  MyPageButtons,
  MyPageContentsField,
  MyPageHeader,
  SelectedContent,
  Wrapper,
} from "./MyInfoSetting.style";

const MyInfoSetting = () => {
  const dispatch = useDispatch();
  const [radioValue, setRadioValue] = useState("1");
  const handleRadioButton = (e) => {
    setRadioValue(e.target.value);
    console.log(radioValue);
  };
  useEffect(() => {
    dispatch(MyPageService.getMyPageData());
  }, []);
  return (
    <Wrapper>
      <MyPageHeader>
        <h2>마이페이지</h2>
      </MyPageHeader>
      <MyPageContentsField>
        <MyPageButtons>
          <label className={radioValue === "1" ? "checked" : null}>
            👤 내 프로필 관리
            <input
              type="radio"
              hidden
              name="mypage"
              value="1"
              onChange={handleRadioButton}
            />
          </label>
          <label className={radioValue === "2" ? "checked" : null}>
            🤍 찜한 내역
            <input
              type="radio"
              hidden
              name="mypage"
              value="2"
              onChange={handleRadioButton}
            />
          </label>
          <label className={radioValue === "3" ? "checked" : null}>
            📝 내 상품 관리
            <input
              type="radio"
              hidden
              name="mypage"
              value="3"
              onChange={handleRadioButton}
            />
          </label>
          <label className={radioValue === "4" ? "checked" : null}>
            📃 예약 내역
            <input
              type="radio"
              hidden
              name="mypage"
              value="4"
              onChange={handleRadioButton}
            />
          </label>
          <label className={radioValue === "5" ? "checked" : null}>
            💬 1:1 채팅 내역
            <input
              type="radio"
              hidden
              name="mypage"
              value="5"
              onChange={handleRadioButton}
            />
          </label>
          <label className={radioValue === "6" ? "checked" : null}>
            🗑 회원 탈퇴
            <input
              type="radio"
              hidden
              name="mypage"
              value="6"
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
            <MyProduct />
          ) : radioValue === "4" ? (
            <RentalList />
          ) : radioValue === "5" ? (
            <ChatList />
          ) : radioValue === "6" ? (
            <Withdrawal />
          ) : (
            <MyUserInfo />
          )}
        </SelectedContent>
      </MyPageContentsField>
    </Wrapper>
  );
};

export default MyInfoSetting;
