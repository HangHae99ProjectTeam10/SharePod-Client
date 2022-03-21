import { makeStyles } from "@mui/styles";
import styled from "styled-components";

export const WithdrawalWrap = styled.div``;

export const HeaderSpace = styled.div`
  width: 920px;
  height: 87px;
  background-color: #f2f3f4;
`;

export const WithdrawalForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 539px;
  padding: 40px 0 0 221px;
  h3 {
    margin-bottom: 40px;
    font-size: 20px;
    font-weight: 500;
    color: #555;
  }
  input {
    width: 300px;
    height: 56px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 8px;
    color: #ddd;
  }
  .userId {
    margin-bottom: 24px;
    font-size: 16px;
    font-weight: 500;
    color: #555;
    input {
      margin-left: 60px;
      padding: 17px 16px;
      font-size: 16px;
      color: #555;
    }
  }
  .password {
    margin-bottom: 24px;
    font-size: 16px;
    font-weight: 500;
    color: #555;
    input {
      margin-left: 101px;
      padding: 17px 16px;
      font-size: 16px;
      color: #555;
    }
  }
  .dropdownBox {
    display: flex;
    margin-bottom: 64px;
    font-size: 16px;
    font-weight: 500;
    color: #555;
    span {
      margin-top: 17px;
    }
  }
  .dropdownOuter {
    width: 300px;
    height: 56px;
    box-sizing: border-box;
    margin-left: 97px;
  }
`;

export const Buttons = styled.div`
  margin-left: 85px;
  button {
    width: 380px;
    height: 56px;
    margin-bottom: 16px;
    border: none;
    border-radius: 28px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }
  .return {
    border: 1px solid #ddd;
    background-color: #fff;
    color: #555;
  }
  .withdrawal {
    border: 1px solid #5f29fa;
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
