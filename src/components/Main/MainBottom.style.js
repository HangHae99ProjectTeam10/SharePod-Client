import {
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
`;

export const GuideDesc = styled.div`
  color: ${font_gray_color_777};
  font-weight: bold;
  margin-bottom: 40px;
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
export const BottomImgCardWrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 1100px;
  padding: 60px 0px;
  padding-right: 10rem;
  margin-left: 10rem;
`;

export const FloatedImgCardBox = styled.div`
  margin-right: 150px;
`;

export const BottomImgCardBox = styled.div`
  position: relative;
  margin-right: 150px;
  transform: translateX(-${(props) => (props.carouselReelsNumber - 1) * 450}px);
  transition-duration: 500ms;
  transition-property: transform;
`;

export const FloatedReelsVideo = styled.video`
  width: 300px;
  height: 430px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
`;
export const ExampleProfileImgWrapper = styled.div`
  position: absolute;
  left: 6%;
  top: 3%;
  display: flex;
`;

export const ExampleProfileImg = styled.img`
  width: 36px;
  height: 36px;
  object-fit: cover;
  border-radius: 36px;
`;

export const ExampleProfileInfoBox = styled.div`
  margin-left: 10px;
`;
export const ExampleProfileName = styled.p`
  margin: 0;
  font-weight: bold;
  color: white;
`;

export const ExampleProfileLocation = styled.p`
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

export const ReelsPlayBoxWrapper = styled.div`
  position: relative;
  .boardTitle {
    position: fixed;
    top: 20%;
    left: 28%;
    color: #fff;
    z-index: 1000;
  }
  .reelsVideoCard {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(1, 1, 1, 0.5);
    z-index: 999;
  }

  .reelsVideo {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 30%);
    width: 50vw;
    height: 60vh;
  }
`;

export const ReelsMovePrevButton = styled.button`
  position: fixed;
  top: 50vh;
  left: 18%;
  display: inline-block;
  width: 28px;
  height: 28px;
  border: 1px solid ${line_light_gray_color};
  color: ${main_color};
  box-sizing: border-box;
  border-radius: 14px;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  cursor: pointer;
  z-index: 1000;
`;

export const ReelsMoveNextButton = styled.button`
  position: fixed;
  top: 50vh;
  right: 18%;
  display: inline-block;
  width: 28px;
  height: 28px;
  border: 1px solid ${line_light_gray_color};
  color: ${main_color};
  box-sizing: border-box;
  border-radius: 14px;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  cursor: pointer;
  z-index: 1000;
`;

export const MoveToDetailButton = styled.button`
  position: fixed;
  bottom: 25%;
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

export const MainPageReelsVideo = styled.video`
  width: 300px;
  height: 430px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
`;

export const CardWrapper = styled.div``;
