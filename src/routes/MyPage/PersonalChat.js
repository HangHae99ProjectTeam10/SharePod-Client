import React, { useCallback, useEffect, useRef, useState } from "react";

import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import MyPageService from "services/myPage";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import {
  Blank,
  BoardInfo,
  BoxHeader,
  ChatField,
  ChatSection,
  DateNotice,
  LoaderWrapper,
  MessageBar,
  MessageField,
  MessageFieldInner,
  MyMessageCard,
  MyMessageCardWrapper,
  MyMessageTime,
  PartnerMessageTime,
  PartnerMessegeCardWrapper,
  PartnersMessageCard,
  PersonalChatWrap,
} from "./PersonalChat.style";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import { addChatList } from "redux/actions/MyPage";
import { singleDigits } from "constants/singleDigits";
import PageLoader from "components/common/PageLoader";

const PersonalChat = () => {
  const dispatch = useDispatch();
  const { chatroodId } = useParams();
  const SockJs = new SockJS("http://13.125.219.196/ws-stomp");
  const StompClient = Stomp.over(SockJs);

  const { chatRoomContents } = useSelector(({ myPage }) => myPage);
  const chatMessageDataList = chatRoomContents?.chatMessageDataList;
  const { chatList } = useSelector(({ myPage }) => myPage);
  const [productData, setProductData] = useState([]);

  const { authUser } = useSelector(({ auth }) => auth);
  const userId = authUser.userId;
  const userNickname = authUser.nickname;
  const [message, setMessage] = useState("");
  useEffect(() => {
    dispatch(MyPageService.getOneChatRoomContents(chatroodId));

    //socket 연결
    StompClient.connect(
      {},
      function (frame) {
        StompClient.subscribe(
          `/sub/chat/room/${chatroodId}`,
          function (message) {
            var recv = JSON.parse(message.body);
            recvMessage(recv);
          }
        );
      },
      function (error) {
        alert("error " + error);
      }
    );
    return function cleanup() {
      StompClient.disconnect();
    };
  }, [dispatch, chatroodId]);

  const sendMessage = () => {
    var date = new Date().toISOString();

    StompClient.send(
      "/pub/templates/chat/message",
      {},
      JSON.stringify({
        chatRoomId: chatroodId,
        userId: userId,
        message: message,
        modifiedAt: date,
      })
    );
    setMessage("");
  };
  const recvMessage = (recv) => {
    dispatch(addChatList(recv));
  };

  useEffect(() => {
    const list = chatList.filter((p) => {
      return p.chatRoomId === parseInt(window.location.pathname.split("/")[4])
        ? true
        : false;
    });
    setProductData(list[0]);
  }, [chatList]);

  const handleSubmitBtn = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  // Infinity Scroll
  const [target, setTarget] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(MyPageService.getOneChatRoomContentsMore(chatroodId));
  }, [count]);

  const getMoreItem = async () => {
    setIsLoaded(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setCount((count) => count + 1);
    setIsLoaded(false);
  };

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoaded) {
      await getMoreItem();
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  //scrollToBottom
  const chatFieldRef = useRef();

  const scrollToBottom = () => {
    if (chatFieldRef.current) {
      chatFieldRef.current.scrollTop = chatFieldRef.current.scrollHeight;
    }
  };

  const scrollControl = () => {
    if (chatFieldRef.current) {
      chatFieldRef.current.scrollTop = 30;
    }
  };

  useEffect(() => {
    if (count <= 1) {
      scrollToBottom();
    } else {
      scrollControl();
    }
  }, [chatMessageDataList]);

  return (
    <PersonalChatWrap>
      <ChatSection>
        <ChatField>
          <BoxHeader>
            <img src={chatRoomContents?.otherImg} alt="profile" />
            <h3>{chatRoomContents?.otherNickName}</h3>
          </BoxHeader>
          <BoardInfo>
            <Box sx={{ display: "flex" }}>
              <img src={productData?.boardImg} alt="profile" />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <span className="boardTitle">{productData?.boardTitle}</span>
                <span className="rentalfee">
                  <strong>
                    {productData?.dailyRentalFee?.toLocaleString()}
                  </strong>
                  원/ 1일
                </span>
              </Box>
            </Box>
            {/* <button>대여하기</button> */}
          </BoardInfo>

          <MessageField ref={chatFieldRef}>
            <MessageFieldInner>
              <LoaderWrapper ref={setTarget} className="Target-Element">
                {isLoaded && <PageLoader />}
              </LoaderWrapper>
              {chatMessageDataList?.map((p, idx, lst) => {
                const messageData = p?.modifiedAt;
                const prevMessageData =
                  idx === 0 ? "" : lst[idx - 1]?.modifiedAt;
                const thisMessageDate = messageData.split("T")[0];
                const prevMessageDate = prevMessageData.split("T")[0];

                const morningAfternoon =
                  parseInt(messageData.split("T")[1].split(":")[0]) >= 12
                    ? "오후"
                    : "오전";
                const dozenalHours =
                  parseInt(messageData.split("T")[1].split(":")[0]) >= 13
                    ? parseInt(messageData.split("T")[1].split(":")[0]) - 12
                    : parseInt(messageData.split("T")[1].split(":")[0]);
                const sendedHours = singleDigits.includes(dozenalHours)
                  ? `0${dozenalHours}`
                  : dozenalHours;
                const sendedMinutes = singleDigits.includes(
                  messageData.split("T")[1].split(":")[1]
                )
                  ? `0${messageData.split("T")[1].split(":")[1]}`
                  : messageData.split("T")[1].split(":")[1];

                const messageTimeData = `${morningAfternoon} ${sendedHours}:${sendedMinutes}`;
                if (p.userNickname === userNickname) {
                  return (
                    <div key={idx}>
                      {thisMessageDate !== prevMessageDate ? (
                        <DateNotice>
                          <div></div>
                          <span>{thisMessageDate}</span>
                        </DateNotice>
                      ) : null}
                      <MyMessageCardWrapper key={idx}>
                        <MyMessageTime>
                          {p?.userNickname !== lst[idx + 1]?.userNickname
                            ? messageTimeData
                            : messageData?.split(":").slice(0, 2)[0] ===
                                prevMessageData?.split(":").slice(0, 2)[0] &&
                              messageData?.split(":").slice(0, 2)[1] ===
                                prevMessageData?.split(":").slice(0, 2)[1]
                            ? messageTimeData
                            : null}
                        </MyMessageTime>
                        <MyMessageCard>
                          <p>{p.message}</p>
                        </MyMessageCard>
                      </MyMessageCardWrapper>
                    </div>
                  );
                }
                return (
                  <div key={idx}>
                    {thisMessageDate !== prevMessageDate ? (
                      <DateNotice>
                        <div></div>
                        <span>{thisMessageDate}</span>
                      </DateNotice>
                    ) : null}
                    <PartnerMessegeCardWrapper key={idx}>
                      {p?.userNickname !== lst[idx - 1]?.userNickname ? (
                        <img src={chatRoomContents?.otherImg} />
                      ) : (
                        <Blank />
                      )}
                      <div>
                        {p?.userNickname !== lst[idx - 1]?.userNickname && (
                          <span>{p?.userNickname}</span>
                        )}
                        <PartnersMessageCard>
                          <p>{p.message}</p>
                        </PartnersMessageCard>
                      </div>

                      <PartnerMessageTime>
                        {" "}
                        {p?.userNickname !== lst[idx + 1]?.userNickname
                          ? messageTimeData
                          : messageData?.split(":").slice(0, 2)[0] ===
                              prevMessageData?.split(":").slice(0, 2)[0] &&
                            messageData?.split(":").slice(0, 2)[1] ===
                              prevMessageData?.split(":").slice(0, 2)[1]
                          ? messageTimeData
                          : null}
                      </PartnerMessageTime>
                    </PartnerMessegeCardWrapper>
                  </div>
                );
              })}
            </MessageFieldInner>
          </MessageField>
          <MessageBar>
            <input
              autoFocus
              onKeyPress={(e) => handleSubmitBtn(e)}
              placeholder="메세지를 입력하세요."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={() => sendMessage()}>보내기</button>
          </MessageBar>
        </ChatField>
      </ChatSection>
    </PersonalChatWrap>
  );
};

export default PersonalChat;
