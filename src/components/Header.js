import React from "react";
// import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { history } from "../redux/store";
import LoginModal from "./LoginModal";
import SearchField from "./SearchField";

const Header = () => {
  // const navigate = useNavigate();
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
        <LoginModal></LoginModal>
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

const Buttons = styled.div``;

export default Header;
