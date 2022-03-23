import React from "react";
import {
  Blank,
  BoardInfo,
  BoxHeader,
  ChatField,
  ChatSection,
  ChatSelectBox,
  ChatSelectBoxHeader,
  DateNotice,
  MessageBar,
  MessageField,
  MyMessageCard,
  PartnersMessageCard,
  RecentPartenerCard,
  RecentPartnerBox,
  Wrapper,
} from "./PersonalChat.style";

const PersonalChat = () => {
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
    <Wrapper>
      <h2>🗨 1:1 채팅하기</h2>
      <ChatSection>
        <ChatSelectBox>
          <ChatSelectBoxHeader>
            <h3>{myNickname}</h3>
          </ChatSelectBoxHeader>
          <RecentPartnerBox>
            {recentPartnerList.map((p) => {
              return (
                <RecentPartenerCard>
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
          <MessageField>
            {messageList.map((p, idx, lst) => {
              if (p.nickname === myNickname) {
                return (
                  <>
                    {idx === 0 ? (
                      <DateNotice>
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
                    <DateNotice>
                      <div></div>
                      <span>{p.createAt}</span>
                    </DateNotice>
                  ) : p.createAt !== lst[idx - 1].createAt ? (
                    <DateNotice>
                      <div></div>
                      <span>{p.createAt}</span>
                    </DateNotice>
                  ) : null}
                  <PartnersMessageCard>
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
          </MessageField>
          <MessageBar>
            <input placeholder="메세지를 입력하세요." />
            <button>보내기 ✉</button>
          </MessageBar>
        </ChatField>
      </ChatSection>
    </Wrapper>
  );
};

export default PersonalChat;
