import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { CategoryText, Wrapper } from "./MainCategory.style";

const MainCategory = () => {
  return (
    <Wrapper>
      <MenuIcon />
      <CategoryText>카테고리</CategoryText>
    </Wrapper>
  );
};

export default MainCategory;
