import React from "react";
import styled from "styled-components";
import { history } from "../redux/store";
import LoginModal from "./LoginModal";
import SearchField from "./SearchField";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        border: "1px solid #EDEDED",
        padding: "20px 10rem",
        justifyContent: "space-between",
      }}
    >
      <img src="/logo.png" alt="logo" />
      <div
        style={{
          width: "50%",
          height: "40px",
          borderRadius: "30px",
          backgroundColor: "#F2F3F8",
          display: "flex",
          alignItems: "center",
          padding: "0px 20px",
        }}
      >
        <SearchIcon
          style={{
            color: "#ADB9C8",
            marginRight: "10px",
          }}
        />
        <p
          style={{
            color: "#ADB9C8",
          }}
        >
          물품명을 입력해주세요
        </p>
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
            width: "120px",
            height: "40px",
            background: "white",
            borderRadius: "20px",
            color: "#4A2FC3",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "10px",
            fontWeight: "bold",
            fontSize: "0.9rem",
          }}
        >
          로그인
        </div>
        <div
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
            width: "120px",
            height: "40px",
            background: "#4A2FC3",
            borderRadius: "20px",
            color: "white",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "0.9rem",
          }}
        >
          회원가입
        </div>
      </div>
    </div>
  );
};

export default Header;
