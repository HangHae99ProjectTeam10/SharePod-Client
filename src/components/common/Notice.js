import React, { useEffect, useState } from "react";
import { NoticeModalWrapper, Wrapper } from "./Notice.style";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { useDispatch, useSelector } from "react-redux";
import NoticeService from "services/notice";

const NoticeModal = (props) => {
  const { floatingModal } = props;
  console.log(floatingModal);
  return (
    <NoticeModalWrapper floatingModal={floatingModal}></NoticeModalWrapper>
  );
};

const Notice = () => {
  const dispatch = useDispatch();
  const [floatingModal, setFloatingModal] = useState(false);
  const { notice_count } = useSelector(({ notice }) => notice);
  console.log(notice_count);
  const modalToggle = () => {
    if (floatingModal) {
      setFloatingModal(false);
    } else {
      setFloatingModal(true);
    }
  };
  useEffect(() => {
    dispatch(NoticeService.getNoticeCount());
  }, []);
  return (
    <Wrapper onClick={modalToggle}>
      <span>{notice_count}</span>
      <NotificationsOutlinedIcon />
      <NoticeModal floatingModal={floatingModal} />
    </Wrapper>
  );
};

export default Notice;
