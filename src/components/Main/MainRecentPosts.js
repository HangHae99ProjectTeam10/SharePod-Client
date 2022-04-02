import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
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
  const { authUser } = useSelector(({ auth }) => auth);
  const postAmount = 8;

  useEffect(() => {
    dispatch(ProductService.getProductList());
  }, [dispatch]);

  const moveToDetail = (boardId) => {
    dispatch(ProductService.getOneProductDetail(boardId));
    history.push(`/product/product-detail/${boardId}`);
  };

  const moveToSearchList = () => {
    history.push(`/product/product-search`);
  };

  const onLikeAction = (boardId) => {
    dispatch(ProductService.setFavorite(boardId));
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
              <Box key={index}>
                <PostCardWrapper>
                  <PostCardImgWrapper>
                    {authUser && (
                      <div
                        className={classes.favoriteIcon}
                        onClick={() => onLikeAction(p.id)}
                      >
                        {p.isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                      </div>
                    )}

                    <PostCardImg
                      src={p.firstImgUrl}
                      alt=""
                      onClick={() => {
                        moveToDetail(p.id);
                      }}
                    />
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
