import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 40px 0px;
`;
export const Title = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
`;
export const SubTitle = styled.div`
  color: #777777;
  margin: 10px 0px 20px 0px;
`;
export const CategoryCardListBox = styled.div`
  display: flex;
`;
export const CategoryCard = styled.div`
  position: relative;
  margin-right: 20px;
`;
export const CategoryTitle = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  color: #ffffff;
  font-weight: bold;
`;
export const CategoryOverlay = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 20px;
  background: black;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
`;
export const CategoryImg = styled.img`
  opacity: 0.7;
  width: 100%;
  object-fit: cover;
`;
