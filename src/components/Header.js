import React from "react";
import styled from "styled-components";
import { history } from "../redux/store";
import LoginModal from "./LoginModal";
import SearchField from "./SearchField";

const Header = () => {
  const isLogin = false;
  return (
    <HeaderWrap>
      <div
        style={{
          display: "flex",
        }}
      >
        <h1
          onClick={() => {
            history.push("/");
          }}
        >
          SHARE <strong>POD</strong>
        </h1>
        <SearchField></SearchField>
      </div>
      <Buttons>
        {isLogin ? <Button>로그아웃</Button> : <LoginModal></LoginModal>}
      </Buttons>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  padding: 22px 150px;
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 17px;
    margin-right: 67px;
  }
`;

const Button = styled.button`
  width: 121px;
  height: 34px;
  font-size: 14px;
  color: #c4c4c4;
  border: none;
  border-radius: 5px;
`;

const Buttons = styled.div``;

export default Header;
