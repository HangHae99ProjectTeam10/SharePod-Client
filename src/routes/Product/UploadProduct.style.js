import { makeStyles } from "@mui/styles";
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
export const FormBox = styled.div`
  margin: 40px 0px;
  display: flex;
  .price_unit {
    margin: 0px 20px;
    line-height: 50px;
    font-weight: bold;
  }
`;
export const FormInput = styled.input`
  width: 500px;
  height: 50px;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  padding: 0px 10px;
`;

export const FormErrorMsg = styled.p`
  font-size: 0.9rem;
  color: red;
  margin: 0;
  padding: 0;
  margin-left: 20px;
  line-height: 50px;
`;

export const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 80px 0px;
`;

export const BackBtn = styled.button`
  background: white;
  width: 350px;
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
  background: #4a2fc3;
  width: 350px;
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
  height: 100px;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  padding: 0px 10px;
`;
export const useStyles = makeStyles(() => ({
  selectBox: {
    borderRadius: "8px",
  },
}));
