import styled from "styled-components";

export const Wrapper = styled.div`
  overflow: hidden;
  padding: 30px 0px;
`;

export const FullCarousel = styled.div`
  display: flex;
  width: 2400px;
  transform: translate(-26%, 0%);
`;

export const CarouselItem = styled.div`
  background: ${(props) => props.color || "#a496f8"};
  width: 800px;
  height: 235px;
  border-radius: 20px;
  margin: 0px 20px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
`;
