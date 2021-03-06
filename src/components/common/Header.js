import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useStyles } from "style/Icons.style";
import {
  Button,
  FlexBox,
  Logo,
  ProfileImg,
  SearchInputBox,
  SearchInputWrapper,
  Wrapper,
} from "./Header.style";
import { history } from "redux/store";
import { useDispatch, useSelector } from "react-redux";
import JWTAuth from "services/auth";
import Notice from "./Notice";

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const moveToMain = () => {
    history.push("/");
  };
  const moveToLogin = () => {
    history.push("/auth/signin");
  };
  const moveToSignup = () => {
    history.push("/auth/signup");
  };

  const onLogout = () => {
    dispatch(JWTAuth.onLogout());
  };
  const { authUser } = useSelector(({ auth }) => auth);

  const searchAction = (p) => {
    if (p.code === "Enter") {
      console.log(p.target.value);
      history.push(`/product/product-search/?&${p.target.value}`);
    }
  };

  return (
    <Wrapper>
      <Logo src="/logo.png" alt="logo" onClick={moveToMain} />
      <SearchInputWrapper>
        <SearchInputBox
          placeholder="물품명을 입력해주세요"
          onKeyPress={searchAction}
        />
        <SearchIcon className={classes.searchIcon} />
      </SearchInputWrapper>
      {authUser ? (
        <FlexBox>
          <Notice />
          <Button color="#4a2fc3" onClick={onLogout}>
            로그아웃
          </Button>
          <ProfileImg
            src={authUser.userImg}
            alt="this is profile img"
            onClick={() => {
              history.push("/mypage/myInfo");
            }}
          />
        </FlexBox>
      ) : (
        <FlexBox>
          <Button color="#4a2fc3" onClick={moveToLogin}>
            로그인
          </Button>
          <Button background="#4a2fc3" onClick={moveToSignup}>
            회원가입
          </Button>
        </FlexBox>
      )}
    </Wrapper>
  );
};

export default Header;
