import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { boardActionCreator } from "redux/middlewares/boardActionCreator";

const MainRecentPosts = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const arr = useSelector((state) => state.board.boardList);
  console.log(arr);
  const postAmount = 8;

  useEffect(() => {
    dispatch(boardActionCreator.getBoardAxios(postAmount));
  }, []);
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
        {arr &&
          arr.map((p, index) => {
            return (
              <Box key={index}>
                <PostCardWrapper>
                  <PostCardImgWrapper>
                    <FavoriteBorderIcon className={classes.favoriteIcon} />
                    <PostCardImg src={p.imgurl} alt="" />
                  </PostCardImgWrapper>
                  <PostCardInfoWrapper>
                    <ProfileInfoWrapper>
                      <ProfileImg
                        src="https://tistory1.daumcdn.net/tistory/2866877/attach/13f43ae07fe94befa5571bfd6442c89e"
                        alt=""
                      />
                      <ProfileNameInfo>
                        <ProfileNameText>판매자 : {p.nickname}</ProfileNameText>
                      </ProfileNameInfo>
                    </ProfileInfoWrapper>
                    <ProductInfoWrapper>
                      <ProductInfoTitle>{p.title}</ProductInfoTitle>
                      <ProductInfoPriceWrapper>
                        <ProductInfoPriceMoney>
                          {p.dailyrentalfee.toLocaleString()}
                        </ProductInfoPriceMoney>

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
