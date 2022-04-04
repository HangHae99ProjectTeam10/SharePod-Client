import React from "react";
import {
  MainBottom,
  MainCarousel,
  MainCategory,
  MainQuickCategories,
  MainRecentPosts,
} from "components/Main";
import { Wrapper } from "./MainPage.style";
import MainUserActionBtns from "components/common/MainUserActionBtns";
import { useSelector } from "react-redux";

const MainPage = () => {
  const { authUser } = useSelector(({ auth }) => auth);
  return (
    <Wrapper>
      {authUser && <MainUserActionBtns />}

      <MainCategory />
      <MainCarousel />
      <MainQuickCategories />
      <MainRecentPosts />
      <MainBottom />
    </Wrapper>
  );
};

export default MainPage;
