import React from "react";
import styled from "styled-components";
import MainBottom from "../../components/MainBottom";
import MainCarousel from "../../components/MainCarousel";
import MainCategory from "../../components/MainCategory";
import MainQuickCategories from "../../components/MainQuickCategories";
import MainRecentPosts from "../../components/MainRecentPosts";

//  <div>
//               <div>삼성전자 공기청정기 필요하신 분!!</div>
//               <div>30,000원</div>
//               <div>1일 기준</div>
//               <div>공기청정기 1회 사용했습니다. 필요하신 분 연락주세요.</div>
//               <div>#디지털기기</div>
//               <div>#강남구</div>
//             </div>
const MainPage = () => {
  return (
    <MainPageWrap>
      <MainCategory />
      <MainCarousel />
      <MainQuickCategories />
      <MainRecentPosts />
      <MainBottom />
    </MainPageWrap>
  );
};

const MainPageWrap = styled.section`
  padding: 0px 160px;
`;

const CategoriesBox = styled.div`
  h2 {
    font-size: 20px;
  }
  p {
    font-size: 14px;
    color: #777;
  }
`;

const Inner = styled.div`
  display: flex;
`;

const CategoryButton = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 24px;
  button {
    width: 72px;
    height: 72px;
    border-radius: 36px;
    border: none;
    cursor: pointer;
  }
  span {
    font-size: 14px;
    white-space: nowrap;
    text-align: center;
    margin-top: 8px;
  }
`;

const RecentBoardBox = styled.div`
  margin-top: 40px;
  h2 {
    font-size: 20px;
  }
  p {
    font-size: 14px;
    color: #777;
    margin-bottom: 24px;
  }
`;

const BoxInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

const BoardCard = styled.div`
  padding: 12px 17px 14px;
  border-radius: 16px;
  background-color: #c4c4c4;
`;

const UserInfo = styled.div`
  margin-bottom: 10px;
  img {
    width: 30px;
    height: 30px;
    border-radius: 15px;
  }
  span {
    line-height: 30px;
    vertical-align: top;
    margin-left: 8px;
  }
`;

const CardImg = styled.img`
  width: 220px;
  height: 189px;
  border-radius: 8px;
`;

const CardContents = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 16px;
    font-weight: 700;
    margin: 0 0 4px;
  }
  span {
    strong {
      font-size: 16px;
      font-weight: 700;
    }
    margin-left: 4px;
    font-size: 12px;
  }
  p {
    display: inline-block;
    width: 220px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

const Tags = styled.div`
  span {
    font-size: 10px;
    padding: 3px 6px;
    background-color: #dedede;
    border-radius: 10px;
    margin-right: 8px;
  }
`;

export default MainPage;
