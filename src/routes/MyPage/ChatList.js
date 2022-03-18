import React from "react";

import styled from "styled-components";

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
    <ChatListWrap>
      {myChatList.map((p) => {
        return (
          <ChatCard>
            <img className="userImg" src={p.userImg} />
            <div className="chatContent">
              <div className="partnerInfo">
                <span className="nickname">{p.nickname}</span>
                <span className="mapData">서울 {p.mapData}</span>
              </div>
              <p>{p.recentMessage}</p>
            </div>
            <div className="cardSide">
              <span>{p.createdAt}</span>
              <img src={p.imageUrl1} />
            </div>
          </ChatCard>
        );
      })}
    </ChatListWrap>
  );
};

const ChatListWrap = styled.div``;

const ChatCard = styled.div`
  display: flex;
  width: 730px;
  margin-bottom: 32px;
  .userImg {
    width: 65px;
    height: 65px;
    border-radius: 33px;
  }
  .chatContent {
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    .nickname {
      font-size: 18px;
      color: #323232;
    }
    .mapData {
      margin-left: 8px;
      font-size: 14px;
      color: #777;
    }
    p {
      width: 350px;
      box-sizing: border-box;
      font-size: 14px;
      color: #555;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  .cardSide {
    display: flex;
    margin-left: auto;
    span {
      margin: 8px 30px 0 0;
      font-size: 14px;
      font-weight: 350;
      color: #777;
    }
    img {
      width: 65px;
      height: 65px;
      border-radius: 10px;
    }
  }
`;

export default ChatList;
