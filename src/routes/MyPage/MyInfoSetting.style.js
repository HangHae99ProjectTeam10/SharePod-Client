import { bg_gray_color } from "constants/ColorSet";
import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 0px 165px;
`;

export const MyPageHeader = styled.div`
  padding: 54px 0 24px;
  border-bottom: 1px solid #ededed;
  h2 {
    font-size: 24px;
    font-weight: 700;
    color: #323232;
  }
`;

export const MyPageContentsField = styled.div`
  display: flex;
  padding-top: 40px;
`;

export const MyPageButtons = styled.div`
  display: flex;
  flex-direction: column;
  label {
    width: 160px;
    height: 48px;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 9px 16px;
    font-size: 16px;
    color: #555;
    cursor: pointer;
  }
  .checked {
    background-color: #632efa;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
  }
`;

export const SelectedContent = styled.div`
  padding: 25px 165px 215px 31px;
  background-color: ${bg_gray_color};
`;
