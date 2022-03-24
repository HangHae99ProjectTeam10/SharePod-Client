import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import ServerRequestDatePicker from "components/DatePicker";
import ReservationModal from "components/ReservationModal";
import {
  HorizontalLine,
  ReservationCancelButton,
  ReservationForm,
  ReservationModalWrapper,
  ReservationMyNickname,
  ReservationRentalEnd,
  ReservationRentalStart,
  ReservationRequestBox,
  ReservationRequestProductImg,
  ReservationRequestProductInfo,
  ReservationRequestProductInfoBox,
  ReservationRequestProductWrapper,
  ReservationRequestWrapper,
  Wrapper,
} from "./ReservationRequest.style";
import { history } from "redux/store";

const ReservationRequest = () => {
  const [rentalStartDate, setRentalStartDate] = useState();
  const [rentalEndDate, setRentalEndDate] = useState();
  const [startDay, setStartDay] = useState();
  const [endDay, setEndDay] = useState();
  const [dateCheck, setDateCheck] = useState(false);
  const { authUser } = useSelector(({ auth }) => auth);

  const boardInfo = window.location.search.split("?")[1].split("&");
  const boardTitle = decodeURI(boardInfo[0]);
  const productImg = boardInfo[1];
  const sellerNickname = decodeURI(boardInfo[2]);
  const sellerProfile = boardInfo[3];
  const boardId = boardInfo[4];

  const changeStartDay = () => {
    const startYear = rentalStartDate.getFullYear();
    const startMonth = rentalStartDate.getMonth();
    const startDate = rentalStartDate.getDate();
    setStartDay(`${startYear}-0${startMonth + 1}-${startDate}`);
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
    setEndDay(`${endYear}-0${endMonth + 1}-${endDate}`);
  };

  useEffect(() => {
    if (rentalEndDate) {
      changeEndDay(rentalEndDate);
    }
  }, [rentalEndDate]);
  const moveToDetail = () => {
    history.goBack();
  };
  return (
    <Wrapper>
      <ReservationRequestBox>
        <h2>대여하기</h2>
        <HorizontalLine />
        <ReservationRequestWrapper>
          <ReservationRequestProductWrapper>
            <ReservationRequestProductImg src={productImg} />
            <ReservationRequestProductInfo>
              <img src={sellerProfile} />
              <ReservationRequestProductInfoBox>
                <span className="ReservationProduct">{boardTitle}</span>
                <span className="ReservationPartner">
                  작성자 : {sellerNickname}
                </span>
              </ReservationRequestProductInfoBox>
            </ReservationRequestProductInfo>
          </ReservationRequestProductWrapper>
          <ReservationForm>
            <ReservationMyNickname>
              닉네임
              <input readOnly value={authUser.nickname} />
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
            <ReservationCancelButton type="button" onClick={moveToDetail}>
              뒤로가기
            </ReservationCancelButton>
            <ReservationModalWrapper>
              <ReservationModal
                nickname={authUser.nickname}
                startDay={startDay}
                endDay={endDay}
                userId={authUser.userId}
                boardId={boardId}
              />
            </ReservationModalWrapper>
          </ReservationForm>
        </ReservationRequestWrapper>
      </ReservationRequestBox>
    </Wrapper>
  );
};

export default ReservationRequest;
