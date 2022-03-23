import { makeStyles } from "@mui/styles";
import { font_dark_gray_color, main_color } from "constants/ColorSet";
import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 20px 10rem;
`;
export const FormWrapper = styled.div`
  padding: 40px 0px;
`;
export const ProductImgaeField = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

export const FormLabel = styled.span`
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
  color: #3e3e3e;
  width: 200px;
  span {
    color: red;
  }
`;

export const ProductImageUploader = styled.div`
  background: #f0f0f0;
  width: 100px;
  height: 100px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #8c8c8c;
  padding: 30px;
  border-radius: 6px;
  p {
    font-size: 0.8rem;
  }
`;

export const ProductImageUploaded = styled.img`
  width: 160px;
  height: 160px;
  cursor: pointer;
  border-radius: 6px;
  object-fit: cover;
`;
export const ProductVideoUploaded = styled.video`
  width: 160px;
  height: 160px;
  cursor: pointer;
  border-radius: 6px;
  object-fit: cover;
`;

export const ProductImageUploaderInput = styled.input`
  display: none;
`;

export const ImgUploadGuide = styled.pre`
  padding: 0px 200px;
  color: ${main_color};
`;
export const FormBoxWrapper = styled.div`
  margin: 40px 0px;
`;
export const FormBox = styled.div`
  // margin: 40px 0px;
  display: flex;
  .title {
    margin: 0px 20px;
    line-height: 50px;
    color: ${font_dark_gray_color};
  }
  .price_unit {
    margin: 0px 20px;
    line-height: 50px;
    font-weight: bold;
  }
  .contents {
    display: flex;
    justify-content: center;
    align-items: end;
    margin: 0px 20px;
    color: ${font_dark_gray_color};
  }
`;
export const FormInput = styled.input`
  height: 50px;
  border: 1px solid #c4c4c4;
  border-radius: 6px;
  padding: 0px 10px;
  width: ${(props) => props.width || "500px"};
`;

export const FormErrorMsg = styled.p`
  font-size: 0.8rem;
  color: red;
  margin: 0;
  padding: 0;
  margin-left: 200px;
  line-height: 50px;
`;

export const BtnBox = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  margin: 80px 0px;
`;

export const BackBtn = styled.button`
  background: white;
  width: 200px;
  height: 50px;
  border-radius: 50px;
  color: #555555;
  border: 1px solid #f0f0f0;
  font-weight: bold;
  margin-right: 20px;
  cursor: pointer;
  transition: background-color 0.5s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const SubmitBtn = styled.button`
  background: ${main_color};
  width: 200px;
  height: 50px;
  border-radius: 50px;
  color: white;
  border: 1px solid #f0f0f0;
  font-weight: bold;
  margin-right: 20px;
  cursor: pointer;
  transition: background-color 0.5s;
  &:hover {
    background-color: #ffc34a;
  }
`;

export const FormTextArea = styled.textarea`
  width: 500px;
  height: 200px;
  border: 1px solid #c4c4c4;
  border-radius: 6px;
  padding: 10px;
`;
export const useStyles = makeStyles(() => ({
  selectBox: {
    borderRadius: "8px",
  },
}));
