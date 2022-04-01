import { format, parseISO } from "date-fns";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { history } from "redux/store";
import MyPageService from "services/myPage";
import {
  ChatCard,
  ChatCardSide,
  ChatCardTextWrapper,
  ChatListWrapper,
  ChatPartnerInfo,
  ChatPartnerProfileImg,
  HorizontalLine,
  NothingPostedInner,
  NothingPostedWrapper,
  Wrapper,
} from "./ChatList.style";

const ChatList = () => {
  const dispatch = useDispatch();
  const { chatList } = useSelector(({ myPage }) => myPage);

  useEffect(() => {
    dispatch(MyPageService.getChatList());
  }, [dispatch]);

  const moveToChatRoom = (chatroomId) => {
    history.push(`/mypage/chat/room/${chatroomId}`);
  };

  return (
    <Wrapper>
      <h3>1 : 1 채팅 내역</h3>
      <HorizontalLine />
      {chatList?.length > 0 ? (
        <>
          <ChatListWrapper>
            {chatList?.map((p, idx) => {
              return (
                <ChatCard
                  key={idx}
                  onClick={() => {
                    moveToChatRoom(p?.chatRoomId);
                  }}
                >
                  <ChatPartnerProfileImg src={p?.otherImg} />
                  <ChatCardTextWrapper>
                    <ChatPartnerInfo>
                      <span className="nickname">{p?.otherNickName}</span>
                      <span className="mapData">서울 {p?.otherRegion}</span>
                    </ChatPartnerInfo>
                    <p>{p?.lastChat}</p>
                  </ChatCardTextWrapper>
                  <ChatCardSide>
                    <span>{format(parseISO(p?.modifiedAt), "yyyy-MM-dd")}</span>
                    <img src={p?.boardImg} alt="" />
                  </ChatCardSide>
                </ChatCard>
              );
            })}
          </ChatListWrapper>
        </>
      ) : (
        <NothingPostedWrapper>
          <NothingPostedInner>
            <p>진행 중인 채팅이 없습니다.</p>
            <button
              onClick={() => {
                history.push("/product/product-search");
              }}
            >
              물품 둘러보기
            </button>
          </NothingPostedInner>
        </NothingPostedWrapper>
      )}
    </Wrapper>
  );
};

export default ChatList;
