import {
  bg_gray_color,
  font_berry_blue_color,
  font_black_color,
  font_dark_gray_color,
  font_light_charcoal_gray_color,
  main_color,
  main_variant_color_2,
} from "constants/ColorSet";
import styled from "styled-components";

export const Wrapper = styled.section`
  width: 1000px;
  height: 1070px;
  margin: 0 auto;
  padding: 20px 164px;
  background-color: #fff;
  h2 {
    font-size: 24px;
    font-weight: 700;
    color: ${font_berry_blue_color};
    margin: 0 0 18px;
  }
`;

export const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${bg_gray_color};
`;

export const ProductInfoWrapper = styled.div`
  padding: 43px 0;
  display: flex;
`;

export const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 16px;
  border-radius: 8px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  .boardTitle {
    margin: 0px 0px 5px;
    font-size: 18px;
    font-wiehgt: 500;
    color: ${font_black_color};
  }
  .boardRegion {
    margin-bottom: 4px;
    font-size: 14px;
    font-weight: 350;
    color: #777;
    svg {
      vertical-align: bottom;
      width: 14px;
      margin-bottom: -3px;
    }
  }
  .dailyRentalFee {
    strong {
      font-size: 16px;
      font-weight: 700;
      color: ${font_dark_gray_color};
    }
  }
`;

export const ProductQualityCertificationWrapper = styled.div``;

export const ProductQualityCertificationHeader = styled.div`
  margin-bottom: 10px;
  span {
    font-size: 20px;
    font-weight: 700;
    color: ${font_light_charcoal_gray_color};
  }
`;

export const ProductQualityCertificationListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  border-top: 2px solid ${main_color};
  padding: 20px 10px;
`;

export const ProductQualityCertificationCard = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 164px;
    height: 164px;
    border-radius: 8px;
    background-color: ${bg_gray_color};
  }
  label {
    margin-bottom: 20px;
    background: #f0f0f0;
    width: 100px;
    height: 100px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #8c8c8c;
    padding: 30px;
    border-radius: 6px;
    overflow: hidden;
  }
`;

export const CertificationImageUploader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #8c8c8c;
  padding: 30px;
  border-radius: 6px;
  p {
    display: inline-block;
    font-size: 0.8rem;
    width: 68px;
  }
`;

export const CertificationImageUploaded = styled.img`
  width: 160px;
  height: 160px;
  cursor: pointer;
  border-radius: 6px;
  object-fit: cover;
`;

export const CertificationImageUploaderInput = styled.input`
  display: none;
`;

export const CertificationImageUploadButton = styled.button`
  width: 164px;
  height: 40px;
  margin-bottom: 10px;
  border-radius: 20px;
  border: none;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  background-color: ${main_variant_color_2};
  cursor: pointer;
`;

export const CertificationImageUploadSuccessButton = styled.button`
  width: 164px;
  height: 40px;
  margin-bottom: 10px;
  border-radius: 20px;
  border: 1px solid ${bg_gray_color};
  font-size: 14px;
  font-weight: 600;
  color: ${font_dark_gray_color};
  background-color: #fff;
  cursor: pointer;
`;

export const CertificationRefuseButton = styled.button`
  width: 164px;
  height: 40px;
  margin-bottom: 10px;
  border-radius: 20px;
  border: 1px solid ${bg_gray_color};
  font-size: 14px;
  font-weight: 600;
  color: ${font_dark_gray_color};
  background-color: #fff;
  cursor: pointer;
`;

export const CertificationConfirmButton = styled.button`
  width: 164px;
  height: 40px;
  margin-bottom: 10px;
  border-radius: 20px;
  border: none;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  background-color: ${main_variant_color_2};
  cursor: pointer;
`;

export const ProductQualityCertificationRequestDate = styled.span`
  margin-left: 10px;
  font-size: 14px;
  font-weight: 700;
  color: ${font_light_charcoal_gray_color};
`;
