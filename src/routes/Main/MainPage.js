import React from "react";
import styled from "styled-components";
import {
  MainBottom,
  MainCarousel,
  MainCategory,
  MainQuickCategories,
  MainRecentPosts,
} from "components/Main";

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

const Wrapper = styled.section`
  padding: 0px 10rem;
`;

export default MainPage;
