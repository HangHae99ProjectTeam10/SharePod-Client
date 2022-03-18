import React from "react";
import {
  MainBottom,
  MainCarousel,
  MainCategory,
  MainQuickCategories,
  MainRecentPosts,
} from "components/Main";
import { Wrapper } from "./MainPage.style";

const MainPage = () => {
  return (
    <Wrapper>
      <MainCategory />
      <MainCarousel />
      <MainQuickCategories />
      <MainRecentPosts />
      <MainBottom />
    </Wrapper>
  );
};

export default MainPage;
