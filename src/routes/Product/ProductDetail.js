import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import {
  ImgHiddenRadioBtn,
  ImgRadioBox,
  ImgRadioOption,
  ImgThumbnail,
  ImgThumbnailVideo,
  ImgThumbnailVideoImg,
  InfoBoxBottom,
  InfoBoxMiddle,
  InfoBoxTop,
  ProductDetailImgWrapper,
  ProductDetailWrapper,
  ProductInfoBox,
  VideoRadioOption,
  Wrapper,
} from "./ProductDetail.style";

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

  const [selectedImg, setSelectedImg] = useState("0");
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
  const product_img_list = [
    {
      src: "https://ak.picdn.net/shutterstock/videos/1072000261/preview/stock-footage-empty-green-screen-display-laptop-for-watching-and-paste-background-e-business-blog-or-gaming-app.webm",
      id: 0,
    },
    {
      src: "https://cdn.pixabay.com/photo/2017/10/10/21/47/laptop-2838921_1280.jpg",
      id: 1,
    },
    {
      src: "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      id: 2,
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/08/13/01/00/keyboard-886462_1280.jpg",
      id: 3,
    },
  ];
  return (
    <Wrapper>
      <div>
        <HomeIcon />
        <span>{`>`} 컴퓨터 게임</span>
      </div>

      <ProductDetailWrapper>
        <ProductDetailImgWrapper>
          <ImgRadioBox>
            {product_img_list.map((p) => {
              if (p.id === 0) {
                return (
                  <Box key={p.id}>
                    <ImgHiddenRadioBtn
                      type="radio"
                      name="select"
                      id={p.id}
                      onChange={handleSelectedImg}
                      value={p.id}
                    />
                    <label htmlFor={p.id}>
                      <VideoRadioOption>
                        <source src={board.videourl}></source>
                      </VideoRadioOption>
                    </label>
                  </Box>
                );
              } else {
                return (
                  <Box key={p.id}>
                    <ImgHiddenRadioBtn
                      type="radio"
                      name="select"
                      id={p.id}
                      onChange={handleSelectedImg}
                      value={p.id}
                    />
                    <label htmlFor={p.id}>
                      <ImgRadioOption src={p.src} alt="this is image" />
                    </label>
                  </Box>
                );
              }
            })}
          </ImgRadioBox>
          <ImgThumbnail>
            {selectedImg === "0" ? (
              <ImgThumbnailVideo controls>
                <source src={product_img_list[selectedImg]?.src}></source>
              </ImgThumbnailVideo>
            ) : (
              <ImgThumbnailVideoImg
                src={product_img_list[selectedImg]?.src}
                alt="this is thumbnail image"
              />
            )}
          </ImgThumbnail>
        </ProductDetailImgWrapper>
        <ProductInfoBox>
          <InfoBoxTop>
            <section>
              <h2>닌텐도 스위치 동물의 숲 에디션</h2>
              <div>
                <p className="info_top_price">30,000</p>
                <p className="info_top_unit">원 / 1일 대여기준 </p>
              </div>
              <div className="info_top_reaction">
                <FavoriteIcon fontSize="small" />
                <span>10</span>
                <WatchLaterIcon fontSize="small" />
                <span>10시간 전</span>
              </div>
            </section>
            <div className="info_top_favoritebtn">
              <FavoriteBorderIcon
                fontSize="small"
                style={{
                  color: "#4A2FC3",
                }}
              />
            </div>
          </InfoBoxTop>
          <InfoBoxMiddle>
            <div className="info_middle_btns">
              <button className="info_middle_btn_1">거래 요청하기</button>
              <button className="info_middle_btn_2">1:1 채팅하기</button>
            </div>
          </InfoBoxMiddle>
          <InfoBoxBottom>
            <div className="info_bottom_left">
              <p className="info_bottom_left_title">판매자 정보</p>
              <hr />
              <div className="profile_box">
                <img
                  src="https://i.pinimg.com/564x/e6/58/6c/e6586c81416d22e31180f92b58cc9cfe.jpg"
                  alt=""
                />
                <div className="profile_info">
                  <p>레몬티</p>
                  <div className="profile_info_location">
                    <LocationOnIcon />
                    <span>서울 강서구</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="info_bottom_right">
              <p className="info_bottom_right_title">상품 정보</p>
              <hr />
              <div className="info_box">
                <div>
                  <div className="info_box_title">
                    <LocationOnIcon />
                    <span>거래지역</span>
                  </div>
                  <p>서울시 강남구 삼성동</p>
                </div>
                <div>
                  <div className="info_box_title">
                    <LibraryBooksIcon />
                    <span>카테고리</span>
                  </div>
                  <p>컴퓨터/게임</p>
                </div>
                <div>
                  <div className="info_box_title">
                    <LocalOfferIcon />
                    <span>태그</span>
                  </div>
                  <p>#강남구</p>
                </div>
              </div>
            </div>
          </InfoBoxBottom>
        </ProductInfoBox>
      </ProductDetailWrapper>
    </Wrapper>
  );
};

export default ProductDetail;
