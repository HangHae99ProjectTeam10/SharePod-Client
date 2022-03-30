import {
  font_charcoal_gray_color,
  font_gray_color_777,
  line_light_gray_color,
  main_color,
  secondary_color,
} from "constants/ColorSet";
import styled from "styled-components";

export const Wrapper = styled.div`
  background: white;
  padding: 0px 10rem;
  display: flex;
  width: 100vw;
  overflow: hidden;
`;
export const GuideWrapper = styled.div`
  width: 350px;
  padding: 60px 0px;
  h2 {
    font-size: 1.8rem;
  }
`;

export const GuideDesc = styled.div`
  margin-bottom: 40px;
  p {
    margin: 0;
    color: ${font_gray_color_777};
    font-weight: bold;
  }
`;
export const ButtonBox = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 56px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${main_color};
  margin-right: 20px;
  cursor: pointer;
`;
export const IndexGuide = styled.div`
  margin-bottom: 20px;
`;

export const IndexGuideFocused = styled.span`
  font-size: 3rem;
  font-weight: 900;
  color: ${main_color};
`;

export const IndexGuideFull = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: #cccccc;
  margin: 0px 10px;
`;
export const BottomVideoCardWrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 1100px;
  padding: 60px 0px;
  padding-right: 10rem;
  margin-left: 10rem;
`;

//BottomImgCard
export const ReelsPlayBoxWrapper = styled.div`
  position: relative;
  .boardTitle {
    position: fixed;
    top: 10%;
    left: 37%;
    color: #fff;
    z-index: 1000;
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

export const FloatedReelsVideo = styled.video`
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 555px;
  height: 780px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
  source {
  }
`;

export const MoveToDetailButton = styled.button`
  position: fixed;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
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

export const BottomVideoCardBox = styled.div`
  position: relative;
  margin-right: 150px;
  transform: translateX(
    -${(props) => (props.carouselReelsNumber - 1) * 450 - 250}px
  );
  transition-duration: 500ms;
  transition-property: transform;
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
  top: 50vh;
  left: 31%;
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
  top: 50vh;
  right: 31%;
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

export const MainPageReelsVideo = styled.video`
  width: 300px;
  height: 430px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
`;
