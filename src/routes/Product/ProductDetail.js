import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ProductDetail = () => {
  const board = {
    title: "테스트용 게시글",
    videourl:
      "https://ak.picdn.net/shutterstock/videos/1072000261/preview/stock-footage-empty-green-screen-display-laptop-for-watching-and-paste-background-e-business-blog-or-gaming-app.webm",
    imgurl1:
      "https://cdn.pixabay.com/photo/2017/10/10/21/47/laptop-2838921_1280.jpg",
    imgurl2:
      "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
    imgurl3:
      "https://cdn.pixabay.com/photo/2015/08/13/01/00/keyboard-886462_1280.jpg",
    contents: "테스트용 컨텐츠. 게시글에 대한 설명을 적어놓는 부분입니다.",
    originprice: 20000000,
    dailyrentalfee: 20000,
    nickname: "테스터",
    userimg:
      "https://media.vlpt.us/images/apphia39/post/fac4f95f-1589-4696-8cfd-53b27685206d/github.png",
    mapdata: "구로구",
    category: "디지털 가전",
    boardquility: "A",
    isliked: true,
    likecount: 10,
    modifiedat: "2022-03-07T01:31:44+09:00",
  };

  const [selectedImg, setSelectedImg] = useState(null);
  const [likeCnt, setLikeCnt] = useState(board.likecount);
  const [userLiked, setUserLiked] = useState(board.isliked);

  const handleSelectedImg = (e) => {
    setSelectedImg(e.target.value);
  };

  useEffect(() => {
    setUserLiked(board.isliked);
  }, [board.isliked]);

  const addLike = () => {
    setUserLiked(true);
    setLikeCnt(likeCnt + 1);
  };

  const cancleLike = () => {
    setUserLiked(false);
    setLikeCnt(likeCnt - 1);
  };

  const userInfo = {
    nickname: "테스터",
  };

  return (
    <ProductDetailWrap>
      <SelectBox>
        <RadioBox>
          <Label>
            <Video>
              <source src={board.videourl}></source>
            </Video>
            <input
              type="radio"
              value="0"
              name="select"
              hidden
              onChange={handleSelectedImg}
            ></input>
          </Label>
          <Label
            style={{
              backgroundImage: `url("${board.imgurl1}")`,
            }}
          >
            <input
              type="radio"
              value="1"
              name="select"
              hidden
              onChange={handleSelectedImg}
            ></input>
          </Label>
          <Label
            style={{
              backgroundImage: `url("${board.imgurl2}")`,
            }}
          >
            <input
              type="radio"
              value="2"
              name="select"
              hidden
              onChange={handleSelectedImg}
            ></input>
          </Label>
          <Label
            style={{
              backgroundImage: `url("${board.imgurl3}")`,
            }}
          >
            <input
              type="radio"
              value="3"
              name="select"
              hidden
              onChange={handleSelectedImg}
            ></input>
          </Label>
        </RadioBox>
        <ZoomBox>
          {selectedImg === "0" ? (
            <Video controls>
              <source src={board.videourl}></source>
            </Video>
          ) : selectedImg === "1" ? (
            <Image
              style={{
                backgroundImage: `url("${board.imgurl1}")`,
              }}
            />
          ) : selectedImg === "2" ? (
            <Image
              style={{
                backgroundImage: `url("${board.imgurl2}")`,
              }}
            />
          ) : (
            <Image
              style={{
                backgroundImage: `url("${board.imgurl3}")`,
              }}
            />
          )}
        </ZoomBox>
      </SelectBox>
      <ProductInfoBox>
        <div>
          <div>
            <h2>{board.title}</h2>
            <span>
              <strong>{board.dailyrentalfee.toLocaleString()}</strong> 원/1일
              대여 기준
            </span>
          </div>
          <Horizon />
          <div>
            <span className="like">❤ {likeCnt}</span>
            <span className="time">🕑 3일 전</span>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              {userLiked ? (
                <Button>
                  <span style={{ color: "red" }}>❤</span> 찜하기
                </Button>
              ) : (
                <Button>
                  <span>❤</span> 찜하기
                </Button>
              )}
            </li>
            <li>
              <Button>📦 거래 요청하기 </Button>
            </li>
            <li>
              <Button>🗨 1 : 1 채팅하기 </Button>
            </li>
          </ul>
        </nav>
        <WriterInfoBox>
          <h3>판매자 정보</h3>
          <div>
            <ProfileImage
              style={{
                backgroundImage: `url("${board.userimg}")`,
              }}
            ></ProfileImage>
            <div className="textInfo">
              <span>{board.nickname}</span>
              <span>🌐 서울시 {board.mapdata}</span>
            </div>
          </div>
        </WriterInfoBox>
      </ProductInfoBox>
    </ProductDetailWrap>
  );
};

const ProductDetailWrap = styled.section`
  padding-top: 70px;
  display: flex;
`;

const SelectBox = styled.div`
  display: flex;
  height: 360px;
`;

const RadioBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 151px;
  margin-right: 30px;
`;

const Label = styled.label`
  display: inline-block;
  width: 68px;
  height: 68px;
  border-radius: 8px;
  background-size: cover;
  overflow: hidden;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: fill;
`;

const Image = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  background-size: cover;
`;

const ZoomBox = styled.div`
  display: inline-block;
  width: 457px;
  height: 360px;
`;

const ProductInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 30px;
  h2 {
    font-size: 24px;
    color: #777;
    margin-bottom: 6px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul li {
    display: inline-block;
    margin-right: 30px;
  }
  span strong {
    font-size: 36px;
    font-weight: 700;
    color: #777;
  }
  .like,
  .time {
    font-size: 14px;
    margin-right: 10px;
  }
`;

const Horizon = styled.div`
  width: 263px;
  height: 1px;
  background-color: #c4c4c4;
  margin: 12px 0px;
`;

const Button = styled.button`
  padding: 15px 46px;
`;

const WriterInfoBox = styled.div`
  padding: 12px 340px 14px 22px;
  border: 1px solid #f0f0f0;
  div {
    display: flex;
  }
  .textInfo {
    flex-direction: column;
    justify-content: space-around;
    margin-left: 16px;
  }
`;

const ProfileImage = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  background-size: cover;
  margin: 4px;
`;
export default ProductDetail;
