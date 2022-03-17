import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useStyles } from "style/Icons.style";
import {
  Button,
  FlexBox,
  Logo,
  SearchInputBox,
  SearchInputWrapper,
  Wrapper,
} from "./Header.style";
import { history } from "redux/store";

const Header = () => {
  const classes = useStyles();

  const moveToMain = () => {
    history.push("/");
  };
  const moveToLogin = () => {
    history.push("/auth/signin");
  };
  const moveToSignup = () => {
    history.push("/auth/signup");
  };

  return (
    <Wrapper>
      <Logo src="/logo.png" alt="logo" onClick={moveToMain} />
      <SearchInputWrapper>
        <SearchInputBox placeholder="물품명을 입력해주세요" />

        <SearchIcon className={classes.searchIcon} />
      </SearchInputWrapper>
      <FlexBox>
        <Button color="#4a2fc3" onClick={moveToLogin}>
          로그인
        </Button>
        <Button background="#4a2fc3" onClick={moveToSignup}>
          회원가입
        </Button>
      </FlexBox>
    </Wrapper>
  );
};

export default Header;
