import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 1000px;
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
  justify-content: space-between;
  margin-top: 30px;
`;
export const CategoryCard = styled.div`
  width: 95px;
  text-align: center;
  cursor: pointer;
`;
export const CategoryTitle = styled.div`
  width: 100%;
  color: #555555;
  font-size: 0.9rem;
`;
export const CategoryOverlay = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 130px;
  background: black;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
`;
export const CategoryImg = styled.img`
  display: inline-block;
  width: 72px;
  height: 72px;
  border-radius: 72px;
  object-fit: cover;
`;
