import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components";

const MainCategory = () => {
  return (
    <Wrapper>
      <MenuIcon />
      <CategoryText>카테고리</CategoryText>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  color: #4a2fc3;
  font-weight: bold;
  display: flex;
  padding: 20px 0px;
  align-items: center;
`;

const CategoryText = styled.div`
  margin-left: 10px;
`;

export default MainCategory;
