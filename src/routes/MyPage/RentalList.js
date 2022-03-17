import React, { useState } from "react";

import styled from "styled-components";

const RentalList = () => {
  const [myRentalRole, setMyRentalRole] = useState("1");
  const [rentalState, setRentalState] = useState("대여 중");
  const handleRoleRadioButton = (e) => {
    setMyRentalRole(e.target.value);
  };

  const handleStateRadioButton = (e) => {
    setRentalState(e.target.value);
  };
  const myNickname = "다빌려";

  const BoardList = [
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "맥북프로 XX년형",
      nickname: "다빌려",
      mapData: "구로구",
      rentalStart: "2022.03.16",
      rentalEnd: "2022.03.18",
      state: "반납완료",
      dailyRentalFee: 3000,
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "맥북프로 XX년형",
      nickname: "다빌려",
      mapData: "구로구",
      rentalStart: "2022.03.16",
      rentalEnd: "2022.03.18",
      state: "대여 중",
      dailyRentalFee: 3000,
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "맥북프로 XX년형",
      nickname: "다빌려",
      mapData: "구로구",
      rentalStart: "2022.03.16",
      rentalEnd: "2022.03.18",
      state: "반납완료",
      dailyRentalFee: 3000,
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "맥북프로 XX년형",
      nickname: "다빌려",
      mapData: "구로구",
      rentalStart: "2022.03.16",
      rentalEnd: "2022.03.18",
      state: "대여 중",
      dailyRentalFee: 3000,
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2019/09/17/21/32/piano-4484621_960_720.jpg",
      title: "맥북프로 XX년형",
      nickname: "쉐어팟단골",
      mapData: "구로구",
      rentalStart: "2022.03.16",
      rentalEnd: "2022.03.18",
      state: "반납완료",
      dailyRentalFee: 3000,
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2019/09/17/21/32/piano-4484621_960_720.jpg",
      title: "맥북프로 XX년형",
      nickname: "쉐어팟단골",
      mapData: "구로구",
      rentalStart: "2022.03.16",
      rentalEnd: "2022.03.18",
      state: "반납완료",
      dailyRentalFee: 3000,
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2019/09/17/21/32/piano-4484621_960_720.jpg",
      title: "맥북프로 XX년형",
      nickname: "쉐어팟단골",
      mapData: "구로구",
      rentalStart: "2022.03.16",
      rentalEnd: "2022.03.18",
      state: "대여 중",
      dailyRentalFee: 3000,
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2019/09/17/21/32/piano-4484621_960_720.jpg",
      title: "맥북프로 XX년형",
      nickname: "쉐어팟단골",
      mapData: "구로구",
      rentalStart: "2022.03.16",
      rentalEnd: "2022.03.18",
      state: "대여 중",
      dailyRentalFee: 3000,
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2019/09/17/21/32/piano-4484621_960_720.jpg",
      title: "맥북프로 XX년형",
      nickname: "쉐어팟단골",
      mapData: "구로구",
      rentalStart: "2022.03.16",
      rentalEnd: "2022.03.18",
      state: "반납완료",
      dailyRentalFee: 3000,
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2019/09/17/21/32/piano-4484621_960_720.jpg",
      title: "맥북프로 XX년형",
      nickname: "쉐어팟단골",
      mapData: "구로구",
      rentalStart: "2022.03.16",
      rentalEnd: "2022.03.18",
      state: "반납완료",
      dailyRentalFee: 3000,
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2019/09/17/21/32/piano-4484621_960_720.jpg",
      title: "맥북프로 XX년형",
      nickname: "쉐어팟단골",
      mapData: "구로구",
      rentalStart: "2022.03.16",
      rentalEnd: "2022.03.18",
      state: "반납완료",
      dailyRentalFee: 3000,
    },
  ];
  return (
    <RentalListWrap>
      <TopButtons>
        <label className={myRentalRole === "1" ? "checked" : null}>
          빌린 내역
          <input
            type="radio"
            name="myRole"
            value="1"
            hidden
            onChange={handleRoleRadioButton}
          />
        </label>
        <label className={myRentalRole === "2" ? "checked" : null}>
          공유한 내역
          <input
            type="radio"
            name="myRole"
            value="2"
            hidden
            onChange={handleRoleRadioButton}
          />
        </label>
      </TopButtons>
      <StateButtons>
        <label className={rentalState === "대여 중" ? "checked" : null}>
          대여 중
          <input
            type="radio"
            name="state"
            value="대여 중"
            hidden
            onChange={handleStateRadioButton}
          />
        </label>
        <label className={rentalState === "반납완료" ? "checked" : null}>
          반납완료
          <input
            type="radio"
            name="state"
            value="반납완료"
            hidden
            onChange={handleStateRadioButton}
          />
        </label>
      </StateButtons>
      <RentalCardBox>
        {BoardList.map((p) => {
          const role =
            myRentalRole === "1"
              ? !(p.nickname === myNickname)
              : p.nickname === myNickname;
          console.log(role);
          if (p.state === rentalState && role) {
            return (
              <RentalCard>
                <img src={p.imageUrl1} />
                <div className="boardInfo">
                  <h3>{p.title}</h3>
                  <span className="mapData">🌐 서울 {p.mapData}</span>
                  <span className="rentalDate">
                    📆 {p.rentalStart} - {p.rentalEnd}
                  </span>
                  <div>
                    <span className="boardState">{p.state}</span>
                    <span className="dailyRentalFee">
                      <strong>{p.dailyRentalFee.toLocaleString()}</strong> 원 /
                      1일
                    </span>
                  </div>
                  <button>후기 작성</button>
                </div>
              </RentalCard>
            );
          }
        })}
      </RentalCardBox>
    </RentalListWrap>
  );
};

const RentalListWrap = styled.div``;

const TopButtons = styled.div`
  label {
    display: inline-block;
    width: 460px;
    height: 48px;
    box-sizing: border-box;
    border: 1px solid #f2f3f4;
    border-radius: 8px 8px 0 0;
    padding: 13px;
    font-size: 16px;
    font-weight: 500;
    color: #323232;
    text-align: center;
    cursor: pointer;
  }
  .checked {
    background: #f2f3f4;
    color: #999;
  }
`;

const StateButtons = styled.div`
  margin: 32px 0 24px;
  label {
    margin-right: 16px;
    font-size: 14px;
    font-weight: 500;
    color: #999;
    cursor: pointer;
  }
  .checked {
    border-bottom: 1px solid #5f29fa;
    color: #5f29fa;
  }
`;

const RentalCardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 42px 30px;
  padding-bottom: 315px;
`;

const RentalCard = styled.div`
  display: flex;
  img {
    width: 160px;
    height: 160px;
    margin-right: 30px;
    border-radius: 10px;
  }
  .boardInfo {
    display: flex;
    flex-direction: column;
  }
  h3 {
    margin: 0 0 4px;
    font-size: 18px;
    font-weight: 500;
    color: #323232;
  }
  .mapData {
    margin-bottom: 4px;
    font-size: 14px;
    font-weight: 350;
    color: #777;
  }
  .rentalDate {
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 350;
    color: #777;
  }
  .boardState {
    padding: 4px 8px;
    margin: 0 8px 0 0;
    border-radius: 5px;
    background-color: #aaa;
    font-size: 11px;
    font-weight: 500;
    color: #fff;
  }
  .dailyRentalFee {
    font-size: 12px;
    font-weight: 400;
    color: #777;
    strong {
      font-size: 16px;
      font-weight: 700;
      color: #323232;
    }
  }
  button {
    width: 255px;
    height: 48px;
    margin-top: 24px;
    border: none;
    border-radius: 8px;
    padding: 16px;
    background-color: #f2f3f4;
    cursor: pointer;
  }
`;
export default RentalList;
