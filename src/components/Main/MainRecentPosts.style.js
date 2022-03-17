import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 80px 0px;
`;
export const Title = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
`;
export const FlexBox = styled.div`
  display: flex;
`;
export const SubTitle = styled.div`
  color: #777777;
  margin: 10px 0px 20px 0px;
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
  object-fit: cover;
`;

export const PostCardInfoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
export const ProfileInfoWrapper = styled.div`
  position: absolute;
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
  line-height: 90px;
`;
export const ProfileNameText = styled.p`
  color: #777777;
  font-size: 0.9rem;
`;

export const ProductInfoWrapper = styled.div`
  position: absolute;
  top: 8%;
  left: 8%;
`;

export const ProductInfoTitle = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
`;

export const ProductInfoTag = styled.div`
  background: #ffd600;
  border-radius: 20px;
  color: #4a2fc3;
  padding: 8px;
  font-weight: bold;
  font-size: 0.8rem;
  margin-right: 10px;
`;

export const ProductInfoPriceWrapper = styled.div`
  display: flex;
  margin: 5px 0px;
`;
export const ProductInfoPriceMoney = styled.span`
  color: #4a2fc3;
  font-weight: bold;
`;

export const ProductInfoPriceDay = styled.span`
  color: #c6c6c6;
  font-size: 0.9rem;
`;
export const ProductInfoSummary = styled.span`
  margin: 10px 0px;
`;
