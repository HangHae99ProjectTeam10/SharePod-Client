import { makeStyles } from "@mui/styles";
import {
  bg_gray_color,
  font_charcoal_gray_color,
  font_dark_gray_color,
  Icon_light_gray_color,
  Input_box_disabled_color,
  line_light_gray_color,
  main_color,
} from "constants/ColorSet";
import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fff;
  padding: 39px 30px 80px;
  width: 1000px;
  overflow: hidden;
  h3 {
    font-size: 20px;
    font-weight: 500;
    color: ${font_dark_gray_color};
    margin: 0 0 13px;
  }
`;

export const HorizontalLine = styled.div`
  width: 940px;
  height: 1px;
  background-color: ${bg_gray_color};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 574px;
  padding: 0 190px;
`;

export const Profile = styled.div`
  display: flex;
  position: relative;
  margin: 0 auto 48px;
`;

export const ProfileUploader = styled.label`
  width: 136px;
  height: 136px;
  margin: 48px auto 0;
  div {
    display: inline-block;
    width: 100%;
    height: 100%;
    border-radius: 68px;
    background-size: cover;
    overflow: hidden;
  }
  input {
    opacity: 0;
  }
`;

export const PhotoIconWrapper = styled.label`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 36px;
  height: 36px;
  box-sizing: border-box;
  border: 1px solid ${Icon_light_gray_color};
  border-radius: 18px;
  padding: 5px;
  color: ${Icon_light_gray_color};
  background-color: #fff;
`;

export const NickNameWrapper = styled.div`
   {
    margin-bottom: 24px;
    span {
      font-size: 16px;
      font-weight: 500;
      color: ${font_charcoal_gray_color};
    }
    input {
      width: 350px;
      height: 56px;
      box-sizing: border-box;
      margin-left: 81px;
      border: 1px solid ${line_light_gray_color};
      border-radius: 8px;
      font-size: 16px;
      color: ${font_dark_gray_color};
      padding: 17px 17px 17px 16px;
    }
    input:focus {
      outline: 1px solid ${main_color};
    }
  }
`;

export const UserNameWrapper = styled.div`
   {
    margin-bottom: 24px;
    span {
      font-size: 16px;
      font-weight: 500;
      color: ${font_charcoal_gray_color};
    }
    input {
      width: 350px;
      height: 56px;
      box-sizing: border-box;
      margin-left: 81px;
      border: 1px solid ${line_light_gray_color};
      border-radius: 8px;
      padding: 17px 17px 17px 16px;
      font-size: 16px;
      color: ${font_dark_gray_color};
      background-color: ${Input_box_disabled_color};
      cursor: default;
    }
    input:focus {
      outline: none;
    }
  }
`;

export const MapDataWrapper = styled.div`
  display: flex;
  .boxTitle {
    padding-top: 18px;
  }
  .myMap {
    display: flex;
    margin-left: 43px;
    .seoulCity {
      width: 171px;
      height: 56px;
      margin-right: 10px;
      box-sizing: border-box;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 17px 16px;
      color: ${font_dark_gray_color};
      background-color: ${Input_box_disabled_color};
    }
    div {
      width: 171px;
      padding: 5px;
      font-size: 16px;
      color: ${font_dark_gray_color};
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  margin: 48px 24px 360px 0;
  button {
    width: 230px;
    height: 56px;
    box-sizing: border-box;
    border-radius: 28px;
    border: 1px solid #ddd;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }
  .cancel {
    margin-right: 16px;
    margin-bottom: 16px;
    background-color: #fff;
    color: ${font_charcoal_gray_color};
  }

  .save {
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
