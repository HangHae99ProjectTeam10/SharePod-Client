import styled from "styled-components";
import {
  bg_gray_color,
  bg_light_gray_color,
  font_charcoal_gray_color,
  line_light_gray_color,
  main_color,
  secondary_color,
} from "constants/ColorSet";

export const Wrapper = styled.section`
position:relative;
  padding: 40px 165px 80px;
  h3{
    margin 0 0 25px;  
  }
`;

export const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${bg_gray_color};
`;

export const ProductReelsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding-top: 40px;
  width: 1110px;
  margin: 0 auto;
`;

export const ProductReelsCard = styled.div`
  width: 255px;
  height: 370px;
  border-radius: 10px;
  background-color: ${bg_light_gray_color};
`;

export const LoaderWrapper = styled.div`
  position: relative;
  top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

//VideoCard

export const ReelsPlayBoxWrapper = styled.div`
  position: absolute;
  .boardTitle {
    position: fixed;
    width: 350px;
    top: calc(50% - 380px);
    left: calc(50% - 80px);
    transform: translate(-50%, -50%);
    color: #fff;
    text-align: left;
    z-index: 1000;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const FloatedVideoCardBox = styled.div`
  margin-right: 150px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(1, 1, 1, 0.5);
  z-index: 999;
`;

export const FloatedReelsVideoTitleBackground = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: calc(50% - 355px);
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(to bottom, gray, transparent);
  width: 556px;
  height: 71px;
  z-index: 1000;
`;

export const FloatedReelsVideo = styled.video`
  box-sizing: border-box;
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 555px;
  height: 780px;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
`;

export const MoveToDetailButton = styled.button`
  position: fixed;
  bottom: 15%;
  top: calc(50% + 280px);
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: 510px;
  height: 56px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-color: ${main_color};
  cursor: pointer;
`;

export const VideoCardBox = styled.div`
  position: relative;
`;

export const CarouselProfileImgWrapper = styled.div`
  position: absolute;
  left: 6%;
  top: 3%;
  display: flex;
`;

export const CarouselProfileImg = styled.img`
  width: 36px;
  height: 36px;
  object-fit: cover;
  border-radius: 36px;
`;

export const CarouselProfileInfoBox = styled.div`
  margin-left: 10px;
`;
export const CarouselProfileName = styled.span`
  margin: 0;
  font-weight: bold;
  color: white;
`;

export const CarouselProfileLocation = styled.span`
  margin: 0;
  font-size: 0.9rem;
  color: white;
`;
export const MoreBtn = styled.button`
  width: 160px;
  height: 56px;
  border: none;
  border-radius: 28px;
  margin-top: 40px;
  background: ${main_color};
  color: white;
  font-weight: bold;
  font-size: 16px;
  transition: background-color 0.5s;
  cursor: pointer;
  &:hover {
    background: ${secondary_color};
  }
`;

export const ReelsMovePrevButton = styled.button`
  position: fixed;
  top: 50%;
  left: calc(50% - 350px);
  transform: translate(-50%, -50%);
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 1px solid ${line_light_gray_color};
  color: ${font_charcoal_gray_color};
  box-sizing: border-box;
  border-radius: 24px;
  font-size: 21px;
  line-height: 22px;
  text-align: center;
  opacity: 0.5;
  cursor: pointer;
  z-index: 1000;
`;

export const ReelsMoveNextButton = styled.button`
  position: fixed;
  top: 50%;
  left: calc(50% + 350px);
  transform: translate(-50%, -50%);
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 1px solid ${line_light_gray_color};
  color: ${font_charcoal_gray_color};
  box-sizing: border-box;
  border-radius: 24px;
  font-size: 21px;
  line-height: 22px;
  text-align: center;
  opacity: 0.5;
  cursor: pointer;
  z-index: 1000;
`;

export const ReelsVideo = styled.video`
  width: 300px;
  height: 430px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
`;
