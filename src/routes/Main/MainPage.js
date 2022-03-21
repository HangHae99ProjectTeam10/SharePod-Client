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

const MainPage = () => {
  return (
    <Wrapper>
      <MainUserActionBtns />
      <MainCategory />
      <MainCarousel />
      <MainQuickCategories />

      <MainRecentPosts />
      <MainBottom />
    </Wrapper>
  );
};

export default MainPage;
