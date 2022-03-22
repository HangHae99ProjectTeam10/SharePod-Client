import {
  bg_light_gray_color,
  font_black_color,
  font_charcoal_gray_color,
  font_dark_gray_color,
  font_light_charcoal_gray_color,
  line_light_gray_color,
  main_color,
} from "constants/ColorSet";
import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 25px 31px;
  padding: 39px 30px;
  background-color: #fff;
`;

export const MyInfoWrapper = styled.div`
  display: flex;
  border: 1px solid ${line_light_gray_color};
  padding: 32px 62px;
  .textInfoBox {
  }
`;

export const ProfileImg = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 57px;
  border-radius: 40px;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const TextInfoWrapper = styled.div`
  margin-top: 13px;
`;

export const MyNickName = styled.span`
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  color: ${font_dark_gray_color};
`;

export const TextInfoDataWrapper = styled.div`
  margin-top: 5px;
  span {
    font-size: 14px;
    color: ${font_dark_gray_color};
    strong {
      margin: 0 24px 0 8px;
      font-size: 14px;
      font-weight: 400;
      color: ${main_color};
    }
  }
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const RadioButtonWrapper = styled.div`
  label {
    display: inline-block;
    width: 200px;
    height: 54px;
    box-sizing: border-box;
    border: 1px solid ${line_light_gray_color};
    padding: 15px 0;
    text-align: center;
    background-color: ${bg_light_gray_color};
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
  }
  .checked {
    border-bottom: 2px solid ${main_color};
    color: ${main_color};
    background-color: #fff;
  }
`;

export const ToWritePageButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${font_charcoal_gray_color};
  cursor: pointer;
`;

export const ContentWrapper = styled.div`
  border-top: 1px solid ${line_light_gray_color};
`;

export const MyProductListBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  .productListBoxInner {
    display: flex;
    flex-direction: column;
  }
`;

export const MyProductCardWrapper = styled.div`
  display: flex;
  padding: 20px 30px;
  .MyProductCard_ProductInfoBox_ButtonsBox {
    margin-top: 64px;
    button {
      width: 255px;
      height: 56px;
      box-sizing: border-box;
      margin-right: 28px;
      border-radius: 28px;
      cursor: pointer;
    }
    .edit {
      border: 1px solid #ddd;
      color: #555;
      background-color: #fff;
    }
    .confirm {
      border: none;
      color: #fff;
      background-color: #632efa;
    }
  }
`;

export const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  svg {
    vertical-align: bottom;
    width: 14px;
    margin-bottom: -3px;
  }
`;

export const ProductTitle = styled.h4`
  margin: 0 0 5px;
  font-size: 18px;
  font-weight: 500;
  color: ${font_black_color};
`;

export const ProductMapData = styled.span`
  margin-bottom: 5px;
  font-size: 14px;
  color: ${font_light_charcoal_gray_color};
`;

export const ProductDailyRentalFee = styled.span`
  font-size: 12px;
  color: ${font_light_charcoal_gray_color};
  strong {
    font-size: 16px;
    font-weight: 700;
    color: ${font_dark_gray_color};
  }
`;

export const MoreVertButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const ServicePreparingWrapper = styled.div`
  padding: 272px 200px;
`;

export const ServicePreparingInner = styled.div`
  text-align: center;
  h4 {
    font-size: 24px;
    font-weight: 700;
    color: ${font_charcoal_gray_color};
  }
  p {
  }
`;

export const Logo = styled.div``;
export const ProductImg = styled.img`
  width: 200px;
  height: 200px;
  margin-right: 26px;
  border-radius: 8px;
`;
