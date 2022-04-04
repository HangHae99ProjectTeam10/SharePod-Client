import * as React from "react";

import styled from "styled-components";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import { history } from "../redux/store";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import ReservationService from "services/reservation";
import { singleDigits } from "constants/singleDigits";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 555,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "24px",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
  padding: "31px 130px 100px",
};

export default function ReservationModal(props) {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const nickname = props.nickname;
  const startDay = props.startDay;
  const endDay = props.endDay;

  React.useEffect(() => {
    reset({
      startRental: startDay,
      endRental: endDay,
      userId: props.userId,
    });
  }, [props]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({});

  const onSubmit = (data) => {
    if (!startDay || !endDay) {
      alert("날짜를 입력해주세요");
    } else if (
      parseInt(startDay.split("-").join("")) >
      parseInt(endDay.split("-").join(""))
    ) {
      alert("시작일을 종료일보다 앞선 날짜로 설정하세요");
    } else {
      dispatch(ReservationService.addReservation(data, props.boardId));
    }
  };

  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = singleDigits.includes(today.getMonth() + 1)
    ? `0${today.getMonth() + 1}`
    : `${today.getMonth() + 1}`;
  const todayDate = singleDigits.includes(today.getDate())
    ? `0${today.getDate()}`
    : `${today.getDate()}`;
  const initialValue = `${todayYear}-${todayMonth}-${todayDate}`;

  return (
    <ModalWrapper>
      <Button
        style={{
          width: "100%",
          height: "100%",
        }}
        onClick={handleOpen}
      >
        대여 예약하기
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalTitle id="modal-modal-title" variant="h6" component="h2">
            거래 요청
          </ModalTitle>
          <ReservationForm onSubmit={handleSubmit(onSubmit)}>
            <ReservationInfo>
              <ReservationNickname>
                대여자
                <input value={nickname} readOnly />
              </ReservationNickname>
              <ReservationStartDay>
                대여 시작일
                <input
                  value={startDay}
                  {...register("startRental")}
                  defaultValue={initialValue}
                />
              </ReservationStartDay>
              <ReservationEndDay>
                대여 종료일
                <input
                  value={endDay}
                  {...register("endRental")}
                  defaultValue={initialValue}
                />
              </ReservationEndDay>
            </ReservationInfo>
            <Buttons>
              대여를 신청 하시겠습니까?
              <div>
                <ModalButton
                  onClick={() => {
                    handleClose();
                  }}
                >
                  취소하기
                </ModalButton>
                <ModalButton type="submit">신청하기</ModalButton>
              </div>
            </Buttons>
          </ReservationForm>
        </Box>
      </Modal>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  padding: 10px;
`;

const ModalTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #8c8c8c;
`;

const Input = styled.input`
  width: 293px;
  height: 41px;
  margin-bottom: 8px;
  border-radius: 8px;
  border: 1px solid #e3e3e3;
`;

const ReservationInfo = styled.div`
  margin: 0 auto;
  width: 286px;
  height: 168px;
  border: 1px solid #c4c4c4;
  border-width: 1px 0px;
  padding-left: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ReservationNickname = styled.label`
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  color: #8c8c8c;
  input {
    font-size: 14px;
    border: none;
    color: #8c8c8c;
  }
  input: focus {
    outline: none;
  }
`;

const ReservationStartDay = styled.label`
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  color: #8c8c8c;
  input {
    font-size: 14px;
    border: none;
    color: #8c8c8c;
  }
  input: focus {
    outline: none;
  }
`;

const ReservationEndDay = styled.label`
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  color: #8c8c8c;
  input {
    font-size: 14px;
    border: none;
    color: #8c8c8c;
  }
  input: focus {
    outline: none;
  }
`;

const Buttons = styled.div`
  display: flex;
  margin-top:25px;
  flex-direction: column;
  color:#777;
  font-size:24px;
  div{
    margin:0 auto;
    width:286px;
    display-flex;
    justify-content:space-between;
  }
`;

const ModalButton = styled.button`
  width: 135px;
  height: 46px;
  margin-top: 21px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  margin-right: 7px;
`;

const ReservationForm = styled.form``;
