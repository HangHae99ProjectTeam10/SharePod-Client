import {
  bg_gray_color,
  font_charcoal_gray_color,
  font_deep_gray_color,
  line_light_gray_color,
} from "constants/ColorSet";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding: 40px 0 0;
  background-color: #fff;
  button {
    position: absolute;
    top: 55%;
    transform: translate(-50%, -50%);
    display: inline-block;
    width: 48px;
    height: 48px;
    border: none;
    color: #fff;
    font-weight: 700;
    box-sizing: border-box;
    border-radius: 24px;
    font-size: 21px;
    line-height: 22px;
    text-align: center;
    background-color: rgba(99, 99, 99, 0.5);
    cursor: pointer;
    z-index: 1000;
  }
  .prevButton {
    left: calc(50% - 460px);
  }
  .nextButton {
    left: calc(50% + 460px);
  }
`;

export const MainCarouselBanner = styled.div`
  position: relative;
  width: 920px;
  height: 275px;
  margin: 0px auto;
  background-position: center;
  overflow: hidden;
  overflow-wrap: nowrap;
  cursor: pointer;
`;

export const CarouselItem = styled.div`
  position: absolute;
  top: 0;
  transition-duration: 500ms;
  transition-property: transform;
  width: 920px;
  height: 275px;
  background-image: url(${(props) => props.src});
  background-size: 109%;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  cursor: pointer;
  z-index: 10;
  &.bannerImg1 {
    transform: translateX(${(props) => (-props.bannerNumber + 1) * 930}px);
  }
  &.bannerImg2 {
    transform: translateX(${(props) => (-props.bannerNumber + 2) * 930}px);
  }
  &.bannerImg3 {
    transform: translateX(${(props) => (-props.bannerNumber + 3) * 930}px);
  }
`;

export const BackgroundCover = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 65px;
  background-color: ${bg_gray_color};
  z-index: 1;
`;
