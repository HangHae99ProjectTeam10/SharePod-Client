import React, { useEffect, useRef, useState } from "react";
import * as StompJs from "@stomp/stompjs";
import * as SockJS from "sockjs-client";
import styled from "styled-components";

const PersonalChat = () => {
  // const wsSourceUrl = "http://13.125.219.196/chat/room";
  // const $websocket = useRef(null);
  // let topics = ["/topic/" + userId];

  const client = useRef({});
  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    connect();

    return () => disconnect();
  }, []);

  const connect = () => {
    client.current = new StompJs.Client({
      brokerURL: "ws://13.125.219.196/ws-stomp", // 웹소켓 서버로 직접 접속
      // webSocketFactory: () => new SockJS("/ws-stomp"), // proxy를 통한 접속
      // connectHeaders: {
      //   "auth-token": "spring-chat-auth-token",
      // },
      debug: function (str) {
        console.log(str);
      },
      reconnectDelay: 10000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => {
        subscribe();
      },
      onStompError: (frame) => {
        console.error(frame);
      },
    });

    client.current.activate();
  };

  const disconnect = () => {
    client.current.deactivate();
  };

  const subscribe = () => {
    client.current.subscribe(`/sub/chat/room/7`, ({ body }) => {
      setChatMessages((_chatMessages) => [..._chatMessages, JSON.parse(body)]);
    });
  };

  const publish = (message) => {
    if (!client.current.connected) {
      return;
    }

    client.current.publish({
      destination: "/pub/chat",
      body: JSON.stringify({ roomSeq: "", message }),
    });

    setMessage("");
  };

  const myNickname = "다빌려";
  const partner = {
    nickname: "쉐어팟단골",
    userImg:
      "https://cdn.pixabay.com/photo/2018/03/08/11/29/animalia-3208412_1280.jpg",
  };
  const recentPartnerList = [
    {
      userImg:
        "https://mblogthumb-phinf.pstatic.net/20160310_165/hth5859_14575678324725NDXP_PNG/Screenshot_2016-03-08-07-52-12-1.png?type=w2",
      nickname: "복제인간1",
      recentMessage:
        "안녕하세요, 혹시 닌텐도 스위치 대여 올리신 거 아직 대여 가능한가요??",
    },
    {
      userImg:
        "https://mblogthumb-phinf.pstatic.net/20160310_165/hth5859_14575678324725NDXP_PNG/Screenshot_2016-03-08-07-52-12-1.png?type=w2",
      nickname: "복제인간2",
      recentMessage:
        "안녕하세요, 혹시 닌텐도 스위치 대여 올리신 거 아직 대여 가능한가요??",
    },
    {
      userImg:
        "https://mblogthumb-phinf.pstatic.net/20160310_165/hth5859_14575678324725NDXP_PNG/Screenshot_2016-03-08-07-52-12-1.png?type=w2",
      nickname: "복제인간3",
      recentMessage:
        "안녕하세요, 혹시 닌텐도 스위치 대여 올리신 거 아직 대여 가능한가요??",
    },
    {
      userImg:
        "https://mblogthumb-phinf.pstatic.net/20160310_165/hth5859_14575678324725NDXP_PNG/Screenshot_2016-03-08-07-52-12-1.png?type=w2",
      nickname: "복제인간4",
      recentMessage:
        "안녕하세요, 혹시 닌텐도 스위치 대여 올리신 거 아직 대여 가능한가요??",
    },
    {
      userImg:
        "https://mblogthumb-phinf.pstatic.net/20160310_165/hth5859_14575678324725NDXP_PNG/Screenshot_2016-03-08-07-52-12-1.png?type=w2",
      nickname: "복제인간5",
      recentMessage:
        "안녕하세요, 혹시 닌텐도 스위치 대여 올리신 거 아직 대여 가능한가요??",
    },
    {
      userImg:
        "https://mblogthumb-phinf.pstatic.net/20160310_165/hth5859_14575678324725NDXP_PNG/Screenshot_2016-03-08-07-52-12-1.png?type=w2",
      nickname: "복제인간6",
      recentMessage:
        "안녕하세요, 혹시 닌텐도 스위치 대여 올리신 거 아직 대여 가능한가요??",
    },
    {
      userImg:
        "https://mblogthumb-phinf.pstatic.net/20160310_165/hth5859_14575678324725NDXP_PNG/Screenshot_2016-03-08-07-52-12-1.png?type=w2",
      nickname: "복제인간7",
      recentMessage:
        "안녕하세요, 혹시 닌텐도 스위치 대여 올리신 거 아직 대여 가능한가요??",
    },
    {
      userImg:
        "https://mblogthumb-phinf.pstatic.net/20160310_165/hth5859_14575678324725NDXP_PNG/Screenshot_2016-03-08-07-52-12-1.png?type=w2",
      nickname: "복제인간8",
      recentMessage:
        "안녕하세요, 혹시 닌텐도 스위치 대여 올리신 거 아직 대여 가능한가요??",
    },
  ];

  const messageList = [
    {
      nickname: "다빌려",
      message: "안녕하세요. 올리신 제품 대여하고 싶습니다. 채팅 가능하신가요?",
      createAt: "2022년 3월 11일",
      time: "오후 8:07",
    },
    {
      nickname: "다빌려",
      message:
        "일주일 정도 대여하고 싶습니다. 제품 상태는 글 작성하신 그대로인가요??",
      createAt: "2022년 3월 11일",
      time: "오후 8:08",
    },
    {
      nickname: "쉐어팟단골",
      message: "네, 안녕하세요. 가능합니다. 며칠 정도 대여하실 예정인가요?",
      createAt: "2022년 3월 11일",
      time: "오후 8:16",
    },
    {
      nickname: "쉐어팟단골",
      message: "넵넵. 혹시 거주하시는 동네가 어느 쪽이신가요?",
      createAt: "2022년 3월 11일",
      time: "오후 8:16",
    },
    {
      nickname: "다빌려",
      message:
        "목동쪽에 살고 있습니다. 평소 동선 상 일치하면 제가 이동해서 수령하겠습니다 :)",
      createAt: "2022년 3월 12일",
      time: "오후 8:21",
    },
    {
      nickname: "쉐어팟단골",
      message:
        "감사합니다. 대여하고 싶으신 날짜가 언제이신가요? 맞춰서 제 동선 말씀드리겠습니다.",
      createAt: "2022년 3월 12일",
      time: "오후 8:21",
    },
    {
      nickname: "다빌려",
      message: "앗, 잠시만요!",
      createAt: "2022년 3월 12일",
      time: "오후 8:21",
    },
  ];
  const boardInfo = {
    imageUrl1:
      "https://tistory1.daumcdn.net/tistory/2866877/attach/13f43ae07fe94befa5571bfd6442c89e",
    title: "삼성 공기청정기",
    dailyrentalfee: 30000,
  };

  return (
    <PersonalChatWrap>
      <h2>🗨 1:1 채팅하기</h2>
      <ChatSection>
        <ChatSelectBox>
          <BoxHeader>
            <h3>{myNickname}</h3>
          </BoxHeader>
          <RecentPartnerBox>
            {recentPartnerList.map((p, idx) => {
              return (
                <RecentPartenerCard key={idx}>
                  <img src={p.userImg} />
                  <div>
                    <span className="nickname">{p.nickname}</span>
                    <span className="recentMessage">{p.recentMessage}</span>
                  </div>
                </RecentPartenerCard>
              );
            })}
          </RecentPartnerBox>
        </ChatSelectBox>
        <ChatField>
          <BoxHeader>
            <h3>{partner.nickname}</h3>
            <button>×</button>
          </BoxHeader>
          <BoardInfo>
            <img src={boardInfo.imageUrl1} />
            <div>
              <span className="boardTitle">{boardInfo.title}</span>
              <span className="rentalfee">
                <strong>{boardInfo.dailyrentalfee.toLocaleString()}</strong>
                원/1일 기준
              </span>
            </div>
          </BoardInfo>
          {/* <SockJsClient
            url={wsSourceUrl}
            topics={["/topics/all"]}
            onMessage={(msg) => console.log(msg)}
            ref={$websocket}
          /> */}
          {/* <MessageField>
            {messageList.map((p, idx, lst) => {
              if (p.nickname === myNickname) {
                return (
                  <>
                    {idx === 0 ? (
                      <DateNotice key={idx}>
                        <div></div>
                        <span>{p.createAt}</span>
                      </DateNotice>
                    ) : p.createAt !== lst[idx - 1].createAt ? (
                      <DateNotice>
                        <div></div>
                        <span>{p.createAt}</span>
                      </DateNotice>
                    ) : null}
                    <MyMessageCard>
                      {idx + 1 === lst.length ? (
                        <span className="time">{p.time}</span>
                      ) : p.time !== lst[idx + 1].time ? (
                        <span className="time">{p.time}</span>
                      ) : p.nickname !== lst[idx + 1].nickname ? (
                        <span className="time">{p.time}</span>
                      ) : null}
                      <p>{p.message}</p>
                    </MyMessageCard>
                  </>
                );
              }
              return (
                <>
                  {idx === 0 ? (
                    <DateNotice key={idx}>
                      <div></div>
                      <span>{p.createAt}</span>
                    </DateNotice>
                  ) : p.createAt !== lst[idx - 1].createAt ? (
                    <DateNotice key={idx}>
                      <div></div>
                      <span>{p.createAt}</span>
                    </DateNotice>
                  ) : null}
                  <PartnersMessageCard key={idx}>
                    {p.nickname !== lst[idx - 1].nickname ? <img /> : <Blank />}
                    <div>
                      {p.nickname !== lst[idx - 1].nickname && (
                        <span>{p.nickname}</span>
                      )}
                      <div className="flex">
                        <p>{p.message}</p>
                        {idx + 1 === lst.length ? (
                          <span className="time">{p.time}</span>
                        ) : p.time !== lst[idx + 1].time ? (
                          <span className="time">{p.time}</span>
                        ) : p.nickname !== lst[idx + 1].nickname ? (
                          <span className="time">{p.time}</span>
                        ) : null}
                      </div>
                    </div>
                  </PartnersMessageCard>
                </>
              );
            })}
          </MessageField> */}
          <MessageBar>
            <input placeholder="메세지를 입력하세요." />
            <button>보내기 ✉</button>
          </MessageBar>
        </ChatField>
      </ChatSection>
    </PersonalChatWrap>
  );
};

const PersonalChatWrap = styled.section`
  padding: 40px 154px;
`;

const ChatSection = styled.div`
  display: flex;
  height: 687px;
  border-radius: 8px;
`;

const ChatSelectBox = styled.div`
  width: 293px;
  background-color: #ededed;
  border-radius: 8px 0 0 8px;
`;

const ChatField = styled.div`
  position: relative;
  width: 847px;
  background: #fdfdfd;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.09);
  border-radius: 0 8px 8px 0;
`;

const BoxHeader = styled.div`
  position: relative;
  padding: 20px 24px;
  height: 61px;
  color: #8c8c8c;
  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 26px;
    width: 24px;
    height: 24px;
    box-sizing: border-box;
    border: none;
    color: #8c8c8c;
    font-size: 24px;
    background: transparent;
    cursor: pointer;
  }
`;

const RecentPartnerBox = styled.div`
  padding: 14px 24px;
  overflow-y: auto;
  max-height: 500px;
`;

const RecentPartenerCard = styled.div`
  display: flex;
  margin-bottom: 25px;
  cursor: pointer;
  img {
    width: 30px;
    height: 30px;
    border-radius: 30px;
    margin-right: 8px;
  }
  div {
    display: flex;
    flex-direction: column;
    width: 208px;
    span {
      margin-bottom: 2px;
      font-size: 14px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      color: #777;
    }
    .nickname {
      font-weight: 700;
    }
    .recentMessage {
      font-weight: 400;
    }
  }
`;

const BoardInfo = styled.div`
  padding: 18px 24px;
  border: 1px solid #ededed;
  display: flex;
  img {
    width: 36px;
    height: 36px;
    border-radius: 5px;
    margin-right: 14px;
  }
  div {
    display: flex;
    flex-direction: column;
    font-size: 10px;
    .boardTitle {
      color: #ebebeb;
      background: #8b8585;
      width: 200px;
      padding: 1px 3px;
    }
    .rentalfee {
      color: #777;
      strong {
        font-size: 14px;
        margin-right: 3px;
      }
    }
  }
`;

const Blank = styled.div`
  width: 36px;
  height: 36px;
`;

const MessageField = styled.div`
  padding: 15px 24px;
  overflow-y: auto;
  max-height: 430px;
`;

const DateNotice = styled.div`
  position: relative;
  margin: 23px 0px;
  div {
    width: 100%;
    height: 1px;
    background-color: #dedede;
  }
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 10;
    transform: translate(-50%, -50%);
    padding: 5px 12px;
    background-color: #fdfdfd;
    font-size: 14px;
    font-weight: 500;
    color: #999;
  }
`;

const MyMessageCard = styled.div`
  display: flex;
  width: 386px;
  margin-left: auto;
  align-items: flex-end;
  .time {
    margin: 0 5px 13px 0;
    font-size: 11px;
    color: #999;
  }
  p {
    width: 335px;
    box-sizing: border-box;
    margin-top: 8px;
    margin-left: auto;
    border-radius: 10px 0 10px 10px;
    padding: 11px 13px;
    font-size: 14px;
    background-color: #ededed;
    color: #777;
  }
`;

const PartnersMessageCard = styled.div`
  display: flex;
  img {
    width: 30px;
    height: 30px;
    margin-right: 7px;
    border-radius: 15px;
    background-color: #c4c4c4;
  }
  span {
    margin-bottom: 5px;
    font-size: 14px;
    color: #777;
  }
  .flex {
    display: flex;
    width: 386px;
    align-items: flex-end;
  }
  p {
    width: 335px;
    box-sizing: border-box;
    margin-top: 8px;
    border-radius: 0 10px 10px 10px;
    padding: 11px 13px;
    font-size: 14px;
    background-color: #ededed;
    color: #777;
  }
  .time {
    margin: 0 0 13px 5px;
    font-size: 11px;
    color: #999;
  }
`;

const MessageBar = styled.div`
  position: absolute;
  display: flex;
  bottom: 18px;
  left: 24px;
  z-index: 100;
  input {
    width: 675px;
    height: 48px;
    box-sizing: border-box;
    margin-right: 8px;
    border-radius: 10px;
    border: none;
    padding: 0 48px;
    background: #ededed;
    font-size: 18px;
  }
  button {
    width: 116px;
    height: 48px;
    box-sizing: border-box;
    border-radius: 10px;
    border: none;
    background-color: #8c8c8c;
    font-size: 14px;
    font-weight: 600;
    color: #f2f2f2;
    cursor: pointer;
  }
`;

export default PersonalChat;
