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

const PersonalChat = () => {
  const dispatch = useDispatch();
  const { chatroodId } = useParams();
  const SockJs = new SockJS("http://13.125.219.196/ws-stomp");
  const StompClient = Stomp.over(SockJs);

  const { chatRoomContents } = useSelector(({ myPage }) => myPage);
  const chatMessageDataList = chatRoomContents?.chatMessageDataList;

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

  const boardInfo = {
    imageUrl1:
      "https://tistory1.daumcdn.net/tistory/2866877/attach/13f43ae07fe94befa5571bfd6442c89e",
    title: "삼성 공기청정기",
    dailyrentalfee: 30000,
  };

  const handleSubmitBtn = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

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
              <img src={boardInfo.imageUrl1} alt="profile" />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <span className="boardTitle">{boardInfo.title}</span>
                <span className="rentalfee">
                  <strong>{boardInfo.dailyrentalfee.toLocaleString()}</strong>
                  원/ 1일
                </span>
              </Box>
            </Box>
            {/* <button>대여하기</button> */}
          </BoardInfo>

          <MessageField>
            <MessageFieldInner>
              {chatMessageDataList?.map((p, idx, lst) => {
                const messageData = p?.modifiedAt;
                console.log(messageData);
                console.log(p?.modifiedAt);
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
                console.log(p);
                if (p.userNickname === userNickname) {
                  return (
                    <>
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
                    </>
                  );
                }
                return (
                  <>
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
                  </>
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
