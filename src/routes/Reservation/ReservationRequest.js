import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
import { singleDigits } from "constants/singleDigits";
import ProductService from "services/product";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const ReservationRequest = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [rentalStartDate, setRentalStartDate] = useState(new Date());
  const [rentalEndDate, setRentalEndDate] = useState(new Date());
  const [startDay, setStartDay] = useState();
  const [endDay, setEndDay] = useState();

  const { authUser } = useSelector(({ auth }) => auth);

  useEffect(() => {
    dispatch(ProductService.getOneProductDetail(id));
  }, [dispatch, id]);

  const { product_detail } = useSelector(({ product }) => product);

  const changeStartDay = () => {
    const startYear = rentalStartDate.getFullYear();
    const startMonth = singleDigits.includes(rentalStartDate.getMonth() + 1)
      ? `0${rentalStartDate.getMonth() + 1}`
      : rentalStartDate.getMonth() + 1;
    const startDate = singleDigits.includes(rentalStartDate.getDate())
      ? `0${rentalStartDate.getDate()}`
      : rentalStartDate.getDate();
    setStartDay(`${startYear}-${startMonth}-${startDate}`);
  };

  useEffect(() => {
    if (rentalStartDate) {
      changeStartDay(rentalStartDate);
    }
  }, [rentalStartDate]);

  const changeEndDay = () => {
    const endYear = rentalEndDate.getFullYear();
    const endMonth = singleDigits.includes(rentalEndDate.getMonth() + 1)
      ? `0${rentalEndDate.getMonth() + 1}`
      : rentalEndDate.getMonth() + 1;
    const endDate = singleDigits.includes(rentalEndDate.getDate())
      ? `0${rentalEndDate.getDate()}`
      : rentalEndDate.getDate();
    setEndDay(`${endYear}-${endMonth}-${endDate}`);
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
            <ReservationRequestProductImg src={product_detail?.imgFiles?.[0]} />
            <ReservationRequestProductInfo>
              <img src={product_detail?.sellerImg} alt="seller" />
              <ReservationRequestProductInfoBox>
                <span className="ReservationProduct">
                  {product_detail?.title}
                </span>
                <span className="ReservationPartner">
                  작성자 : {product_detail?.nickName}
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
                boardId={id}
              />
            </ReservationModalWrapper>
          </ReservationForm>
        </ReservationRequestWrapper>
      </ReservationRequestBox>
    </Wrapper>
  );
};

export default ReservationRequest;
