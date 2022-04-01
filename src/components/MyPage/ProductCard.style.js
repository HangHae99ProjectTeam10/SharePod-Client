import styled from "styled-components";

export const LikeListCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  h4 {
    width: 237px;
    margin: 0 0 4px;
    font-size: 18px;
    font-weight: 500;
    color: #323232;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const LikeListCardImg = styled.img`
  width: 235px;
  height: 235px;
  margin-bottom: 16px;
  border-radius: 10px;
  object-fit: cover;
`;

export const LikeListMapData = styled.div`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 350;
  color: #777;
  svg {
    vertical-align: bottom;
    width: 14px;
    margin-bottom: -3px;
  }
`;

export const LikeListCardDailyRentalFee = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #323232;
`;

export const LikeListCardModifiedAt = styled.span`
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 14px;
  font-weight: 350;
  color: #777;
`;
