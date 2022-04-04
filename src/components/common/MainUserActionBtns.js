import React from "react";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import styled from "styled-components";
import { history } from "redux/store";

const MainUserActionBtns = () => {
  const moveToUploadPage = () => {
    history.push("/product/upload-product");
  };
  return (
    <ActionBtnsWrapper>
      <BtnBackground color="#CCCCCC">
        <MapsUgcOutlinedIcon />
      </BtnBackground>
      <BtnBackground background="#622EFA" onClick={moveToUploadPage}>
        <CreateOutlinedIcon />
      </BtnBackground>
    </ActionBtnsWrapper>
  );
};
export default MainUserActionBtns;

const ActionBtnsWrapper = styled.div`
  position: fixed;
  right: 5%;
  top: 70%;
  z-index: 100;
`;

const BtnBackground = styled.div`
  background: ${(props) => props.background || "white"};
  color: ${(props) => props.color || "white"};
  width: 60px;
  height: 60px;
  border-radius: 60px;
  justify-content: center;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 10px 0px;
  cursor: pointer;
`;
