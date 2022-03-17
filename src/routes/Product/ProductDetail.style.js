import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0px 10rem;
`;
export const ProductDetailWrapper = styled.section`
  padding-top: 70px;
  display: flex;
`;

export const ProductDetailImgWrapper = styled.div`
  display: flex;
  height: 360px;
`;

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
  width: 70px;
  height: 70px;
  border-radius: 10px;
`;
export const VideoRadioOption = styled.video`
  width: 70px;
  height: 70px;
  border-radius: 10px;
`;

export const ImgThumbnail = styled.div`
  display: inline-block;
  width: 450px;
  height: 360px;
`;

export const ImgThumbnailVideo = styled.video`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: fill;
`;

export const ImgThumbnailVideoImg = styled.img`
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  background-size: cover;
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
  h2 {
    margin: 0;
  }
  div {
    display: flex;
  }
  .info_top_price {
    margin: 0;
    font-size: 2rem;
    font-weight: bold;
  }
  .info_top_unit {
    margin: 0;
    font-size: 0.8rem;
    line-height: 40px;
  }
  .info_top_reaction {
    display: flex;
    align-items: center;
    color: #dedede;
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
  }
`;

export const InfoBoxMiddle = styled.div`
  span {
    font-size: 0.8rem;
    margin: 0px 20px 0px 5px;
  }
  .info_middle_btns {
    margin: 20px 0px;
    button {
      width: 165px;
      height: 40px;
      border-radius: 6px;
      border: none;
      font-weight: bold;
      margin-right: 20px;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
    .info_middle_btn_1 {
      background: #4a2fc3;
      color: white;
    }
    .info_middle_btn_2 {
      background: #ffd600;
      color: #4a2fc3;
    }
  }
`;

export const InfoBoxBottom = styled.div`
  display: flex;
  justify-content: space-between;

  hr{
    border : 2px solid #4A2FC3;
  }
  .info_bottom_left {
    width: 30%;

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

    p {
      margin: 0;
    }

    .info_bottom_right_title{
         font-weight: bold;
    }
    .info_box {
      display: flex;
      margin-top : 20px;
      font-size: 0.8rem;
      color: #777777;
      justify-content: space-between;

      div{
        margin-right: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: center;
      }
      .info_box_title{
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 0.9rem;
        justify-content: center;

        p{
          margin-top : 10px;
        }
      }
    }
  }
`;
