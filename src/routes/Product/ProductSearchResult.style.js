import { makeStyles } from "@mui/styles";
import {
  font_deep_gray_color,
  line_light_gray_color,
} from "constants/ColorSet";
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
  }
`;

export const BoardFilterButtons = styled.div`
  position: relative;
  display: flex;
  justify-content: end;
  padding-right: 10px;
  width: 300px;
  label {
    font-size: 13px;
    color: #8c8c8c;
    cursor: pointer;
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

    .boardInfo_title {
      width: 260px;
      margin: 5px;
      font-size: 18px;
      font-weight: 500;
      padding-top: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .mapData {
      margin-bottom: 4px;
      font-size: 13px;
      color: ${font_deep_gray_color};
      display: flex;
      align-items: center;
    }
    .dailyRentalFee {
      margin: 5px;
      font-size: 11px;

      strong {
        margin-right: 3px;
        font-size: 16px;
        font-weight: 700;
      }
    }
    .time {
      position: absolute;
      bottom: 5px;
      right: 0;
      font-size: 12px;
      color: #777;
    }
  }
`;

export const LoaderWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const useStyles = makeStyles((theme) => ({
  favoriteBtn: {
    position: "absolute",
    right: "3%",
    top: "3%",
    color: "white",
    cursor: "pointer",
  },
}));

// ProductSearchFilter

export const ProductSearchFilterWrapper = styled.div`
  top: 20px;
  left: 75%;
  position: absolute;
  display: ${(props) => (props.searchFilterToggle ? "flex" : "none")};
  flex-direction: column;
  z-index: 999;
  span {
    padding: 10px 15px;
    border: 1px solid ${line_light_gray_color};
    font-size: 14px;
    color: ${font_deep_gray_color};
    background-color: #fff;
    cursor: pointer;
  }
`;
