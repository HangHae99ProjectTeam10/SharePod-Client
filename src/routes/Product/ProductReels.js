import PageLoader from "components/common/PageLoader";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { history } from "redux/store";
import ProductService from "services/product";
import {
  CarouselProfileImg,
  CarouselProfileImgWrapper,
  CarouselProfileInfoBox,
  CarouselProfileLocation,
  CarouselProfileName,
  FloatedReelsVideo,
  FloatedReelsVideoTitleBackground,
  FloatedVideoCardBox,
  HorizontalLine,
  LoaderWrapper,
  MoveToDetailButton,
  ProductReelsWrapper,
  ReelsMoveNextButton,
  ReelsMovePrevButton,
  ReelsPlayBoxWrapper,
  ReelsVideo,
  VideoCardBox,
  Wrapper,
} from "./ProductReels.style";

const VideoCard = (props) => {
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
    if (e.nativeEvent.deltaX < -300) {
      plusSelectedReelsNumber();
    } else if (e.nativeEvent.deltaX > 300) {
      minusSelectedReelsNumber();
    }
  };

  return (
    <>
      {className === "selected" && (
        <ReelsPlayBoxWrapper onWheel={carouselWheelAction}>
          <h4 className="boardTitle">{title}</h4>
          <FloatedVideoCardBox idx={idx} onClick={resetSelectedReelsNumber}>
            <FloatedReelsVideoTitleBackground />
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
            ????????? ??????
          </MoveToDetailButton>
        </ReelsPlayBoxWrapper>
      )}
      <VideoCardBox carouselReelsNumber={carouselReelsNumber}>
        <CarouselProfileImgWrapper>
          <CarouselProfileImg src={userImg} alt="" />
          <CarouselProfileInfoBox>
            <CarouselProfileName>{nickName}</CarouselProfileName>
            <CarouselProfileLocation>
              ????????? {boardRegion}
            </CarouselProfileLocation>
          </CarouselProfileInfoBox>
        </CarouselProfileImgWrapper>
        <ReelsVideo onClick={setVideoSelectedReelsNumber}>
          <source src={videoUrl}></source>
        </ReelsVideo>
      </VideoCardBox>
    </>
  );
};

const ProductReels = () => {
  const dispatch = useDispatch();
  const { reels_list } = useSelector(({ product }) => product);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    dispatch(ProductService.getProductReels(count, setIsLoading));
  }, []);

  // Infinity Scroll
  const [selectedReelsNumber, setSelectedReelsNumber] = useState(-1);
  const [target, setTarget] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setIsLoading(false);
  }, [reels_list]);

  useEffect(() => {
    if (selectedReelsNumber >= reels_list?.length && !isLoading) {
      console.log("hi");
      dispatch(ProductService.getProductReels(count, setIsLoading));
    }
  }, [selectedReelsNumber]);

  useEffect(() => {
    if (count !== 0) {
      console.log("hi");
      dispatch(ProductService.getProductReels(count));
    }
  }, [count]);

  const getMoreItem = async () => {
    setIsLoaded(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    dispatch(ProductService.getProductReels(count));
    setCount(count + 1);
    setIsLoaded(false);
  };

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoaded) {
      await getMoreItem();
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  return (
    <Wrapper>
      <h3>?????? ????????? ??????</h3>
      <HorizontalLine />
      <ProductReelsWrapper>
        {reels_list &&
          reels_list.map((p, idx) => {
            return (
              <VideoCard
                {...p}
                key={idx}
                idx={idx}
                className={selectedReelsNumber === idx ? "selected" : null}
                setSelectedReelsNumber={setSelectedReelsNumber}
                length={reels_list.length}
                selectedReelsNumber={selectedReelsNumber}
                title={p.title}
                boardId={p.boardId}
              />
            );
          })}
      </ProductReelsWrapper>
      <LoaderWrapper ref={setTarget} className="Target-Element">
        {isLoaded && <PageLoader />}
      </LoaderWrapper>
    </Wrapper>
  );
};

export default ProductReels;
