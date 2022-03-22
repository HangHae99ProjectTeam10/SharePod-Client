import React, { useState } from "react";
import {
  HorizontalLine,
  RentalCard,
  RentalCardBox,
  RentalCardDailyRentalFee,
  RentalCardDate,
  RentalCardImg,
  RentalCardInfoWrapper,
  RentalCardMapData,
  RentalCardQualityConfirmButton,
  TopButtons,
  Wrapper,
} from "./RentalList.style";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

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
    <Wrapper>
      <h3>대여 내역</h3>
      <HorizontalLine />
      <TopButtons>
        <label className={myRentalRole === "1" ? "checked" : null}>
          대여 내역
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
      <RentalCardBox>
        {BoardList.map((p) => {
          const role =
            myRentalRole === "1"
              ? !(p.nickname === myNickname)
              : p.nickname === myNickname;
          if (role) {
            return (
              <RentalCard>
                <RentalCardImg src={p.imageUrl1} />
                <RentalCardInfoWrapper>
                  <h3>{p.title}</h3>
                  <RentalCardMapData>
                    <LocationOnOutlinedIcon /> 서울 {p.mapData}
                  </RentalCardMapData>
                  <RentalCardDate>
                    <CalendarTodayOutlinedIcon /> {p.rentalStart}-{p.rentalEnd}
                  </RentalCardDate>
                  <RentalCardDailyRentalFee>
                    <strong>{p.dailyRentalFee.toLocaleString()}</strong> 원 /
                    1일
                  </RentalCardDailyRentalFee>
                  <RentalCardQualityConfirmButton>
                    품질 확인하기
                  </RentalCardQualityConfirmButton>
                </RentalCardInfoWrapper>
              </RentalCard>
            );
          }
        })}
      </RentalCardBox>
    </Wrapper>
  );
};

export default RentalList;
