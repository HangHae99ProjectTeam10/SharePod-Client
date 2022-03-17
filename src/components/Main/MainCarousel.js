import React from "react";
import { CarouselItem, FullCarousel, Wrapper } from "./MainCarousel.style";

const MainCarousel = () => {
  const items = [
    {
      color: "#a496f8",
    },
    {
      color: "#F7D67E",
    },
    {
      color: "#F19997",
    },
  ];
  return (
    <Wrapper>
      <FullCarousel>
        {items.map((p) => {
          return <CarouselItem key={p.color} color={p.color} />;
        })}
      </FullCarousel>
    </Wrapper>
  );
};

export default MainCarousel;
