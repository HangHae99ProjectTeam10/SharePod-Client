import {
  bg_gray_color,
  bg_light_gray_color,
  font_black_color,
  font_charcoal_gray_color,
  main_color,
  main_variant_color,
  main_variant_color_2,
} from "constants/ColorSet";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  color: ${font_charcoal_gray_color};
  font-size: 14px;
  font-weight: bold;
  display: flex;
  background-color: #fff;
  align-items: center;
  padding: 20px 10rem;
`;

export const FlexBox = styled.div`
  display: flex;
  cursor: pointer;
`;

export const CategoryText = styled.div`
  margin-left: 10px;
`;

// CategoryNav
export const CategoryNavWrapper = styled.nav`
  position: absolute;
  top: 50px;
  left: 160px;
  display: ${(props) => (props.categoryNavToggle ? "flex" : "none")};
  width: 255px;
  height: 130px;
  box-sizing: border-box;
  background-color: #fff;
  z-index: 2000;
  box-shadow: 0px 4px 36px rgba(0, 0, 0, 0.05);
`;

export const CategoryNavList = styled.ul`
  width: 100%;
  box-sizing: border-box;
  list-style: none;
  padding: 16px 0;
  background-color: #fff;
  li {
    width: 100%;
    padding: 12px 24px;
    box-sizing: border-box;
    font-size: 16px;
    background-color: #fff;
    border: none;
    color: ${font_black_color};
    cursor: pointer;
  }
  li: hover {
    background-color: ${bg_gray_color};
  }
  .checked,
  .checked:hover {
    background-color: ${main_variant_color_2};
    color: #fff;
  }
`;

export const ProductCategoryListItem = styled.li``;

export const ProductRegionListItem = styled.li``;

//CategoryListItemContentWrapper

export const CategoryListItemContentWrapper = styled.div`
  position: absolute;
  top: ${(props) =>
    props.categorySelectRadio === "product" ? "30px" : "75px"};
  left: 255px;
  width: ${(props) =>
    props.categorySelectRadio === "product" ? "300px" : "390px"};
  display: ${(props) => (props.categorySelectRadio ? "flex" : "none")};
  flex-wrap: wrap;
  box-sizing: border-box;
  border-radius: 0 8px 8px 8px;
  box-shadow: 0px 4px 36px rgba(0, 0, 0, 0.05);
  padding: 16px;
  background-color: #fff;
  z-index: 10;
  div {
    width: ${(props) =>
      props.categorySelectRadio === "product" ? "220px" : "175px"};
    box-sizing: border-box;
    border-radius: 8px;
    padding: 12px;
    cursor: pointer;
  }
  div:hover {
    background-color: ${main_color};
    color: #fff;
  }
`;
