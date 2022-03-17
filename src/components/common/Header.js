import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <Wrapper>
      <img src="/logo.png" alt="logo" />
      <SearchInputWrapper>
        <SearchInputBox placeholder="물품명을 입력해주세요" />

        <SearchIcon
          style={{
            color: "#ADB9C8",
            marginRight: "10px",
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translate(50%, -50%)",
          }}
        />
      </SearchInputWrapper>
      <FlexBox>
        <Button color="#4a2fc3">로그인</Button>
        <Button background="#4a2fc3">회원가입</Button>
      </FlexBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  border: 1px solid #ededed;
  padding: 20px 10rem;
  justify-content: space-between;
`;
const SearchInputWrapper = styled.div`
  position: relative;
  width: 40%;
`;
const SearchInputBox = styled.input`
  height: 40px;
  border-radius: 30px;
  background-color: #f2f3f8;
  padding: 0px 40px;
  box-sizing: border-box;
  width: 100%;
  border: none;
`;

const FlexBox = styled.div`
  display: flex;
`;

const Button = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  width: 120px;
  height: 40px;
  background: ${(props) => props.background || "white"};
  border-radius: 20px;
  color: ${(props) => props.color || "white"};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  font-weight: bold;
  font-size: 0.9rem;
`;

export default Header;
