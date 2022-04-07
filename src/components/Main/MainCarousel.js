import React, { useState } from "react";
import { history } from "redux/store";
import {
  BackgroundCover,
  CarouselItem,
  MainCarouselBanner,
  Wrapper,
} from "./MainCarousel.style";

const MainCarousel = () => {
  const [bannerNumber, setBannerNumber] = useState(1);
  const bannerButtonAction = (e) => {
    if (e.target.className === "prevButton") {
      if (bannerNumber > 1) {
        setBannerNumber((bannerNumber) => bannerNumber - 1);
      }
    } else {
      if (bannerNumber < 3) {
        setBannerNumber((bannerNumber) => bannerNumber + 1);
      }
    }
    console.log(bannerNumber);
  };

  const carouselWheelAction = (e) => {
    if (e.nativeEvent.deltaX <= -200) {
      if (bannerNumber < 3) {
        setBannerNumber((bannerNumber) => bannerNumber + 1);
      }
    } else if (e.nativeEvent.deltaX >= 200) {
      if (bannerNumber > 1) {
        setBannerNumber((bannerNumber) => bannerNumber - 1);
      }
    }
  };

  return (
    <Wrapper>
      <MainCarouselBanner onWheel={carouselWheelAction}>
        <CarouselItem
          className="bannerImg1"
          src="/event.png"
          bannerNumber={bannerNumber}
          onClick={() => {
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSdpqAb33vUBRQgDANuilDc-keWEZR0OsKdUX_TfhZYszg14ig/viewform"
            );
          }}
        />
        <CarouselItem
          className="bannerImg2"
          src="/reels.png"
          onClick={() => history.push("/product/product-reels")}
          bannerNumber={bannerNumber}
        />
        <CarouselItem
          className="bannerImg3"
          src="/share.png"
          onClick={() => history.push("/product/upload-product")}
          bannerNumber={bannerNumber}
        />
      </MainCarouselBanner>
      <button className="prevButton" onClick={bannerButtonAction}>
        {"<"}
      </button>
      <button className="nextButton" onClick={bannerButtonAction}>
        {">"}
      </button>
      <BackgroundCover />
    </Wrapper>
  );
};

export default MainCarousel;
