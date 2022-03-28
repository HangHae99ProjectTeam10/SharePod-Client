import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 80px 0px;
  padding: 0px 10rem;
`;
export const Title = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  margin-right: 10px;
`;
export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const TitleBox = styled.div`
  display: flex;
  margin: 20px 0px;
  align-items: center;
`;
export const SubTitle = styled.div`
  color: #777777;
`;
export const ViewMoreBtn = styled.div`
  margin: 0;
  color: #622efa;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const PostListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-between;
`;
export const PostCardWrapper = styled.div`
  background: white;
  width: 300px;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const PostCardImgWrapper = styled.div`
  overflow: hidden;
  height: 60%;
  position: relative;
`;
export const PostCardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PostCardInfoWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
export const ProfileInfoWrapper = styled.div`
  top: -14%;
  transform: translate(10%, 50%);
  display: flex;
`;
export const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 10px;
  border: 5px solid white;
  margin-right: 10px;
`;
export const ProfileNameInfo = styled.div`
  line-height: 60px;
`;
export const ProfileNameText = styled.p`
  color: #777777;
  font-size: 0.9rem;
`;

export const ProductInfoWrapper = styled.div`
  margin: 20px;
`;

export const ProductInfoTitle = styled.div`
  font-size: 1.1rem;
  color: #323232;
`;
export const ProductInfoLocation = styled.div`
  display: flex;
  margin: 10px 0px;
  color: #999999;
  font-size: 0.9rem;
  align-items: center;
`;
export const ProductInfoTag = styled.div`
  background: #f2f3f8;
  border-radius: 20px;
  color: #777777;
  padding: 8px;
  font-weight: bold;
  font-size: 0.8rem;
  margin-right: 10px;
`;

export const ProductInfoPriceWrapper = styled.div`
  display: flex;
  margin: 5px 0px;
  justify-content: space-between;
`;
export const ProductInfoPriceMoney = styled.span`
  color: #323232;
  font-weight: bold;
`;

export const ProductInfoPriceDay = styled.span`
  color: #c6c6c6;
  font-size: 0.9rem;
`;
export const ProdcutInfoCreatedTitle = styled.div`
  color: #777777;
  font-size: 0.8rem;
`;
export const ProductInfoSummary = styled.span`
  margin: 10px 0px;
`;
