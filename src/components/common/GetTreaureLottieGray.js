import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import lottie from "lottie-web";

const GetTreasureLottieGray = () => {
  const likecontainer = useRef();
  useEffect(() => {
    lottie.loadAnimation({
      container: likecontainer.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("constants/heartAnimationGray.json"),
    });
  }, []);
  return (
    <Wrapper>
      <NoMore ref={likecontainer}></NoMore>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const NoMore = styled.div`
  width: 75px;
  height: 75px;
  position: relative;
  transform: translate(33%, -25%);
`;

export default GetTreasureLottieGray;
