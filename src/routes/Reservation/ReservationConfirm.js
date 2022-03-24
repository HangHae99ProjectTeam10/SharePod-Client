import ReservationConfirmModal from "components/ReservationConfirmModal";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReservationRequestList } from "redux/actions/Reservation";
import { history } from "redux/store";
import ReservationService from "services/reservation";
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
  const { request_list } = useSelector(({ reservation }) => reservation);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ReservationService.getReservationRequestList());
  }, []);

  const requestAmount = request_list.length;

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
                {request_list.map((p, idx) => {
                  return (
                    <ReservationConfirmCardWrapper key={idx}>
                      <ReservationConfirmCardInfoTable>
                        <ReservationConfirmCardInfoTableHeader>
                          <div className="cardNumberHeader">순번</div>
                          <div className="productInfoHeader">상품정보</div>
                          <div className="partnerInfoHeader">거래자 정보</div>
                        </ReservationConfirmCardInfoTableHeader>
                        <ReservationConfirmCardInfoTableBody>
                          <ReservationConfirmCardNumber>
                            {idx + 1}
                          </ReservationConfirmCardNumber>
                          <ReservationConfirmCardInfoContents>
                            <img src={p.boardImg} />
                            <span>{p.boardTitle}</span>
                          </ReservationConfirmCardInfoContents>
                          <ReservationConfirmCardRequestInfo>
                            <div>
                              <span className="reservationRequestInfoTitle">
                                닉네임
                              </span>
                              <span className="reservationRequestInfoContent">
                                {p.nickName}
                              </span>
                            </div>
                            <div>
                              <span className="reservationRequestInfoTitle">
                                대여 시작일
                              </span>
                              <span className="reservationRequestInfoContent">
                                {p.startRental}
                              </span>
                            </div>
                            <div>
                              <span className="reservationRequestInfoTitle">
                                대여 종료일
                              </span>
                              <span className="reservationRequestInfoContent">
                                {p.endRental}
                              </span>
                            </div>
                          </ReservationConfirmCardRequestInfo>
                        </ReservationConfirmCardInfoTableBody>
                      </ReservationConfirmCardInfoTable>
                      <ReservationConfirmButtonWrapper>
                        <p>
                          <strong>{p.nickName}</strong> 님이 대여 요청을
                          하셨습니다.
                        </p>
                        <div className="reservationRefuse">
                          <ReservationConfirmModal
                            actionType="refuse"
                            boardId={p.boardId}
                            buyerNickName={p.nickName}
                          />
                        </div>
                        <div className="reservationConfirm">
                          <ReservationConfirmModal
                            actionType="confirm"
                            boardId={p.boardId}
                            buyerNickName={p.nickName}
                          />
                        </div>
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
