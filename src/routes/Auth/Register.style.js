import { makeStyles } from "@mui/styles";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 0px 25vw;
`;

export const FileUploaderWrapper = styled.div`
  padding: 2rem;
`;
export const FileUploaderTitle = styled.p`
  margin-top: 20px;
  color: #4a2fc3;
`;

export const FileUploaderThumbnail = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 130px;
  cursor: pointer;
`;

export const FileUploaderInput = styled.input`
  display: none;
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 400px;
  padding: 2rem 3rem;
`;

export const FormLabel = styled.label`
  text-align: left;
  display: block;
  margin-bottom: 0.5rem;
  margin-top: 20px;
  color: #4a2fc3;
  font-size: 14px;
`;

export const FormInput = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #4a2fc3;
  padding: 15px;
  margin-bottom: 10px;
  font-size: 14px;
`;

export const FormErrorMsg = styled.p`
  font-size: 0.9rem;
  color: red;
  margin: 0;
  padding: 0;
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
  submitBtn: {
    background: "#4A2FC3",
    width: "100%",
    borderRadius: "8px",
    color: "white",
    textTransform: "uppercase",
    border: "none",
    marginTop: "40px",
    padding: "20px",
    fontSize: "16px",
    fontWeight: "bold",
    letterSpacing: "10px",
  },
  normalBtn: {
    background: "#F3F3F3",
    width: "100%",
    borderRadius: "8px",
    color: "#4A2FC3",
    textTransform: "uppercase",
    border: "none",
    marginTop: "40px",
    padding: "20px",
    fontSize: "16px",
    fontWeight: "bold",
    letterSpacing: "10px",
  },
}));
