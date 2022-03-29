import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductService from "services/product";
import {
  HorizontalLine,
  ProductReelsCard,
  ProductReelsWrapper,
  Wrapper,
} from "./ProductReels.style";

const ProductReels = () => {
  const dispatch = useDispatch();
  const list = [1, 2, 3, 4, 5, 6, 7];
  useEffect(() => {
    dispatch(ProductService.getProductReels());
  }, []);
  return (
    <Wrapper>
      <h3>상품 자세히 보기</h3>
      <HorizontalLine />
      <ProductReelsWrapper>
        {list.map((p, idx) => {
          return <ProductReelsCard key={idx}></ProductReelsCard>;
        })}
      </ProductReelsWrapper>
    </Wrapper>
  );
};

export default ProductReels;
