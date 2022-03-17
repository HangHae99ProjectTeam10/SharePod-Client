import { Box } from "@mui/material";
import React from "react";
import {
  CategoryCard,
  CategoryCardListBox,
  CategoryImg,
  CategoryOverlay,
  CategoryTitle,
  SubTitle,
  Title,
  Wrapper,
} from "./MainQuickCategories.style";

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

export default MainQuickCategories;
