import styled from "styled-components";
import { bg_gray_color, bg_light_gray_color } from "constants/ColorSet";

export const Wrapper = styled.section`
  padding: 40px 165px;
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
`;

export const ProductReelsCard = styled.div`
  width: 255px;
  height: 370px;
  border-radius: 10px;
  background-color: ${bg_light_gray_color};
`;
