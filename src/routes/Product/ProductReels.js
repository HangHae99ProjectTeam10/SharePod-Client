import React from "react";
import {
  HorizontalLine,
  ProductReelsCard,
  ProductReelsWrapper,
  Wrapper,
} from "./ProductReels.style";

const ProductReels = () => {
  const list = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Wrapper>
      <h3>상품 자세히 보기</h3>
      <HorizontalLine />
      <ProductReelsWrapper>
        {list.map((p) => {
          return <ProductReelsCard></ProductReelsCard>;
        })}
      </ProductReelsWrapper>
    </Wrapper>
  );
};

export default ProductReels;
