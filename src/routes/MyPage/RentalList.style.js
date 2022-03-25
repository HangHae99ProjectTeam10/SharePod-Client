import {
  bg_gray_color,
  font_berry_blue_color,
  font_charcoal_gray_color,
  font_cool_gray_color,
  line_light_gray_color,
  main_color,
  main_variant_color,
} from "constants/ColorSet";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 824px;
  padding: 20px 32px;
  background-color: #fff;
  h3 {
    color: ${font_berry_blue_color};
  }
`;

export const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${bg_gray_color};
`;

export const TopButtons = styled.div`
  margin-top: 22px;
  label {
    display: inline-block;
    box-sizing: border-box;
    margin-right: 8px;
    border-radius: 12px;
    padding: 10px 18px;
    font-size: 14px;
    font-weight: 400;
    color: ${font_cool_gray_color};
    cursor: pointer;
  }
  .checked {
    font-weight: 700;
    color: #fff;
    background: ${main_variant_color};
  }
`;

export const StateButtons = styled.div`
  margin: 32px 0 24px;
  label {
    margin-right: 16px;
    font-size: 14px;
    font-weight: 500;
    color: #999;
    cursor: pointer;
  }
  .checked {
    border-bottom: 1px solid #5f29fa;
    color: #5f29fa;
  }
`;

export const RentalCardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 42px 30px;
  padding: 30px 16px 315px;
`;

export const RentalCard = styled.div`
  display: flex;
`;

export const RentalCardImg = styled.img`
  width: 160px;
  height: 160px;
  margin-right: 30px;
  border-radius: 10px;
`;

export const RentalCardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    margin: 0 0 4px;
    font-size: 18px;
    font-weight: 500;
    color: #323232;
  }
`;

export const RentalCardMapData = styled.span`
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 350;
  color: #777;
  svg {
    vertical-align: bottom;
    width: 14px;
    margin-bottom: -3px;
  }
`;

export const RentalCardDate = styled.span`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 350;
  color: #777;
  svg {
    vertical-align: bottom;
    width: 14px;
    margin-bottom: -3px;
  }
`;

export const RentalCardDailyRentalFee = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #777;
  strong {
    font-size: 16px;
    font-weight: 700;
    color: #323232;
  }
`;

export const RentalCardQualityConfirmButton = styled.button`
  width: 164px;
  height: 48px;
  margin-top: 11px;
  border: none;
  border-radius: 8px;
  padding: 16px;
  background-color: #f2f3f4;
  cursor: pointer;
`;

export const NothingPostedWrapper = styled.div`
  margin: auto;
  padding: 146px 200px 400px;
`;

export const NothingPostedInner = styled.div`
  text-align: center;
  p {
    margin-bottom: 16px;
    font-size: 14px;
    color: ${font_charcoal_gray_color};
  }
  button {
    margin-bottom: 16px;
    width: 294px;
    height: 56px;
    border-radius: 28px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    border: none;
    color: #fff;
    background-color: ${main_color};
  }
  .toWriteBoard {
    border: 1px solid ${line_light_gray_color};
    color: ${font_charcoal_gray_color};
    background-color: #fff;
`;
