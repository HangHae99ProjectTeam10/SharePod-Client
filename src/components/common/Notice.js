import React, { useEffect, useState } from "react";
import {
  NoticeButton,
  NoticeCardInfoBox,
  NoticeCardInfoBoxButtons,
  NoticeCardWrapper,
  NoticeModalBox,
  NoticeModalBoxHeader,
  NoticeModalWrapper,
  Wrapper,
} from "./Notice.style";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { useDispatch, useSelector } from "react-redux";
import NoticeService from "services/notice";
import {
  getDate,
  getHours,
  getMinutes,
  getMonth,
  getYear,
  set,
} from "date-fns";

const NoticeModal = (props) => {
  const dispatch = useDispatch();
  const { notice_list } = useSelector(({ notice }) => notice);
  const { floatingModal } = props;
  const [noticeCardHidden, setNoticeCardHidden] = useState([]);

  useEffect(() => {
    dispatch(NoticeService.getNoticeList());
  }, [dispatch]);

  useEffect(() => {
    const noticeCardHiddenList = new Array(notice_list.length).fill(false);
    console.log(noticeCardHiddenList);
    setNoticeCardHidden(noticeCardHiddenList);
  }, [notice_list]);

  const nowTimeData = new Date();
  const nowYear = getYear(nowTimeData);
  const nowMonth = getMonth(nowTimeData);
  const nowDate = getDate(nowTimeData);
  const nowHour = getHours(nowTimeData);
  const nowMinute = getMinutes(nowTimeData);

  const deleteNotice = (noticeId, idx) => {
    dispatch(NoticeService.deleteNotice(noticeId));
    const newNoticeCardHiddenList = [];
    for (let i = 0; i < noticeCardHidden.length; i++) {
      if (i === idx) {
        newNoticeCardHiddenList.push(true);
      } else {
        newNoticeCardHiddenList.push(false);
      }
    }
    setNoticeCardHidden(newNoticeCardHiddenList);
  };
  return (
    <NoticeModalWrapper floatingModal={floatingModal}>
      <div className="triangle"></div>
      <NoticeModalBox>
        <NoticeModalBoxHeader>a</NoticeModalBoxHeader>
        {notice_list?.map((p, idx) => {
          // const dataDate = new Date(p.modifiedAt);
          // const year = getYear(dataDate);
          // const month = getMonth(dataDate);
          // const date = getDate(dataDate);
          // const hour = getHours(dataDate);
          // const minute = getMinutes(dataDate);
          return (
            <NoticeCardWrapper
              key={idx}
              noticeCardHidden={noticeCardHidden[idx]}
            >
              <img src={p.otherUserImg} />
              <NoticeCardInfoBox>
                <span className="userRegion">서울시 {p.userRegion} </span>{" "}
                {/* <span className="time">
                  ·{" "}
                  {nowYear !== year
                    ? `${nowYear - year}년 전`
                    : nowMonth !== month
                    ? `${nowMonth - month}개월 전`
                    : nowDate !== date
                    ? `${nowDate - date}일 전`
                    : nowHour !== hour
                    ? `${nowHour - hour}시간 전`
                    : nowMinute !== minute
                    ? `${nowMinute - minute}분 전`
                    : null}
                </span> */}
                <p className="noticeContent">
                  💌'{p.noticeName}'님이 '{p.noticeMsg}'
                </p>
                {/* <span className="rentalPeriod"></span> */}
                <button
                  className="deleteButton"
                  onClick={() => deleteNotice(p.noticeId, idx)}
                >
                  ×
                </button>
              </NoticeCardInfoBox>
            </NoticeCardWrapper>
          );
        })}
      </NoticeModalBox>
    </NoticeModalWrapper>
  );
};

const Notice = () => {
  const dispatch = useDispatch();
  const [floatingModal, setFloatingModal] = useState(false);
  const { notice_count } = useSelector(({ notice }) => notice);
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
    <Wrapper>
      <NoticeButton onClick={() => modalToggle()}>
        <span className="noticeCount">{notice_count}</span>
        <NotificationsOutlinedIcon />
      </NoticeButton>
      <NoticeModal floatingModal={floatingModal} />
    </Wrapper>
  );
};

export default Notice;
