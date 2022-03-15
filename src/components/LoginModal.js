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

export default function LoginModal() {
  // const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ModalWrapper>
      <Button onClick={handleOpen}>로그인</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            SHARE <strong>POD</strong>
          </Typography>
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요."
            style={{
              marginTop: "50px",
            }}
          />
          <Input
            label="비밀번호"
            placeholder="패스워드를 입력해주세요"
            type="password"
          />
          <LoginButton onClick={() => {}}>로그인하기</LoginButton>
          <div>
            아직 셰어팟 계정이 없나요?
            <button
              style={{
                marginTop: "10px",
                marginLeft: "14px",
                border: "none",
                backgroundColor: "#fff",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => {
                // navigate("/regist");
                history.push("/signup");
              }}
            >
              회원가입
            </button>
          </div>
        </Box>
      </Modal>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  padding: 10px;
`;

const Input = styled.input`
  width: 293px;
  height: 41px;
  margin-bottom: 8px;
  border-radius: 8px;
  border: 1px solid #e3e3e3;
`;

const LoginButton = styled.button`
  width: 293px;
  height: 46px;
  margin-top: 43px;
  border-radius: 8px;
  border: none;
`;
