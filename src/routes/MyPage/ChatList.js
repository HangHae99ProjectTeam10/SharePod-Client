import React from "react";
import {
  ChatCard,
  ChatCardSide,
  ChatCardTextWrapper,
  ChatListWrapper,
  ChatPartnerInfo,
  ChatPartnerProfileImg,
  HorizontalLine,
  Wrapper,
} from "./ChatList.style";

const ChatList = () => {
  const myChatList = [
    {
      userImg:
        "https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_960_720.jpg",
      nickname: "나눔나눔",
      mapData: "동대문구",
      recentMessage:
        "감사합니다, 깨끗하게 쓰고 반납하도록 하겠습니다. 그런데 혹시 사용법 확인할 수 있는 사이트가 있을까요?",
      createdAt: "2022.03.14",
      imageUrl1:
        "https://cdn.pixabay.com/photo/2019/12/10/05/56/cyber-glasses-4685055_960_720.jpg",
    },
    {
      userImg:
        "https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_960_720.jpg",
      nickname: "나눔나눔",
      mapData: "동대문구",
      recentMessage:
        "감사합니다, 깨끗하게 쓰고 반납하도록 하겠습니다. 그런데 혹시 사용법 확인할 수 있는 사이트가 있을까요?",
      createdAt: "2022.03.14",
      imageUrl1:
        "https://cdn.pixabay.com/photo/2019/12/10/05/56/cyber-glasses-4685055_960_720.jpg",
    },
    {
      userImg:
        "https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_960_720.jpg",
      nickname: "나눔나눔",
      mapData: "동대문구",
      recentMessage:
        "감사합니다, 깨끗하게 쓰고 반납하도록 하겠습니다. 그런데 혹시 사용법 확인할 수 있는 사이트가 있을까요?",
      createdAt: "2022.03.14",
      imageUrl1:
        "https://cdn.pixabay.com/photo/2019/12/10/05/56/cyber-glasses-4685055_960_720.jpg",
    },
    {
      userImg:
        "https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_960_720.jpg",
      nickname: "나눔나눔",
      mapData: "동대문구",
      recentMessage:
        "감사합니다, 깨끗하게 쓰고 반납하도록 하겠습니다. 그런데 혹시 사용법 확인할 수 있는 사이트가 있을까요?",
      createdAt: "2022.03.14",
      imageUrl1:
        "https://cdn.pixabay.com/photo/2019/12/10/05/56/cyber-glasses-4685055_960_720.jpg",
    },
    {
      userImg:
        "https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_960_720.jpg",
      nickname: "나눔나눔",
      mapData: "동대문구",
      recentMessage:
        "감사합니다, 깨끗하게 쓰고 반납하도록 하겠습니다. 그런데 혹시 사용법 확인할 수 있는 사이트가 있을까요?",
      createdAt: "2022.03.14",
      imageUrl1:
        "https://cdn.pixabay.com/photo/2019/12/10/05/56/cyber-glasses-4685055_960_720.jpg",
    },
    {
      userImg:
        "https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_960_720.jpg",
      nickname: "나눔나눔",
      mapData: "동대문구",
      recentMessage:
        "감사합니다, 깨끗하게 쓰고 반납하도록 하겠습니다. 그런데 혹시 사용법 확인할 수 있는 사이트가 있을까요?",
      createdAt: "2022.03.14",
      imageUrl1:
        "https://cdn.pixabay.com/photo/2019/12/10/05/56/cyber-glasses-4685055_960_720.jpg",
    },
  ];
  return (
    <Wrapper>
      <h3>1 : 1 채팅 내역</h3>
      <HorizontalLine />
      <ChatListWrapper>
        {myChatList.map((p, idx) => {
          return (
            <ChatCard key={idx}>
              <ChatPartnerProfileImg src={p.userImg} />
              <ChatCardTextWrapper>
                <ChatPartnerInfo>
                  <span className="nickname">{p.nickname}</span>
                  <span className="mapData">서울 {p.mapData}</span>
                </ChatPartnerInfo>
                <p>{p.recentMessage}</p>
              </ChatCardTextWrapper>
              <ChatCardSide>
                <span>{p.createdAt}</span>
                <img src={p.imageUrl1} />
              </ChatCardSide>
            </ChatCard>
          );
        })}
      </ChatListWrapper>
    </Wrapper>
  );
};

export default ChatList;
