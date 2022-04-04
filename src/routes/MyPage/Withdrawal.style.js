import { makeStyles } from "@mui/styles";
import {
  bg_gray_color,
  font_berry_blue_color,
  font_black_color,
  font_charcoal_gray_color,
  font_light_gray_color,
  line_light_gray_color,
  main_color,
} from "constants/ColorSet";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1000px;
  height: 626px;
  box-sizing: border-box;
  background-color: #fff;
  padding: 20px 32px 55px;
  h3 {
    margin-bottom: 14px;
    font-size: 18px;
    font-weight: 500;
    color: ${font_berry_blue_color};
  }
`;

export const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${bg_gray_color};
`;

export const WithdrawalForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 539px;
  padding: 40px 0 0 221px;
  h4 {
    margin-bottom: 62px;
    font-size: 20px;
    font-weight: 500;
    color: ${font_charcoal_gray_color};
    text-align: center;
  }
`;

export const WithdrawalUserName = styled.label`
  margin-bottom: 24px;
  font-size: 16px;
  font-weight: 500;
  input {
    box-sizing: border-box;
    margin-left: 50px;
    border: 1px solid ${line_light_gray_color};
    border-radius: 8px;
    padding: 17px 16px;
    font-size: 16px;
    color: ${font_light_gray_color};
    width: 380px;
    height: 56px;
    background-color: ${bg_gray_color};
  }
  input:focus {
    outline: none;
  }
`;

export const WithdrawalPassword = styled.label`
  margin-bottom: 24px;
  font-size: 16px;
  font-weight: 500;
  input {
    margin-left: 37px;
    padding: 17px 16px;
    font-size: 16px;
    color: ${font_black_color};
    width: 380px;
    height: 56px;
    box-sizing: border-box;
    border: 1px solid ${line_light_gray_color};
    border-radius: 8px;
  }
`;

export const WithdrawalReason = styled.div`
  display: flex;
  margin-bottom: 89px;
  font-size: 16px;
  font-weight: 500;
  color: ${font_charcoal_gray_color};
  span {
    margin-top: 17px;
  }
  .dropdownOuter {
    height: 56px;
    box-sizing: border-box;
    margin-left: 33px;
    div {
      width: 380px;
      border-radius: 8px;
    }
  }
`;

export const Buttons = styled.div`
  button {
    width: 255px;
    height: 56px;
    border: none;
    border-radius: 28px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }
  .return {
    border: 1px solid ${line_light_gray_color};
    background-color: #fff;
    color: ${font_charcoal_gray_color};
    margin-right: 16px;
  }
  .withdrawal {
    border: 1px solid ${main_color};
    background-color: ${main_color};
    color: #fff;
  }
`;

export const useStyles = makeStyles(() => ({
  selectCity: {
    width: "100%",
    border: "1px solid #4A2FC3 ",
    marginRight: "10px",
  },
  selectSmCity: {
    width: "100%",
    border: "1px solid #4A2FC3 ",
    marginLeft: "10px",
  },
}));
