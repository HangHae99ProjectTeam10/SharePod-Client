import ServerRequestDatePicker from "components/DatePicker";
import ReservationModal from "components/ReservationModal";
import React, { useEffect, useState } from "react";
import {
  HorizontalLine,
  ReservationForm,
  ReservationModalWrapper,
  ReservationMyNickname,
  ReservationRentalEnd,
  ReservationRentalStart,
  ReservationRequestProductImg,
  ReservationRequestProductInfo,
  ReservationRequestProductInfoBox,
  ReservationRequestProductWrapper,
  ReservationRequestWrapper,
  Wrapper,
} from "./ReservationRequest.style";

const ReservationRequest = () => {
  const [rentalStartDate, setRentalStartDate] = useState();
  const [rentalEndDate, setRentalEndDate] = useState();
  const [startDay, setStartDay] = useState();
  const [endDay, setEndDay] = useState();

  const changeStartDay = () => {
    const startYear = rentalStartDate.getFullYear();
    const startMonth = rentalStartDate.getMonth();
    const startDate = rentalStartDate.getDate();
    setStartDay(`${startYear}-${startMonth + 1}-${startDate}`);
  };

  useEffect(() => {
    if (rentalStartDate) {
      changeStartDay(rentalStartDate);
    }
  }, [rentalStartDate]);

  const changeEndDay = () => {
    const endYear = rentalEndDate.getFullYear();
    const endMonth = rentalEndDate.getMonth();
    const endDate = rentalEndDate.getDate();
    setEndDay(`${endYear}-${endMonth + 1}-${endDate}`);
  };

  useEffect(() => {
    if (rentalEndDate) {
      changeEndDay(rentalEndDate);
    }
  }, [rentalEndDate]);

  return (
    <Wrapper>
      <h2>대여하기</h2>
      <HorizontalLine />
      <ReservationRequestWrapper>
        <ReservationRequestProductWrapper>
          <ReservationRequestProductImg />
          <ReservationRequestProductInfo>
            <img />
            <ReservationRequestProductInfoBox>
              <span className="ReservationPartner">상대방 이름</span>
              <span className="ReservationProduct">물품명</span>
            </ReservationRequestProductInfoBox>
          </ReservationRequestProductInfo>
        </ReservationRequestProductWrapper>
        <ReservationForm>
          <ReservationMyNickname>
            닉네임
            <input />
          </ReservationMyNickname>
          <ReservationRentalStart>
            대여 시작일
            <div className="datePicker">
              <ServerRequestDatePicker onChange={setRentalStartDate} />
            </div>
          </ReservationRentalStart>
          <ReservationRentalEnd>
            대여 종료일
            <div className="datePicker">
              <ServerRequestDatePicker onChange={setRentalEndDate} />
            </div>
          </ReservationRentalEnd>
          <ReservationModalWrapper>
            <ReservationModal
              nickname={"nickname"}
              startDay={startDay}
              endDay={endDay}
            />
          </ReservationModalWrapper>
        </ReservationForm>
      </ReservationRequestWrapper>
    </Wrapper>
  );
};

export default ReservationRequest;
