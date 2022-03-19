import { makeStyles } from "@mui/styles";
import styled from "styled-components";

export const UploadProdcutWrap = styled.section`
  display: flex;
  flex-direction: column;
  padding: 40px 165px 253px;
  h2 {
    font-size: 24px;
    font-weight: 700;
  }
  button {
    width: 349px;
    height: 70px;
    border: none;
    margin-left: auto;
    border-radius: 8px;
    padding: 26px 120px;
    font-size: 24px;
    font-weight: 700;
    line-height: 26px;
    color: #fff;
    cursor: pointer;
    background-color: #8c8c8c;
  }
`;

export const ProductImgaeField = styled.div`
  display: flex;
  margin-bottom: 40px;
  span {
    display: inline-block;
    font-size: 20px;
    font-weight: 700;
    color: #777;
  }
`;

export const ImageBox = styled.div`
  display: flex;
  width: 730px;
  gap: 30px;
  margin-left: 41px;
`;

export const ContentUploader = styled.label`
  width: 160px;
  height: 160px;

  div,
  video {
    display: inline-block;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-size: cover;
    border-radius: 5px;
    background-color: #777;
  }
  input {
    opacity: 0;
  }
`;

export const Form = styled.form``;

export const Label = styled.label`
  display: flex;
  font-size: 20px;
  font-weight: 700;
  color: #777;
  margin-bottom: 40px;
  .title {
    width: 729px;
    margin-left: 155px;
    padding: 17px 16px;
    font-size: 16px;
  }
  .category {
    margin-left: 117px;
  }
  .mapSpan {
    margin: 0 30px 0 116px;
    color: #c4c4c4;
    font-size: 16px;
    font-weight: 700;
    padding: 17px 18px;
    width: 160px;
    border: 1px solid #c4c4c4;
    border-radius: 8px;
  }
  .mapData {
    margin-left: 115px;
    .select {
      margin-right: 8px;
    }
  }
  .quality {
    margin-left: 155px;
  }

  .dailyrentalfee {
    width: 254px;
    height: 56px;
    margin-left: 134px;
  }
  .dayBy {
    margin-left: 12px;
    line-height: 60px;
  }

  textarea {
    width: 920px;
    height: 180px;
    font-size: 16px;
    margin-left: 153px;
    padding: 23px 10px;
    resize: none;
  }

  .amount {
    margin: 0 12px 0 154px;
    width: 254px;
    height: 56px;
    font-size: 16px;
  }
  .amountSpan {
    line-height: 60px;
  }
`;

export const Input = styled.input`
  border-radius: 8px;
  border: 1px solid #c4c4c4;
`;

export const Tags = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #777;
  margin-bottom: 36px;
  span {
    color: #8c8c8c;
    font-size: 14px;
    weight: 400;
    padding: 6px 13px;
    border-radius: 20px;
    background-color: #ededed;
  }
  .mapdataTag {
    margin-left: 116px;
  }
  .categoryTag {
    margin-left: 12px;
  }
`;

export const FormNormalBtn = styled.button``;

export const useStyles = makeStyles(() => ({
  selectCity: {
    border: "1px solid #4A2FC3 ",
    marginRight: "10px",
  },
  selectSmCity: {
    border: "1px solid #4A2FC3 ",
    marginLeft: "10px",
  },
}));
