import {
  bg_gray_color,
  bg_light_gray_color,
  font_anthracite_gray_color,
  font_charcoal_gray_color,
  font_dark_gray_color,
  font_deep_black_color,
  font_deep_gray_color,
  line_light_gray_color,
  line_purple_color,
  main_color,
  main_variant_color_2,
  suva_gray_color,
} from "constants/ColorSet";
import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100vw;
`;

export const ReservationConfirmBox = styled.div`
  width: 1110px;
  margin: 0 auto;
  padding: 40px 165px 192px;
  background-color: #fff;
  h2 {
    margin: 0 0 24px;
    font-size: 24px;
    font-weight: 700;
    color: ${font_anthracite_gray_color};
  }
`;

export const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${bg_gray_color};
`;

export const ReservationConfirmWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 48px 188px 0 8px;
`;

export const ReservationConfirmHeader = styled.div`
  margin-bottom: 16px;
  p {
    margin: 0;
    font-size: 13px;
    font-weight: 500;
    color: ${suva_gray_color};
    strong {
      color: ${main_variant_color_2};
    }
  }
`;

export const ReservationConfirmListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReservationConfirmCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 40px;
  border-top: 2px solid ${line_purple_color};
  border-bottom: 1px solid ${line_light_gray_color};
`;

export const ReservationConfirmCardInfoTable = styled.div``;

export const ReservationConfirmCardInfoTableHeader = styled.div`
  display: flex;
  border-bottom: 1px solid ${line_light_gray_color};
  overflow: hidden;
  div {
    box-sizing: border-box;
    border-right: 1px solid ${line_light_gray_color};
    padding: 13px 0;
    font-size: 16px;
    font-weight: 500;
    color: ${main_color};
    text-align: center;
  }
  .cardNumberHeader {
    width: 64px;
  }
  .productInfoHeader {
    width: 408px;
  }
  .partnerInfoHeader {
    width: 284px;
  }
`;

export const ReservationConfirmCardInfoTableBody = styled.div`
  display: flex;
`;

export const ReservationConfirmCardNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  box-sizing: border-box;
  border-right: 1px solid ${line_light_gray_color};
  font-size: 16px;
  color: ${font_deep_gray_color};
`;

export const ReservationConfirmCardInfoContents = styled.div`
  display: flex;
  align-items: center;
  width: 408px;
  box-sizing: border-box;
  border-right: 1px solid ${line_light_gray_color};
  padding: 66px 28px 69px;
  overflow: hidden;
  img {
    width: 118px;
    height: 118px;
    margin-right: 24px;
    border-radius: 10px;
  }
  span {
    font-size: 16px;
    color: ${font_dark_gray_color};
  }
`;

export const ReservationConfirmCardRequestInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 284px;
  border-right: 1px solid ${line_light_gray_color};
  padding: 15px 0;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    .reservationRequestInfoTitle {
      margin-bottom: 5px;
      font-size: 12px;
      color: ${font_deep_gray_color};
    }
    .reservationRequestInfoContent {
      font-size: 16px;
      color: ${font_dark_gray_color};
    }
  }
`;

export const ReservationConfirmButtonWrapper = styled.div`
  width: 350px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${bg_light_gray_color};
  p {
    font-size: 18px;
    font-weight: 400;
    color: ${font_deep_black_color};
    margin-bottom: 30px;
    strong {
      font-weight: 700;
    }
  }
  div {
    display: flex;
    align-items: center;
    width: 285px;
    height: 56px;
    border-radius: 28px;
    overflow: hidden;
    button {
      background: none;
      font-size: 16px;
      font-weight: 600;
    }
    button:hover {
      background: none;
    }
  }
  .reservationRefuse {
    margin-bottom: 16px;
    border: 1px solid ${line_light_gray_color};
    background-color: #fff;
    button {
      color: ${font_charcoal_gray_color};
    }
  }
  .reservationConfirm {
    border: 1px solid ${main_variant_color_2};
    background-color: ${main_variant_color_2};
    button {
      color: #fff;
    }
  }
`;

export const ReservationConfirmNothingWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid ${line_light_gray_color};
  padding: 300px;
  text-align: center;
  p {
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 500;
  }
  button {
    width: 360px;
    height: 56px;
    border: none;
    border-radius: 28px;
    background-color: ${main_color};
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
  }
`;
