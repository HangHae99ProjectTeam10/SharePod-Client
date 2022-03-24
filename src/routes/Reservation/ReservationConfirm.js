import React from "react";
import { history } from "redux/store";
import {
  HorizontalLine,
  ReservationConfirmBox,
  ReservationConfirmButtonWrapper,
  ReservationConfirmCardInfoContents,
  ReservationConfirmCardInfoTable,
  ReservationConfirmCardInfoTableBody,
  ReservationConfirmCardInfoTableHeader,
  ReservationConfirmCardNumber,
  ReservationConfirmCardRequestInfo,
  ReservationConfirmCardWrapper,
  ReservationConfirmHeader,
  ReservationConfirmListWrapper,
  ReservationConfirmNothingWrapper,
  ReservationConfirmWrapper,
  Wrapper,
} from "./ReservationConfirm.style";

const ReservationConfirm = () => {
  const requestList = [
    {
      partnerName: "레몬티",
      productImg:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
    },
    {
      partnerName: "레몬티",
      productImg:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
    },
    {
      partnerName: "레몬티",
      productImg:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
    },
  ];
  const requestAmount = requestList.length;

  const moveToBack = () => {
    history.goBack();
  };
  return (
    <Wrapper>
      <ReservationConfirmBox>
        <h2>대여 요청 관리</h2>
        <HorizontalLine />
        <ReservationConfirmWrapper>
          <ReservationConfirmHeader>
            <p>
              총 <strong>{requestAmount}</strong> 건의 대여요청이 있습니다.
            </p>
          </ReservationConfirmHeader>
          <ReservationConfirmListWrapper>
            {requestAmount ? (
              <>
                {requestList.map((p, idx) => {
                  return (
                    <ReservationConfirmCardWrapper>
                      <ReservationConfirmCardInfoTable>
                        <ReservationConfirmCardInfoTableHeader>
                          <div className="cardNumberHeader">순번</div>
                          <div className="productInfoHeader">상품정보</div>
                          <div>거래자 정보</div>
                        </ReservationConfirmCardInfoTableHeader>
                        <ReservationConfirmCardInfoTableBody>
                          <ReservationConfirmCardNumber>
                            {idx + 1}
                          </ReservationConfirmCardNumber>
                          <ReservationConfirmCardInfoContents>
                            <img src={p.productImg} />
                            <span>{p.boardTitle}</span>
                          </ReservationConfirmCardInfoContents>
                          <ReservationConfirmCardRequestInfo></ReservationConfirmCardRequestInfo>
                        </ReservationConfirmCardInfoTableBody>
                      </ReservationConfirmCardInfoTable>
                      <ReservationConfirmButtonWrapper>
                        <p>
                          <strong>
                            {p.partnerName} 님이 대여 요청을 하셨습니다.
                          </strong>
                        </p>
                        <button className="reservationRefuse">거절하기</button>
                        <button className="reservationConfirm">
                          신청 수락하기
                        </button>
                      </ReservationConfirmButtonWrapper>
                    </ReservationConfirmCardWrapper>
                  );
                })}
              </>
            ) : (
              <ReservationConfirmNothingWrapper>
                <p>도착한 대여 요청이 없습니다.</p>
                <button onClick={moveToBack}>뒤로 가기</button>
              </ReservationConfirmNothingWrapper>
            )}
          </ReservationConfirmListWrapper>
        </ReservationConfirmWrapper>
      </ReservationConfirmBox>
    </Wrapper>
  );
};

export default ReservationConfirm;
