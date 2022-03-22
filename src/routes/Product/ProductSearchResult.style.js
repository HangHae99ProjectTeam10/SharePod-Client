import { font_deep_gray_color } from "constants/ColorSet";
import styled from "styled-components";

export const ProductSearchResultWrap = styled.section`
  width: 1142px;
  margin: 0 auto;
  padding: 74px 0;
  .dropdownWrap {
    width: 390px;
    height: 48px;
    margin: 0 auto 64px;
  }
  .boardTop {
    display: flex;
    justify-content: space-between;
    .boardAmount {
      font-size: 13px;
      color: #8c8c8c;
    }
    .boardFilterButtons {
      display: flex;
      justify-content: end;
      padding-right: 10px;
      width: 300px;
      label,
      span {
        font-size: 13px;
        color: #8c8c8c;
      }
      .checked {
        color: #000;
      }
      label {
        cursor: pointer;
      }
    }
  }
`;
export const RegionSelectWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ProductSearchResultBoard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px 30px;
  margin-top: 11px;
`;

export const ProductCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 260px;
  border-radius: 10px;
  margin: 10px 0px;
  img {
    margin-bottom: 6px;
    object-fit: cover;
    height: 260px;
    width: 260px;
    border-radius: 10px;
  }

  .boardInfo {
    display: flex;
    flex-direction: column;

    . boardInfo_title {
      margin: 5px;
      font-size: 16px;
      padding: 10px 0px;
    }
    .mapData {
      margin-bottom: 4px;
      font-size: 13px;
      color: ${font_deep_gray_color};
      display: flex;
      align-items: center;
    }
    .dailyRentalFee {
      font-size: 11px;

      strong {
        margin-right: 3px;
        font-size: 16px;
        font-weight: 700;
      }
    }
    .time {
      position: absolute;
      bottom: 0;
      right: 0;
      font-size: 12px;
      color: #777;
    }
  }
`;
