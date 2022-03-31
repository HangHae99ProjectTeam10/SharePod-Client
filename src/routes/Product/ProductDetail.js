import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box, Divider, Tab, Tabs } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";

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
  ProductCategory,
  ProductDetailDesWrapper,
  ProductDetailImgWrapper,
  ProductDetailWrapper,
  ProductInfoBox,
  ProductListWrapper,
  useStyles,
  VideoRadioOption,
  Wrapper,
} from "./ProductDetail.style";
import { useDispatch, useSelector } from "react-redux";
import ProductService from "services/product";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { history } from "redux/store";
import MyPageService from "services/myPage";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Box
      my={2}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Box>
  );
};

const ProductDetail = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product_detail } = useSelector(({ product }) => product);
  const { authUser } = useSelector(({ auth }) => auth);

  const btnDisabled = authUser?.nickname === product_detail?.nickName;

  const [selectedImg, setSelectedImg] = useState("0");

  const handleSelectedImg = (e) => {
    setSelectedImg(e.target.value);
  };

  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  useEffect(() => {
    dispatch(ProductService.getOneProductDetail(id));
  }, [dispatch, id]);

  const onHandleFavoriteBtn = (boardId) => {
    if (!authUser) {
      window.alert("로그인을 해주세요");
      history.push("/auth/signin");
    } else {
      dispatch(ProductService.setFavoriteIndetail(boardId));
    }
  };

  const moveToBorrow = () => {
    if (!authUser) {
      window.alert("로그인을 해주세요");
      history.push("/auth/signin");
    } else {
      history.push(
        `/reservation/request/?${product_detail?.title}&${
          product_detail?.imgFiles[0]
        }&${product_detail?.nickName}&${
          product_detail?.sellerImg
        }&${window.location.pathname.split("/").pop()}`
      );
    }
  };

  const moveToChat = () => {
    if (!authUser) {
      window.alert("로그인을 해주세요");
      history.push("/auth/signin");
    } else {
      /**TODO:빌리는 작업 */
      dispatch(MyPageService.makeChatRoom(id));
    }
  };
  return (
    <Wrapper>
      <ProductCategory>
        <HomeIcon />
        <span> 컴퓨터 게임</span>
      </ProductCategory>

      <ProductDetailWrapper>
        <ProductDetailImgWrapper>
          <ImgRadioBox>
            <ImgThumbnail>
              {selectedImg === "0" ? (
                <ImgThumbnailVideo controls autoplay>
                  <source src={product_detail?.videoUrl}></source>
                </ImgThumbnailVideo>
              ) : (
                <ImgThumbnailVideoImg
                  src={product_detail?.imgFiles[selectedImg - 1]}
                  alt="this is thumbnail image"
                />
              )}
            </ImgThumbnail>
            <ProductListWrapper>
              <Box>
                <ImgHiddenRadioBtn
                  type="radio"
                  name="select"
                  id="thisisvideo"
                  onChange={handleSelectedImg}
                  value={0}
                />
                <label htmlFor="thisisvideo">
                  <VideoRadioOption>
                    <VideoCallOutlinedIcon fontSize="large" />
                  </VideoRadioOption>
                </label>
              </Box>
              {product_detail?.imgFiles?.map((p, index) => {
                return (
                  <Box key={p}>
                    <ImgHiddenRadioBtn
                      type="radio"
                      name="select"
                      id={p}
                      onChange={handleSelectedImg}
                      value={index + 1}
                    />
                    <label htmlFor={p}>
                      <ImgRadioOption src={p} alt="this is image" />
                    </label>
                  </Box>
                );
              })}
            </ProductListWrapper>
          </ImgRadioBox>
        </ProductDetailImgWrapper>
        <ProductInfoBox>
          <InfoBoxTop>
            <section>
              <h2>{product_detail?.title}</h2>
              <div className="info_top_price_wrapper">
                <p className="info_top_price">
                  {product_detail?.dailyRentalFee?.toLocaleString()}
                </p>
                <p className="info_top_unit">원 / 1일 대여기준 </p>
              </div>
              <Divider />
              <div className="info_top_reaction">
                <FavoriteIcon fontSize="small" />
                <span>{product_detail?.likeCount}</span>
                <WatchLaterIcon fontSize="small" />
                <span>10시간 전</span>
              </div>
            </section>

            <div
              className="info_top_favoritebtn"
              onClick={() => {
                onHandleFavoriteBtn(id);
              }}
            >
              {product_detail?.liked ? (
                <FavoriteIcon
                  fontSize="small"
                  className={classes.favoriteBtn}
                />
              ) : (
                <FavoriteBorderIcon
                  fontSize="small"
                  className={classes.favoriteBtn}
                />
              )}
            </div>
          </InfoBoxTop>

          <InfoBoxMiddle>
            <div className="info_bottom_left">
              <div className="profile_box">
                <img src={product_detail?.sellerImg} alt="" />
                <div className="profile_info">
                  <p>{product_detail?.nickName}</p>
                  <div className="profile_info_location">
                    <LocationOnIcon />
                    <span>서울 {product_detail?.sellerRegion}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="info_bottom_right">
              <div className="info_box">
                <span className="info_bottom_right_title">상품상태</span>
                <span className="info_bottom_right_desc">
                  {product_detail?.boardQuaility}
                </span>
              </div>
              <div className="info_box">
                <span className="info_bottom_right_title">상품원가</span>
                <span className="info_bottom_right_desc">
                  {product_detail?.originPrice?.toLocaleString()}
                </span>
              </div>
              <div className="info_box">
                <span className="info_bottom_right_title">거래지역</span>
                <span className="info_bottom_right_desc">
                  {product_detail?.boardRegion}
                </span>
              </div>
              <div className="info_box">
                <span className="info_bottom_right_title">상품태그</span>
                <span className="info_bottom_right_tag">
                  #{product_detail?.category}
                </span>
                <span className="info_bottom_right_tag">
                  #{product_detail?.boardRegion}
                </span>
              </div>
            </div>
          </InfoBoxMiddle>
          <InfoBoxBottom>
            {!btnDisabled && (
              <div className="info_middle_btns">
                <button className="info_middle_btn_1" onClick={moveToBorrow}>
                  대여하기
                </button>
                <button className="info_middle_btn_2" onClick={moveToChat}>
                  1:1 채팅하기
                </button>
              </div>
            )}
          </InfoBoxBottom>
        </ProductInfoBox>
      </ProductDetailWrapper>

      <Box sx={{ width: "100%" }} my={3}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="basic tabs example"
          >
            <Tab label="상세설명" {...a11yProps(0)} />
            <Tab label="상품문의" {...a11yProps(1)} />
          </Tabs>
        </Box>

        <TabPanel value={tabValue} index={0}>
          <ProductDetailDesWrapper>
            <div className="desc_box_left">
              <p>상품정보</p>
              <div>{product_detail?.contents}</div>
              <p>카테고리</p>
              <div>{product_detail?.category}</div>
            </div>
            <div className="desc_box_right">
              <p>대여 시 주의사항</p>
              <div>
                [시간엄수] 픽업 및 반납일정을 반드시 지켜주시고 부득이하게
                약속을 변경해야하는 상황이라면 미리 연략을 취해 주세요. 예정된
                거래 시작 24시간 전부터는 예약을 취소하면 대여료가 환불되지
                않습니다. 제품이 정상적으로 작동되는지 구외 다른 이상은 없는지,
                렌터와 오너가 함께 꼼꼼이 확인한 다음 거래를 시작하고
                종료하세요. 물론 구성품도 빠짐없이 체크를 하셔야 합니다. <br />
                <br />
                [파손 및 분실주의] 공유하는 사람의 소중한 물건을 조심해서 사용해
                주세요. 대여 중 파손 및 고장이 발생하거나 제품을 분실하면
                공유하는 사람에게 적정 비용(수리비, 또는 상품 중고가)를
                보상하셔야 합니다.
              </div>
            </div>
          </ProductDetailDesWrapper>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          Item Two
        </TabPanel>
      </Box>
    </Wrapper>
  );
};

export default ProductDetail;
