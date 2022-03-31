import * as React from "react";

import styled from "styled-components";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { font_deep_black_color, main_color } from "constants/ColorSet";
import ReservationService from "services/reservation";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 458,
  height: 204,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "24px",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
  padding: "31px 130px 100px",
};

export default function ReservationConfirmModal(props) {
  const dispatch = useDispatch();
  const { userId } = useSelector(({ auth }) => auth.authUser);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const actionType = props.actionType === "confirm";
  const data = {
    sellerId: userId,
    buyerNickName: props.buyerNickName,
    check: actionType,
  };
  console.log(data);
  const handleAction = () => {
    dispatch(ReservationService.postReservationConfirm(data, props.boardId));
  };

  return (
    <ModalWrapper>
      <Button
        style={{
          width: "100%",
          height: "100%",
        }}
        onClick={handleOpen}
      >
        {actionType ? "신청 수락하기" : "거절하기"}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ReservationConfirmForm>
            {actionType ? (
              <h3>대여 요청을 수락하시겠습니까?</h3>
            ) : (
              <h3>대여 요청을 거절하시겠습니까?</h3>
            )}
            <Buttons>
              <ModalButton
                className="cancelButton"
                onClick={() => {
                  handleClose();
                }}
              >
                취소하기
              </ModalButton>
              {actionType ? (
                <ModalButton
                  className="actionButton"
                  onClick={handleAction}
                  type="button"
                >
                  수락하기
                </ModalButton>
              ) : (
                <ModalButton
                  className="actionButton"
                  onClick={handleAction}
                  type="button"
                >
                  거절하기
                </ModalButton>
              )}
            </Buttons>
          </ReservationConfirmForm>
        </Box>
      </Modal>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  padding: 10px;
`;

const ReservationConfirmForm = styled.div`
  padding: 40px 36px;
  h3 {
    margin-bottom: 41px;
    font-size: 18px;
    font-weight: 400;
    color: ${font_deep_black_color};
  }
`;

const Buttons = styled.div`
  display: flex;
  color:#777;
  font-size:24px;
  div{
    margin:0 auto;
    width:286px;
    display-flex;
    justify-content:space-between;
  }
  .actionButton{
    color:#fff;
    background-color:${main_color};
  }
`;

const ModalButton = styled.button`
  width: 187px;
  height: 56px;
  margin-right: 16px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-wiehgt: 700;
  margin-right: 7px;
`;
