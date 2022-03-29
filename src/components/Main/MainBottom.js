import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box } from "@mui/system";
import {
  BottomImgCardBox,
  BottomImgCardWrapper,
  ButtonBox,
  CardWrapper,
  ExampleProfileImg,
  ExampleProfileImgWrapper,
  ExampleProfileInfoBox,
  ExampleProfileLocation,
  ExampleProfileName,
  ExampleReelsVideo,
  FloatedImgCardBox,
  FloatedReelsVideo,
  GuideDesc,
  GuideWrapper,
  IndexGuide,
  IndexGuideFocused,
  IndexGuideFull,
  MainPageReelsVideo,
  MoreBtn,
  MoveToDetailButton,
  ReelsMoveNextButton,
  ReelsMovePrevButton,
  ReelsPlayBoxWrapper,
  Wrapper,
} from "./MainBottom.style";
import { useDispatch, useSelector } from "react-redux";
import { history } from "redux/store";
import ProductService from "services/product";

/**TODO: 릴스 이미지로 뺴기 */
const BottomImgCard = (props) => {
  return (
    <CardWrapper>
      {props.className === "selected" && (
        <ReelsPlayBoxWrapper>
          <h4 className="boardTitle">{props.title}</h4>
          <FloatedImgCardBox
            idx={props.idx}
            className="reelsVideoCard"
            onClick={() => props._onClick(-1)}
          >
            <FloatedReelsVideo
              id="autoplay"
              controls
              autoPlay
              muted
              className="reelsVideo"
              onEnded={() =>
                props._onClick((selectedReelsNumber) => selectedReelsNumber + 1)
              }
            >
              <source src={props.videoUrl}></source>
            </FloatedReelsVideo>
          </FloatedImgCardBox>
          <ReelsMovePrevButton
            className="prev"
            onClick={() => {
              if (props.idx > 0) {
                props._onClick(
                  (selectedReelsNumber) => selectedReelsNumber - 1
                );
              }
            }}
          >
            {"<"}
          </ReelsMovePrevButton>
          <ReelsMoveNextButton
            className="next"
            onClick={() => {
              if (props.idx < props.length - 1) {
                props._onClick(
                  (selectedReelsNumber) => selectedReelsNumber + 1
                );
              }
            }}
          >
            {">"}
          </ReelsMoveNextButton>
          <MoveToDetailButton
            onClick={() => {
              history.push(`/product/product-detail/${props.boardId}`);
            }}
          >
            자세히 보기
          </MoveToDetailButton>
        </ReelsPlayBoxWrapper>
      )}
      <BottomImgCardBox carouselReelsNumber={props.carouselReelsNumber}>
        <ExampleProfileImgWrapper className={props.className}>
          <ExampleProfileImg src={props.userImg} alt="" />
          <ExampleProfileInfoBox>
            <ExampleProfileName>{props.nickName}</ExampleProfileName>
            <ExampleProfileLocation>
              서울시 {props.boardRegion}
            </ExampleProfileLocation>
          </ExampleProfileInfoBox>
        </ExampleProfileImgWrapper>
        <MainPageReelsVideo onClick={() => props._onClick(props.idx)}>
          <source src={props.videoUrl}></source>
        </MainPageReelsVideo>
      </BottomImgCardBox>
    </CardWrapper>
  );
};
const MainBottom = () => {
  const dispatch = useDispatch();
  const { reels_list } = useSelector(({ product }) => product);
  const [selectedReelsNumber, setSelectedReelsNumber] = useState(-1);
  const [carouselReelsNumber, setCarouselReelsNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    dispatch(ProductService.getProductReels(carouselReelsNumber, setIsLoading));
  }, []);

  useEffect(() => {
    if (carouselReelsNumber >= reels_list?.length - 1 && !isLoading) {
      dispatch(
        ProductService.getProductReels(carouselReelsNumber, setIsLoading)
      );
    }
    if (selectedReelsNumber !== -1) {
      setCarouselReelsNumber(selectedReelsNumber + 1);
    }
  }, [selectedReelsNumber, carouselReelsNumber]);

  useEffect(() => {
    setIsLoading(false);
  }, [reels_list]);

  const exampleData = [
    {
      profile:
        "https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      reels: "https://pbs.twimg.com/media/ESF9X8IUEAEzJ34.png",
      name: "홍진호",
      location: "강남구",
    },
    {
      profile:
        "https://images.unsplash.com/photo-1600603405959-6d623e92445c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      reels:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
      name: "유재석",
      location: "종로구",
    },
    {
      profile:
        "https://images.unsplash.com/photo-1507114845806-0347f6150324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      reels:
        "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80",
      name: "강호동",
      location: "중구",
    },
    {
      profile:
        "https://images.unsplash.com/photo-1605406575497-015ab0d21b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      reels:
        "https://images.unsplash.com/photo-1552422535-c45813c61732?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
      name: "김태희",
      location: "도봉구",
    },
    {
      profile:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      reels:
        "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
      name: "한가인",
      location: "용산구",
    },
  ];
  return (
    <Wrapper>
      <GuideWrapper>
        <h1
          style={{
            fontSize: "1.8rem",
          }}
        >
          대여 제품 <br /> 자세히 보기
        </h1>
        <GuideDesc>
          제품의 상태를 이미지로만 확인하기 어렵다면?
          <br />
          영상을 통해 자세하게 확인해보세요!
        </GuideDesc>
        <IndexGuide>
          <IndexGuideFocused>{carouselReelsNumber}</IndexGuideFocused>
          <IndexGuideFull>/{reels_list?.length}</IndexGuideFull>
        </IndexGuide>
        <Box sx={{ display: "flex" }}>
          <ButtonBox
            onClick={() => {
              if (carouselReelsNumber > 1) {
                setCarouselReelsNumber(carouselReelsNumber - 1);
              }
            }}
          >
            <ArrowBackIcon />
          </ButtonBox>
          <ButtonBox
            onClick={() => {
              if (carouselReelsNumber < reels_list.length) {
                setCarouselReelsNumber(carouselReelsNumber + 1);
              }
              // if (carouselReelsNumber >= reels_list.length - 2) {
              //   console.log(carouselReelsNumber, reels_list.length - 2);
              //   dispatch(ProductService.getProductReels(carouselReelsNumber));
              // }
            }}
          >
            <ArrowForwardIcon />
          </ButtonBox>
        </Box>
        <MoreBtn>더보기</MoreBtn>
      </GuideWrapper>
      <BottomImgCardWrapper carouselReelsNumber={carouselReelsNumber}>
        {reels_list?.map((p, idx) => {
          return (
            <BottomImgCard
              {...p}
              key={idx}
              idx={idx}
              className={selectedReelsNumber === idx ? "selected" : null}
              _onClick={setSelectedReelsNumber}
              length={reels_list.length}
              carouselReelsNumber={carouselReelsNumber}
              title={p.title}
              boardId={p.boardId}
            ></BottomImgCard>
          );
        })}
      </BottomImgCardWrapper>
    </Wrapper>
  );
};

export default MainBottom;
