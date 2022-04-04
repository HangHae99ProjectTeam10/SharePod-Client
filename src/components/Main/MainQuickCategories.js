import { Box } from "@mui/material";
import React from "react";
import { history } from "redux/store";
import {
  CategoryCard,
  CategoryCardListBox,
  CategoryImg,
  CategoryTitle,
  Wrapper,
} from "./MainQuickCategories.style";

const MainQuickCategories = () => {
  const quickCategories = [
    {
      title: "디지털 기기",
      img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80",
    },
    {
      title: "생활 가전",
      img: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    },
    {
      title: "음반/악기",
      img: "https://images.unsplash.com/photo-1588449668365-d15e397f6787?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    },
    {
      title: "스포츠/레저",
      img: "https://images.unsplash.com/photo-1512412046876-f386342eddb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    },
    {
      title: "게임",
      img: "https://images.unsplash.com/photo-1580234797602-22c37b2a6230?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2367&q=80",
    },
    {
      title: "셀프 케어",
      img: "https://image.hmall.com/static/4/7/22/35/2135227403_0.jpg?RS=600x600&AR=0",
    },
    {
      title: "공구/산업용품",
      img: "https://images.unsplash.com/photo-1540104539488-92a51bbc0410?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2376&q=80",
    },
    {
      title: "카메라",
      img: "https://images.unsplash.com/photo-1500646953400-045056a916d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    },
  ];
  const moveToSearchResult = (categoryTitle) => {
    history.push(`/product/product-search/?&&${categoryTitle}`);
  };
  return (
    <Wrapper>
      <CategoryCardListBox>
        {quickCategories.map((p, index) => {
          return (
            <CategoryCard
              key={index}
              onClick={() => moveToSearchResult(p.title)}
            >
              <CategoryImg src={p.img} alt="" />
              <CategoryTitle>{p.title}</CategoryTitle>
            </CategoryCard>
          );
        })}
      </CategoryCardListBox>
    </Wrapper>
  );
};

export default MainQuickCategories;
