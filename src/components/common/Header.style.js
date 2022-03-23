import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  border: 1px solid #ededed;
  padding: 20px 10rem;
  justify-content: space-between;
`;

export const Logo = styled.img`
  object-fit: contain;
`;
export const SearchInputWrapper = styled.div`
  position: relative;
  width: 40%;
`;
export const SearchInputBox = styled.input`
  height: 40px;
  border-radius: 30px;
  background-color: #f2f3f8;
  padding: 0px 40px;
  box-sizing: border-box;
  width: 100%;
  border: none;
`;

export const FlexBox = styled.div`
  display: flex;
`;

export const Button = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  width: 120px;
  height: 40px;
  background: ${(props) => props.background || "white"};
  border-radius: 20px;
  color: ${(props) => props.color || "white"};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  font-weight: bold;
  font-size: 0.9rem;
  cursor: pointer;
`;
export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  cursor: pointer;
`;
