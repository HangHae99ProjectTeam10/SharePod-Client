import React, { useEffect, useState } from "react";

import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import MyPageService from "services/myPage";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import {
  BoardInfo,
  BoxHeader,
  ChatField,
  ChatSection,
  MessageBar,
  MessageField,
  MyMessageCard,
  PartnersMessageCard,
  PersonalChatWrap,
} from "./PersonalChat.style";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import { addChatList } from "redux/actions/MyPage";

const PersonalChat = () => {
  const dispatch = useDispatch();
  const { chatroodId } = useParams();
  const SockJs = new SockJS("http://13.125.219.196/ws-stomp");
  const StompClient = Stomp.over(SockJs);

  useEffect(() => {
    dispatch(MyPageService.getOneChatRoomContents(chatroodId));
  }, [dispatch, chatroodId]);

  useEffect(() => {
    console.log("connect");
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
  }, []);

  const { chatRoomContents } = useSelector(({ myPage }) => myPage);
  const chatMessageDataList = chatRoomContents?.chatMessageDataList?.reverse();

  const { authUser } = useSelector(({ auth }) => auth);
  const userId = authUser.userId;
  const userNickname = authUser.nickname;
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    console.log("send");
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
    console.log("recv");
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
                  원/ 일
                </span>
              </Box>
            </Box>
            <button>대여하기</button>
          </BoardInfo>

          <MessageField>
            {chatMessageDataList?.map((p, idx, lst) => {
              if (p.userNickname === userNickname) {
                return (
                  <div key={idx}>
                    <MyMessageCard>
                      <p>{p.message}</p>
                    </MyMessageCard>
                  </div>
                );
              }
              return (
                <PartnersMessageCard key={idx}>
                  <p>{p.message}</p>
                </PartnersMessageCard>
              );
            })}
          </MessageField>
          <MessageBar>
            <input
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
