import { makeStyles } from "@mui/styles";
import {
  bg_gray_color,
  font_dark_gray_color,
  font_deep_gray_color,
  main_color,
  secondary_color,
} from "constants/ColorSet";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0px 10rem;
`;

export const ProductCategory = styled.div`
  display: flex;
  align-items: center;
  color: ${font_deep_gray_color};
  margin-top: 50px;
  span {
    margin-left: 10px;
  }
`;
export const ProductDetailWrapper = styled.section`
  padding-top: 30px;
  display: flex;
`;

export const ProductDetailImgWrapper = styled.div``;

export const ImgRadioBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 30px;
`;
export const ImgHiddenRadioBtn = styled.input`
  display: none;

  &:checked {
    border: 1px solid black;
  }
`;

export const ImgRadioOption = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;
export const VideoRadioOption = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  object-fit: cover;
  background: ${bg_gray_color};
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${font_dark_gray_color};
`;
export const ProductListWrapper = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 20px;
`;

export const ImgThumbnail = styled.div`
  display: inline-block;
  width: 430px;
  height: 430px;
`;

export const ImgThumbnailVideo = styled.video`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: fill;
  object-fit: cover;
`;

export const ImgThumbnailVideoImg = styled.img`
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  background-size: cover;
  object-fit: cover;
`;

export const ProductInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  width: 100%;
  justify-content: space-between;
`;

export const InfoBoxTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  section {
    width: 90%;
  }
  h2 {
    margin: 0;
  }
  div {
    display: flex;
  }
  .info_top_price_wrapper {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .info_top_price {
    margin: 0;
    font-size: 2rem;
    font-weight: bold;
    color: ${main_color};
  }
  .info_top_unit {
    margin: 0;
    font-size: 0.8rem;
    line-height: 40px;
  }
  .info_top_reaction {
    display: flex;
    align-items: center;
    color: ${font_deep_gray_color};
    margin: 10px 0px;
    span {
      font-size: 0.8rem;
      margin: 0px 20px 0px 5px;
    }
  }
  .info_top_favoritebtn {
    width: 60px;
    height: 60px;
    background: white;
    border-radius: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;
  }
`;

export const InfoBoxBottom = styled.div`
  span {
    font-size: 0.8rem;
    margin: 0px 20px 0px 5px;
  }
  .info_middle_btns {
    display: flex;
    justify-content: center;
    margin: 20px 0px 0px 0px;
    button {
      height: 50px;
      border-radius: 6px;
      border: none;
      font-weight: bold;
      margin-right: 20px;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      cursor: pointer;
    }
    .info_middle_btn_1 {
      background: ${main_color};
      color: white;
      width: 100%;
    }
    .info_middle_btn_2 {
      background: ${secondary_color};
      color: white;
      width: 100%;
    }
  }
`;

export const InfoBoxMiddle = styled.div`

  hr{
    border : 2px solid #4A2FC3;
  }
  .info_bottom_left {
    margin-bottom: 50px;

    .info_bottom_left_title{
      font-weight: bold;
      
    }
    p {
      margin: 0;
    }
    .profile_box{
      display: flex;
      margin-top: 20px;

      .profile_info{
        font-size: 0.8rem;
        color: #777777;
        margin-left: 20px;

        .profile_info_location{
          display: flex;
          align-items: center;
          
        }
      }
    }
    img {
      width: 50px;
      height: 50px;
      border-radius: 50px;
      object-fit: cover;
    }
    }
  }
  .info_bottom_right {
    width: 60%;

  

    .info_bottom_right_title{
        display: inline-block;
        width:100px;
    }
    .info_bottom_right_desc{
        color: ${font_dark_gray_color};
    }
    .info_box {
      margin: 20px 0px;
    }
    .info_bottom_right_tag{
      background: ${bg_gray_color};
      border-radius: 20px;
      padding: 6px 10px;
      margin-right: 10px;
    }
  }
`;
export const ProductDetailDesWrapper = styled.div`
  display: flex;
  jusify-content: center;
  margin-bottom: 100px;

  .desc_box_left {
    width: 100%;
    margin-right: 50px;
  }
  .desc_box_right {
    width: 100%;
    margin-left: 50px;
  }
  p {
    font-size: 1.3rem;
  }
`;

export const useStyles = makeStyles((theme) => ({
  favoriteBtn: {
    color: "#4A2FC3",
  },
}));
