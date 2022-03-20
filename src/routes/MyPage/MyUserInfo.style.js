import { makeStyles } from "@mui/styles";
import styled from "styled-components";

export const MyUserInfoWrap = styled.div``;

export const HeaderSpace = styled.div`
  width: 940px;
  height: 154px;
  background-color: #f2f3f4;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 574px;
  padding: 0 190px;

  .idBox,
  .nicknameBox,
  .mapdataBox {
    margin-bottom: 24px;
    span {
      font-size: 16px;
      font-weight: 500;
      color: #555;
    }
    input {
      width: 380px;
      height: 56px;
      box-sizing: border-box;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 17px 17px 17px 16px;
    }
  }
  .idBox {
    input {
      margin-left: 50px;
    }
  }
  .nicknameBox {
    input {
      margin-left: 107px;
    }
  }
  .mapdataBox {
    display: flex;
    .boxTitle {
      padding-top: 18px;
    }
    .myMap {
      display: flex;
      margin-left: 64px;
      span {
        width: 186px;
        height: 56px;
        margin-right: 8px;
        box-sizing: border-box;
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 17px 16px;
      }
      .dropdownOutter {
        width: 189px;
        height: 56px;
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  position: relative;
  width: 540px;
  margin: 0 auto 48px;
  .userTextInfo {
    display: flex;
    flex-direction: column;
    margin-top: 13px;
    .nickname {
      font-size: 24px;
      font-weight: 700;
      color: #555;
    }
    .mapdata {
      font-size: 16px;
      color: #555;
    }
  }
`;

export const ProfileUploader = styled.label`
  position: relative;
  top: -32px;
  width: 136px;
  height: 136px;
  margin-right: 24px;

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

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  margin: 48px 24px 360px auto;
  button {
    width: 380px;
    height: 56px;
    box-sizing: border-box;
    border-radius: 28px;
    border: 1px solid #ddd;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }
  .cancel {
    margin-bottom: 16px;
    background-color: #fff;
    color: #555;
  }

  .save {
    background-color: #5f29fa;
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
