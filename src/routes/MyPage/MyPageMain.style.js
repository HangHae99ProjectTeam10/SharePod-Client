import { bg_gray_color, line_light_gray_color } from "constants/ColorSet";
import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 0 0 0 165px;
`;

export const MyPageHeader = styled.div`
  padding: 47px 0 24px;
  border-bottom: 1px solid ${line_light_gray_color};
  h2 {
    font-size: 24px;
    font-weight: 700;
    color: #323232;
  }
`;

export const MyPageContentsField = styled.div`
  display: flex;
`;

export const MyPageSideWrapper = styled.div`
  padding-right: 64px;
`;

export const MyPageButtons = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 22px;
  label {
    width: 190px;
    height: 48px;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 15px 20px;
    font-size: 16px;
    color: #555;
    cursor: pointer;
    svg {
      vertical-align: bottom;
      width: 16px;
      margin-bottom: -3px;
      margin-right: 12px;
    }
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
  width: 100%;
  min-height: 900px;
  background-color: ${bg_gray_color};
`;
