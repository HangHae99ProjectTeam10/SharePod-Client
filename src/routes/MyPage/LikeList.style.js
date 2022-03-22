import styled from "styled-components";

export const LikeListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 42px 30px;
  width: 824px;
  padding: 39px 32px 296px 30px;
  background-color: #fff;
`;

export const LikeListCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  img {
    width: 235px;
    height: 235px;
    margin-bottom: 16px;
    border-radius: 10px;
  }
  h3 {
    margin: 0 0 4px;
    font-size: 18px;
    font-weight: 500;
    color: #323232;
  }
  .mapData {
    margin-bottom: 8px;
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
    font-size: 16px;
    font-weight: 700;
    color: #323232;
  }
  .modifiedAt {
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 14px;
    font-weight: 350;
    color: #777;
  }
`;
