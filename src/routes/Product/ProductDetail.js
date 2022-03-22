import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box, Divider, Tab, Tabs } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import LocationOnIcon from "@mui/icons-material/LocationOn";

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
  ProductDetailDesWrapper,
  ProductDetailImgWrapper,
  ProductDetailWrapper,
  ProductInfoBox,
  ProductListWrapper,
  VideoRadioOption,
  Wrapper,
} from "./ProductDetail.style";
import { useDispatch, useSelector } from "react-redux";
import { getOneProductDetail } from "redux/actions/Product";
import ProductService from "services/product";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

// /board/{boardId}?userId={userId}
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

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

  const dispatch = useDispatch();
  const { id } = useParams();
  const { product_detail } = useSelector(({ product }) => product);
  const {
    boardQuaility,
    boardRegion,
    boardTag,
    category,
    contents,
    dailyRentalFee,
    firstImgUrl,
    lastImgUrl,
    likeCount,
    liked,
    modifiedAt,
    nickName,
    originPrice,
    secondImgUrl,
    sellerImg,
    sellerRegion,
    title,
    videoUrl,
  } = product_detail;
  console.log("prodcut-detail", product_detail);
  const handleSelectedImg = (e) => {
    setSelectedImg(e.target.value);
  };

  useEffect(() => {
    dispatch(ProductService.getOneProductDetail(id));
  }, []);

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

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <Wrapper>
      <div>
        <HomeIcon />
        <span> 컴퓨터 게임</span>
      </div>

      <ProductDetailWrapper>
        <ProductDetailImgWrapper>
          <ImgRadioBox>
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
            <ProductListWrapper>
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
            </ProductListWrapper>
          </ImgRadioBox>
        </ProductDetailImgWrapper>
        <ProductInfoBox>
          <InfoBoxTop>
            <section>
              <h2>{title}</h2>
              <div className="info_top_price_wrapper">
                <p className="info_top_price">{dailyRentalFee}</p>
                <p className="info_top_unit">원 / 1일 대여기준 </p>
              </div>
              <Divider />
              <div className="info_top_reaction">
                <FavoriteIcon fontSize="small" />
                <span>{likeCount}</span>
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
            <div className="info_bottom_left">
              <div className="profile_box">
                <img src={sellerImg} alt="" />
                <div className="profile_info">
                  <p>{nickName}</p>
                  <div className="profile_info_location">
                    <LocationOnIcon />
                    <span>서울 {sellerRegion}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="info_bottom_right">
              <div className="info_box">
                <span className="info_bottom_right_title">상품상태</span>
                <span className="info_bottom_right_desc">{boardQuaility}</span>
              </div>
              <div className="info_box">
                <span className="info_bottom_right_title">상품원가</span>
                <span className="info_bottom_right_desc">{originPrice}</span>
              </div>
              <div className="info_box">
                <span className="info_bottom_right_title">거래지역</span>
                <span className="info_bottom_right_desc">{boardRegion}</span>
              </div>
              <div className="info_box">
                <span className="info_bottom_right_title">상품태그</span>
                <span className="info_bottom_right_tag">#{category}</span>
                <span className="info_bottom_right_tag">#{boardRegion}</span>
              </div>
            </div>
          </InfoBoxMiddle>
          <InfoBoxBottom>
            <div className="info_middle_btns">
              <button className="info_middle_btn_1">대여하기</button>
              <button className="info_middle_btn_2">1:1 채팅하기</button>
            </div>
          </InfoBoxBottom>
        </ProductInfoBox>
      </ProductDetailWrapper>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="상세설명" {...a11yProps(0)} />
            <Tab label="상품문의" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <ProductDetailDesWrapper>
            <div className="desc_box_left">
              <p>상품정보</p>
              <div>{contents}</div>
              <p>카테고리</p>
              <div>{category}</div>
            </div>
            <div className="desc_box_right">
              <p>대여 시 주의사항</p>
              <div>
                [시간엄수] 픽업 및 반납일정을 반드시 지켜주시고 부득이하게
                약속을 변경해야하는 상황이라면 미리 연략을 취해 주세요. 예정된
                거래 시작 24시간 전부터는 예약을 취소하면 대여료가 환불되지
                않습니다. 제품이 정상적으로 작동되는지 구외 다른 이상은 없는지,
                렌터와 오너가 함께 꼼꼼이 확인한 다음 거래를 시작하고
                종료하세요. 물론 구성품도 빠짐없이 체크를 하셔야 합니다. [파손
                및 분실주의] 공유하는 사람의 소중한 물건을 조심해서 사용해
                주세요. 대여 중 파손 및 고장이 발생하거나 제품을 분실하면
                공유하는 사람에게 적정 비용(수리비, 또는 상품 중고가)를
                보상하셔야 합니다.
              </div>
            </div>
          </ProductDetailDesWrapper>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
      </Box>
    </Wrapper>
  );
};

export default ProductDetail;
