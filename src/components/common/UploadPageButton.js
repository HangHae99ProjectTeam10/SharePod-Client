import React from "react";
import styled from "styled-components";
import { history } from "redux/store";

const UploadPageButton = () => {
  return (
    <UploadPageButtonWrap
      onClick={() => {
        history.push("/product/upload-product");
      }}
    >
      <span>+</span>
    </UploadPageButtonWrap>
  );
};

const UploadPageButtonWrap = styled.button`
  position: fixed;
  bottom: 30%;
  right: 10%;
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 30px;
  font-size: 40px;
  color: #fff;
  background-color: #8c8c8c;
  cursor: pointer;
`;

export default UploadPageButton;
