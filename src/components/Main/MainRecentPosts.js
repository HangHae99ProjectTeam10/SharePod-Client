import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  FlexBox,
  PostCardImg,
  PostCardImgWrapper,
  PostCardInfoWrapper,
  PostCardWrapper,
  PostListBox,
  ProductInfoLocation,
  ProductInfoPriceDay,
  ProductInfoPriceMoney,
  ProductInfoPriceWrapper,
  ProdcutInfoCreatedTitle,
  ProductInfoTag,
  ProductInfoTitle,
  ProductInfoWrapper,
  SubTitle,
  Title,
  TitleBox,
  ViewMoreBtn,
  Wrapper,
} from "./MainRecentPosts.style";
import { useStyles } from "../../style/Icons.style";

import ProductService from "services/product";
import { history } from "redux/store";

const MainRecentPosts = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { product_list } = useSelector(({ product }) => product);
  const postAmount = 8;

  useEffect(() => {
    dispatch(ProductService.getProductList(postAmount));
  }, []);

  const moveToDetail = (boardId) => {
    history.push(`/product/product-detail/${boardId}`);
  };

  const moveToSearchList = () => {
    history.push(`/product/product-search`);
  };
  return (
    <Wrapper>
      <FlexBox>
        <TitleBox>
          <Title>최근 대여 게시글</Title>
          <SubTitle>| 지금 올라온 게시글을 확인해보세요.</SubTitle>
        </TitleBox>
        <ViewMoreBtn onClick={moveToSearchList}>전체보기</ViewMoreBtn>
      </FlexBox>

      {/* 이미지 시작 */}
      <PostListBox>
        {product_list &&
          product_list.map((p, index) => {
            return (
              <Box
                key={index}
                onClick={() => {
                  moveToDetail(p.boardId);
                }}
              >
                <PostCardWrapper>
                  <PostCardImgWrapper>
                    <FavoriteBorderIcon className={classes.favoriteIcon} />
                    <PostCardImg src={p.firstImgUrl} alt="" />
                  </PostCardImgWrapper>
                  <PostCardInfoWrapper>
                    <ProductInfoWrapper>
                      <ProductInfoTitle>{p.title}</ProductInfoTitle>
                      <ProductInfoLocation>
                        <LocationOnIcon />
                        <Typography>{p.boardRegion}</Typography>
                      </ProductInfoLocation>
                      <ProductInfoPriceWrapper>
                        <Box sx={{ display: "flex" }}>
                          <ProductInfoPriceMoney>
                            {p.dailyRentalFee.toLocaleString()}
                          </ProductInfoPriceMoney>
                          <ProductInfoPriceDay> 원 / 일</ProductInfoPriceDay>
                        </Box>
                        <ProdcutInfoCreatedTitle>1분전</ProdcutInfoCreatedTitle>
                      </ProductInfoPriceWrapper>

                      <Box sx={{ display: "flex" }} mt={2}>
                        <ProductInfoTag>#{p.category}</ProductInfoTag>
                        <ProductInfoTag>#{p.boardRegion}</ProductInfoTag>
                      </Box>
                    </ProductInfoWrapper>
                  </PostCardInfoWrapper>
                </PostCardWrapper>
              </Box>
            );
          })}
      </PostListBox>
    </Wrapper>
  );
};

export default MainRecentPosts;
