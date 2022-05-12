import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import lottie from "lottie-web";

const GetTreasureLottie = () => {
  const likecontainer = useRef();
  useEffect(() => {
    lottie.loadAnimation({
      container: likecontainer.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("constants/heartAnimation.json"),
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
  height:75px;
  margin 0 auto;
  position:relative;
`;

export default GetTreasureLottie;
