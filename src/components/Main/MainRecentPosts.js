import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box } from "@mui/material";
import {
  FlexBox,
  PostCardImg,
  PostCardImgWrapper,
  PostCardInfoWrapper,
  PostCardWrapper,
  PostListBox,
  ProductInfoPriceDay,
  ProductInfoPriceMoney,
  ProductInfoPriceWrapper,
  ProductInfoSummary,
  ProductInfoTag,
  ProductInfoTitle,
  ProductInfoWrapper,
  ProfileImg,
  ProfileInfoWrapper,
  ProfileNameInfo,
  ProfileNameText,
  SubTitle,
  Title,
  Wrapper,
} from "./MainRecentPosts.style";
import { useStyles } from "../../style/Icons.style";

const MainRecentPosts = () => {
  const classes = useStyles();
  const arr = [0, 0, 0, 0, 0, 0];
  return (
    <Wrapper>
      <Box>
        <Title>최근 대여 게시글</Title>
        <FlexBox>
          <SubTitle>지금 올라온 게시글을 확인해보세요.</SubTitle>
          <SubTitle>전체보기</SubTitle>
        </FlexBox>
      </Box>
      {/* 이미지 시작 */}
      <PostListBox>
        {arr.map((p, index) => {
          return (
            <Box key={index}>
              <PostCardWrapper>
                <PostCardImgWrapper>
                  <FavoriteBorderIcon className={classes.favoriteIcon} />
                  <PostCardImg
                    src="https://i.pinimg.com/564x/93/bc/47/93bc47022380cf947a53acb595bc3c70.jpg"
                    alt=""
                  />
                </PostCardImgWrapper>
                <PostCardInfoWrapper>
                  <ProfileInfoWrapper>
                    <ProfileImg
                      src="https://tistory1.daumcdn.net/tistory/2866877/attach/13f43ae07fe94befa5571bfd6442c89e"
                      alt=""
                    />
                    <ProfileNameInfo>
                      <ProfileNameText>판매자 : 홍길동</ProfileNameText>
                    </ProfileNameInfo>
                  </ProfileInfoWrapper>
                  <ProductInfoWrapper>
                    <ProductInfoTitle>
                      삼성전자 공기청정기 필요하신 분!!
                    </ProductInfoTitle>
                    <ProductInfoPriceWrapper>
                      <ProductInfoPriceMoney>30,000원</ProductInfoPriceMoney>

                      <ProductInfoPriceDay>/ 1일기준</ProductInfoPriceDay>
                    </ProductInfoPriceWrapper>

                    <ProductInfoSummary>
                      공기청정기 1회 사용했습니다. 필요하신 분 연락주세요.
                    </ProductInfoSummary>
                    <FlexBox>
                      <ProductInfoTag>#디지털기기</ProductInfoTag>
                      <ProductInfoTag>#강남구</ProductInfoTag>
                    </FlexBox>
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
