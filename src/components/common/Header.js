import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useStyles } from "style/Icons.style";
import {
  Button,
  FlexBox,
  SearchInputBox,
  SearchInputWrapper,
  Wrapper,
} from "./Header.style";

const Header = () => {
  const classes = useStyles();

  return (
    <Wrapper>
      <img src="/logo.png" alt="logo" />
      <SearchInputWrapper>
        <SearchInputBox placeholder="물품명을 입력해주세요" />

        <SearchIcon className={classes.searchIcon} />
      </SearchInputWrapper>
      <FlexBox>
        <Button color="#4a2fc3">로그인</Button>
        <Button background="#4a2fc3">회원가입</Button>
      </FlexBox>
    </Wrapper>
  );
};

export default Header;
