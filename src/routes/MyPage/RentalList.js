import React, { useState } from "react";
import { useSelector } from "react-redux";
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
  const handleRoleRadioButton = (e) => {
    setMyRentalRole(e.target.value);
  };

  const { rentBuyList } = useSelector(({ myPage }) => myPage.myPageData);
  const { rentSellList } = useSelector(({ myPage }) => myPage.myPageData);

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
        {myRentalRole === "1"
          ? rentBuyList.length
            ? rentBuyList.map((p, idx) => {
                return (
                  <RentalCard key={idx}>
                    <RentalCardImg src={p.firstImgUrl} />
                    <RentalCardInfoWrapper>
                      <h3>{p.boardTitle}</h3>
                      <RentalCardMapData>
                        <LocationOnOutlinedIcon /> 서울 {p.boardRegion}
                      </RentalCardMapData>
                      <RentalCardDate>
                        <CalendarTodayOutlinedIcon /> {p.startRental}-
                        {p.endRental}
                      </RentalCardDate>
                      <RentalCardDailyRentalFee>
                        <strong>{p.dailyRentalFee.toLocaleString()}</strong> 원
                        / 1일
                      </RentalCardDailyRentalFee>
                      <RentalCardQualityConfirmButton>
                        품질 확인하기
                      </RentalCardQualityConfirmButton>
                    </RentalCardInfoWrapper>
                  </RentalCard>
                );
              })
            : null
          : rentSellList.length
          ? rentSellList.map((p, idx) => {
              return (
                <RentalCard key={idx}>
                  <RentalCardImg src={p.firstImgUrl} />
                  <RentalCardInfoWrapper>
                    <h3>{p.boardTitle}</h3>
                    <RentalCardMapData>
                      <LocationOnOutlinedIcon /> 서울 {p.boardRegion}
                    </RentalCardMapData>
                    <RentalCardDate>
                      <CalendarTodayOutlinedIcon /> {p.startRental}-
                      {p.endRental}
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
            })
          : null}
      </RentalCardBox>
    </Wrapper>
  );
};

export default RentalList;
