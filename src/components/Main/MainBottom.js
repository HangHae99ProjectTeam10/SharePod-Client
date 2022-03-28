import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box } from "@mui/system";
import {
  BottomImgCardBox,
  BottomImgCardWrapper,
  ButtonBox,
  ExampleProfileImg,
  ExampleProfileImgWrapper,
  ExampleProfileInfoBox,
  ExampleProfileLocation,
  ExampleProfileName,
  ExampleReelsImg,
  GuideDesc,
  GuideWrapper,
  IndexGuide,
  IndexGuideFocused,
  IndexGuideFull,
  MoreBtn,
  Wrapper,
} from "./MainBottom.style";

/**TODO: 릴스 이미지로 뺴기 */
const BottomImgCard = (props) => {
  return (
    <BottomImgCardBox>
      <ExampleProfileImgWrapper>
        <ExampleProfileImg src={props.profile} alt="" />
        <ExampleProfileInfoBox>
          <ExampleProfileName>{props.name}</ExampleProfileName>
          <ExampleProfileLocation>
            서울시 {props.location}
          </ExampleProfileLocation>
        </ExampleProfileInfoBox>
      </ExampleProfileImgWrapper>
      <ExampleReelsImg src={props.reels} alt="example1" />
    </BottomImgCardBox>
  );
};
const MainBottom = () => {
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
          <IndexGuideFocused>01</IndexGuideFocused>
          <IndexGuideFull>/05</IndexGuideFull>
        </IndexGuide>
        <Box sx={{ display: "flex" }}>
          <ButtonBox>
            <ArrowBackIcon />
          </ButtonBox>
          <ButtonBox>
            <ArrowForwardIcon />
          </ButtonBox>
        </Box>

        <MoreBtn>더보기</MoreBtn>
      </GuideWrapper>
      <BottomImgCardWrapper>
        {exampleData.map((p) => {
          return <BottomImgCard {...p} key={p.profile} />;
        })}
      </BottomImgCardWrapper>
    </Wrapper>
  );
};

export default MainBottom;
