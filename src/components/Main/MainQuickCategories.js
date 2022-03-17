import { Box } from "@mui/material";
import React from "react";
import styled from "styled-components";

const MainQuickCategories = () => {
  const quickCategories = [
    {
      title: "디지털기기",
      img: "https://i.pinimg.com/564x/9d/e1/36/9de13693679089b67c1c87ce2233090d.jpg",
    },
    {
      title: "생활가전",
      img: "https://i.pinimg.com/736x/60/1e/63/601e63a60b651de03c34c8c2baf04b6e.jpg",
    },
    {
      title: "음반/악기",
      img: "https://i.pinimg.com/564x/f0/10/f5/f010f5c2d543cf3568396813d387471a.jpg",
    },
    {
      title: "스포츠/레저",
      img: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    },
    {
      title: "컴퓨터/게임",
      img: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    },
  ];
  return (
    <Wrapper>
      <Box>
        <Title>빠른 카테고리</Title>
        <SubTitle>인기 카테고리를 한눈에</SubTitle>
      </Box>
      <CategoryCardListBox>
        {quickCategories.map((p, index) => {
          return (
            <CategoryCard key={index}>
              <CategoryTitle>{p.title}</CategoryTitle>
              <CategoryOverlay>
                <CategoryImg src={p.img} alt="" />
              </CategoryOverlay>
            </CategoryCard>
          );
        })}
      </CategoryCardListBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 40px 0px;
`;
const Title = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
`;
const SubTitle = styled.div`
  color: #777777;
  margin: 10px 0px 20px 0px;
`;
const CategoryCardListBox = styled.div`
  display: flex;
`;
const CategoryCard = styled.div`
  position: relative;
  margin-right: 20px;
`;
const CategoryTitle = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  color: #ffffff;
  font-weight: bold;
`;
const CategoryOverlay = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 20px;
  background: black;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
`;
const CategoryImg = styled.img`
  opacity: 0.7;
  width: 100%;
  object-fit: cover;
`;

export default MainQuickCategories;
