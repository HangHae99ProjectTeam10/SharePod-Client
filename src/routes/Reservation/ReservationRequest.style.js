import {
  bg_gray_color,
  font_charcoal_gray_color,
  line_light_gray_color,
  main_variant_color_2,
  purple_heart_color,
} from "constants/ColorSet";
import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100vw;
`;

export const ReservationRequestBox = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding: 40px 164px 192px;
  background-color: #fff;
  h2 {
    margin: 0 0 24px;
    font-size: 24px;
    font-weight: 700;
  }
`;

export const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${bg_gray_color};
`;

export const ReservationRequestWrapper = styled.div`
  display: flex;
  padding: 48px 188px 0 8px;
`;

export const ReservationRequestProductWrapper = styled.div``;

export const ReservationRequestProductImg = styled.img`
  width: 360px;
  height: 360px;
  border-radius: 10px;
  margin-bottom: 18px;
  background-color: #555;
`;

export const ReservationRequestProductInfo = styled.div`
  display: flex;
  width: 360px;
  img {
    width: 76px;
    height: 76px;
    border-radius: 38px;
    background-color: #555;
  }
`;

export const ReservationRequestProductInfoBox = styled.div`
  margin-left: 10px;
`;

export const ReservationForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 130px;
`;

export const ReservationMyNickname = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: ${purple_heart_color};
  input {
    display: block;
    width: 351px;
    height: 56px;
    box-sizing: border-box;
    margin-top: 12px;
    margin-bottom: 24px;
    border: 1px solid ${purple_heart_color};
    border-radius: 8px;
    padding: 17px;
  }
  input:focus {
    outline: none;
  }
`;

export const ReservationRentalStart = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: ${purple_heart_color};
  .datePicker {
    width: 351px;
    height: 56px;
    box-sizing: border-box;
    margin-top: 12px;
    margin-bottom: 24px;
    border: 1px solid ${purple_heart_color};
    border-radius: 8px;
  }
`;

export const ReservationRentalEnd = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: ${purple_heart_color};
  .datePicker {
    width: 351px;
    height: 56px;
    box-sizing: border-box;
    margin-top: 12px;
    margin-bottom: 32px;
    border: 1px solid ${purple_heart_color};
    border-radius: 8px;
  }
`;

export const ReservationCancelButton = styled.button`
  width: 360px;
  height: 56px;
  margin-bottom: 16px;
  box-sizing: border-box;
  border: 1px solid ${line_light_gray_color};
  border-radius: 28px;
  font-size: 16px;
  font-weight: 600;
  color: ${font_charcoal_gray_color};
  background-color: #fff;
  cursor: pointer;
`;

export const ReservationModalWrapper = styled.div`
  width: 360px;
  height: 56px;
  box-sizing: border-box;
  border-radius: 28px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-color: ${main_variant_color_2};
  cursor: pointer;
  button {
    color: #fff;
  }
  button: active {
    background-color: transparent;
  }
`;
