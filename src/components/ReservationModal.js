import * as React from "react";

import styled from "styled-components";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import { history } from "../redux/store";

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
  // const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <ModalWrapper>
      <Button onClick={handleOpen}>대여 예약하기</Button>
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
          <ReservationInfoBox>
            <div className="nickname">
              <span>대여자</span>
              <span>{props.nickname}</span>
            </div>
            <div className="startDate">
              <span>대여 시작일</span>
              <span>{props.startDay}</span>
            </div>
            <div className="endDate">
              <span>대여 종료일</span>
              <span>{props.endDay}</span>
            </div>
          </ReservationInfoBox>
          <Buttons>
            대여를 신청 하시겠습니까?
            <div>
              <ModalButton onClick={() => {}}>돌아가기</ModalButton>
              <ModalButton onClick={() => {}}>신청하기</ModalButton>
            </div>
          </Buttons>
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

const ReservationInfoBox = styled.div`
  margin: 0 auto;
  width: 286px;
  height: 168px;
  border: 1px solid #c4c4c4;
  border-width: 1px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  div {
    display: flex;
    justify-content: space-around;
  }
  span {
    font-size: 14px;
    color: #8c8c8c;
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
