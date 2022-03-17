import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ServerRequestDatePicker from "../../components/DatePicker";
import ReservationModal from "../../components/ReservationModal";

const Reservation = () => {
  const [rentalStartDate, setRentalStartDate] = useState();
  const [rentalEndDate, setRentalEndDate] = useState();
  const [startDay, setStartDay] = useState();
  const [endDay, setEndDay] = useState();
  const nickname = "다빌려";

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
  console.log(startDay);
  return (
    <ReservationWrap>
      <SectionHeader>
        <h2>거래를 요청합니다.</h2>
      </SectionHeader>
      <ReservationField>
        <Label>
          <span>대여자</span>
          <div className="userName">{nickname}</div>
        </Label>
        <Label>
          <span>대여 시작일</span>
          <div className="DatePickerOutter">
            <ServerRequestDatePicker onChange={setRentalStartDate} />
          </div>
        </Label>
        <Label>
          <span>대여 종료일</span>
          <div className="DatePickerOutter">
            <ServerRequestDatePicker onChange={setRentalEndDate} />
          </div>
        </Label>
        <Buttons>
          <ReservationModal
            nickname={nickname}
            startDay={startDay}
            endDay={endDay}
          />
          <button>돌아가기</button>
        </Buttons>
      </ReservationField>
    </ReservationWrap>
  );
};

const ReservationWrap = styled.section``;

const SectionHeader = styled.div`
  padding: 38px 0 70px;
  text-align: center;
  background-color: #ececec;
  color: #8c8c8c;
`;

const ReservationField = styled.div`
  padding: 40px 540px 79px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 360px;

  .userName {
    padding: 17px;
    color: #999;
    font-size: 16px;
  }
  .userName,
  .DatePickerOutter {
    margin-top: 18px;
    border-radius: 8px;
    border: 1px solid #dedede;
  }
`;

const Buttons = styled.div`
  button {
    padding: 15px 0px;
    width: 349px;
    text-align: center;
    font-size: 14px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
  }
`;

export default Reservation;
