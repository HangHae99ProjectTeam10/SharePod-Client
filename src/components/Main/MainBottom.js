import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box } from "@mui/system";
import {
  BottomVideoCardBox,
  BottomVideoCardWrapper,
  ButtonBox,
  CarouselProfileImg,
  CarouselProfileImgWrapper,
  CarouselProfileInfoBox,
  CarouselProfileLocation,
  CarouselProfileName,
  FloatedReelsVideo,
  FloatedVideoCardBox,
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

const BottomVideoCard = (props) => {
  const {
    title,
    idx,
    setSelectedReelsNumber,
    videoUrl,
    length,
    boardId,
    carouselReelsNumber,
    className,
    userImg,
    nickName,
    boardRegion,
  } = props;

  const resetSelectedReelsNumber = () => {
    setSelectedReelsNumber(-1);
  };

  const plusSelectedReelsNumber = () => {
    if (idx < length - 1) {
      setSelectedReelsNumber((selectedReelsNumber) => selectedReelsNumber + 1);
    }
  };

  const minusSelectedReelsNumber = () => {
    if (idx > 0) {
      setSelectedReelsNumber((selectedReelsNumber) => selectedReelsNumber - 1);
    }
  };

  const setVideoSelectedReelsNumber = () => {
    setSelectedReelsNumber(idx);
  };

  const moveToDetailPage = () => {
    history.push(`/product/product-detail/${boardId}`);
  };

  const carouselWheelAction = (e) => {
    if (e.nativeEvent.deltaX > 300) {
      plusSelectedReelsNumber();
    } else if (e.nativeEvent.deltaX < -300) {
      minusSelectedReelsNumber();
    }
  };

  return (
    <>
      {className === "selected" && (
        <ReelsPlayBoxWrapper onWheel={carouselWheelAction}>
          <h4 className="boardTitle">{title}</h4>
          <FloatedVideoCardBox idx={idx} onClick={resetSelectedReelsNumber}>
            <FloatedReelsVideo
              id="autoplay"
              controls
              autoPlay
              muted
              className="reelsVideo"
              onEnded={plusSelectedReelsNumber}
            >
              <source src={videoUrl}></source>
            </FloatedReelsVideo>
          </FloatedVideoCardBox>
          <ReelsMovePrevButton
            className="prev"
            onClick={minusSelectedReelsNumber}
          >
            {"<"}
          </ReelsMovePrevButton>
          <ReelsMoveNextButton
            className="next"
            onClick={plusSelectedReelsNumber}
          >
            {">"}
          </ReelsMoveNextButton>
          <MoveToDetailButton onClick={moveToDetailPage}>
            자세히 보기
          </MoveToDetailButton>
        </ReelsPlayBoxWrapper>
      )}
      <BottomVideoCardBox carouselReelsNumber={carouselReelsNumber}>
        <CarouselProfileImgWrapper>
          <CarouselProfileImg src={userImg} alt="" />
          <CarouselProfileInfoBox>
            <CarouselProfileName>{nickName}</CarouselProfileName>
            <CarouselProfileLocation>
              서울시 {boardRegion}
            </CarouselProfileLocation>
          </CarouselProfileInfoBox>
        </CarouselProfileImgWrapper>
        <MainPageReelsVideo onClick={setVideoSelectedReelsNumber}>
          <source src={videoUrl}></source>
        </MainPageReelsVideo>
      </BottomVideoCardBox>
    </>
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

  const plusCarouselReelsNumber = () => {
    if (carouselReelsNumber > 1) {
      setCarouselReelsNumber(carouselReelsNumber - 1);
    }
  };

  const minusCarouselReelsNumber = () => {
    if (carouselReelsNumber < reels_list.length) {
      setCarouselReelsNumber(carouselReelsNumber + 1);
    }
  };

  const moveToReelsPage = () => {
    history.push("/product/product-reels");
  };

  const carouselWheelAction = (e) => {
    if (e.nativeEvent.deltaX > 300) {
      plusCarouselReelsNumber();
    } else if (e.nativeEvent.deltaX < -300) {
      minusCarouselReelsNumber();
    }
  };

  return (
    <Wrapper>
      <GuideWrapper>
        <h2>
          대여 제품 <br /> 자세히 보기
        </h2>
        <GuideDesc>
          <p>제품의 상태를 이미지로만 확인하기 어렵다면?</p>
          <p>영상을 통해 자세하게 확인해보세요!</p>
        </GuideDesc>
        <IndexGuide>
          <IndexGuideFocused>{carouselReelsNumber}</IndexGuideFocused>
          <IndexGuideFull>/{reels_list?.length}</IndexGuideFull>
        </IndexGuide>
        <Box sx={{ display: "flex" }}>
          <ButtonBox onClick={plusCarouselReelsNumber}>
            <ArrowBackIcon />
          </ButtonBox>
          <ButtonBox onClick={minusCarouselReelsNumber}>
            <ArrowForwardIcon />
          </ButtonBox>
        </Box>
        <MoreBtn onClick={moveToReelsPage}>더보기</MoreBtn>
      </GuideWrapper>
      <BottomVideoCardWrapper onWheel={carouselWheelAction}>
        {reels_list?.map((p, idx) => {
          return (
            <BottomVideoCard
              {...p}
              key={idx}
              idx={idx}
              className={selectedReelsNumber === idx ? "selected" : null}
              setSelectedReelsNumber={setSelectedReelsNumber}
              length={reels_list.length}
              carouselReelsNumber={carouselReelsNumber}
              title={p.title}
              boardId={p.boardId}
            />
          );
        })}
      </BottomVideoCardWrapper>
    </Wrapper>
  );
};

export default MainBottom;
