import React, { useEffect, useState } from "react";
import {
  NoticeButton,
  NoticeCardInfoBox,
  NoticeCardWrapper,
  NoticeModalBox,
  NoticeModalBoxHeader,
  NoticeModalBoxHeaderEveryNoticeButton,
  NoticeModalBoxHeaderPersonalChatButton,
  NoticeModalBoxHeaderRentalRequestButton,
  NoticeModalWrapper,
  Wrapper,
} from "./Notice.style";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { useDispatch, useSelector } from "react-redux";
import NoticeService from "services/notice";
import { history } from "redux/store";

const NoticeModal = (props) => {
  const dispatch = useDispatch();
  const { notice_list } = useSelector(({ notice }) => notice);
  const { floatingModal, setFloatingModal } = props;
  const [noticeType, setNoticeType] = useState("everyNotice");
  const [displayList, setDisplayList] = useState([]);

  useEffect(() => {
    dispatch(NoticeService.getNoticeList());
  }, []);

  useEffect(() => {
    if (noticeType === "rentalRequest") {
      const newDisplayList = notice_list.filter((p) => p.isChat === false);
      setDisplayList(newDisplayList);
      console.log(newDisplayList);
    } else if (noticeType === "personalChat") {
      const newDisplayList = notice_list.filter((p) => p.isChat === true);
      setDisplayList(newDisplayList);
    } else {
      setDisplayList(notice_list);
    }
  }, [notice_list, noticeType]);

  const deleteNotice = (noticeId, idx) => {
    dispatch(NoticeService.deleteNotice(noticeId));
  };
  const noticeCardAction = (isChat) => {
    if (isChat) {
      history.push("/mypage/chat-list");
      setFloatingModal(false);
    } else {
      history.push("/reservation/confirm");
      setFloatingModal(false);
    }
  };
  return (
    <NoticeModalWrapper floatingModal={floatingModal}>
      <div className="triangle"></div>
      <NoticeModalBox>
        <NoticeModalBoxHeader>
          <NoticeModalBoxHeaderEveryNoticeButton
            className={noticeType === "everyNotice" ? "checked" : null}
            onClick={() => {
              setNoticeType("everyNotice");
            }}
          >
            전체
          </NoticeModalBoxHeaderEveryNoticeButton>
          <NoticeModalBoxHeaderRentalRequestButton
            className={noticeType === "rentalRequest" ? "checked" : null}
            onClick={() => {
              setNoticeType("rentalRequest");
            }}
          >
            거래요청
          </NoticeModalBoxHeaderRentalRequestButton>
          <NoticeModalBoxHeaderPersonalChatButton
            className={noticeType === "personalChat" ? "checked" : null}
            onClick={() => {
              setNoticeType("personalChat");
            }}
          >
            채팅
          </NoticeModalBoxHeaderPersonalChatButton>
        </NoticeModalBoxHeader>
        {displayList &&
          displayList?.map((p, idx) => {
            return (
              <NoticeCardWrapper key={idx}>
                <img src={p.otherUserImg} />
                <NoticeCardInfoBox>
                  <span className="userRegion">서울시 {p.userRegion} </span>{" "}
                  <p className="noticeContent">
                    💌'{p.noticeName}'님이 '{p.noticeMsg}'
                  </p>
                  <button
                    className="actionButton"
                    onClick={() => noticeCardAction(p.isChat)}
                  >
                    {p.isChat ? "1:1 채팅하기" : "요청확인"}
                  </button>
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
      <NoticeModal
        floatingModal={floatingModal}
        setFloatingModal={setFloatingModal}
      />
    </Wrapper>
  );
};

export default Notice;
