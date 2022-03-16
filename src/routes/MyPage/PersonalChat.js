import React from "react";

import styled from "styled-components";

const PersonalChat = () => {
  const nickname = "다빌려";

  return (
    <PersonalChatWrap>
      <h2>🗨 1:1 채팅하기</h2>
      <ChatSection>
        <ChatSelectBox>
          <BoxHeader>
            <h3>{nickname}</h3>
          </BoxHeader>
        </ChatSelectBox>
        <ChatField>
          <BoxHeader></BoxHeader>
          <MessageBar>
            <input />
            <button></button>
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
`;

const ChatField = styled.div`
  width: 847px;
  background-color: #8c8c8c;
`;

const BoxHeader = styled.div`
  padding: 20px 24px;
  height: 61px;
`;

const MessageBar = styled.div``;

export default PersonalChat;
