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
import {
  Logo,
  ServicePreparingInner,
  ServicePreparingWrapper,
} from "routes/MyPage/MyProduct.style";
import { getSubMinutes } from "components/common/getDate";
import { LoaderWrapper } from "./ProductDetail.style";
import PageLoader from "components/common/PageLoader";

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
      window.alert("???????????? ????????????");
      history.push("/auth/signin");
    } else {
      dispatch(ProductService.setFavoriteIndetail(boardId));
    }
  };

  const moveToBorrow = () => {
    if (!authUser) {
      window.alert("???????????? ????????????");
      history.push("/auth/signin");
    } else {
      history.push(`/reservation/request/${id}`);
    }
  };

  const moveToChat = () => {
    if (!authUser) {
      window.alert("???????????? ????????????");
      history.push("/auth/signin");
    } else {
      /**TODO:????????? ?????? */
      dispatch(MyPageService.makeChatRoom(id));
    }
  };

  // Infinity Scroll
  const [target, setTarget] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [firstLoading, setFirstLoading] = useState(false);

  const getMoreItem = async () => {
    setIsLoaded(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoaded(false);
    setFirstLoading(true);
  };

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoaded) {
      await getMoreItem();
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  return (
    <Wrapper>
      <LoaderWrapper ref={setTarget} className="Target-Element">
        {isLoaded && <PageLoader />}
      </LoaderWrapper>
      {firstLoading && (
        <>
          <ProductCategory>
            <HomeIcon />
            <span> ????????? ??????</span>
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
                    <p className="info_top_unit">??? / 1??? ???????????? </p>
                  </div>
                  <Divider />
                  <div className="info_top_reaction">
                    <FavoriteIcon fontSize="small" />
                    <span>{product_detail?.likeCount}</span>
                    <WatchLaterIcon fontSize="small" />
                    <span>{getSubMinutes(product_detail?.modifiedAt)}???</span>
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
                        <span>?????? {product_detail?.sellerRegion}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="info_bottom_right">
                  <div className="info_box">
                    <span className="info_bottom_right_title">????????????</span>
                    <span className="info_bottom_right_desc">
                      {product_detail?.boardQuaility}
                    </span>
                  </div>
                  <div className="info_box">
                    <span className="info_bottom_right_title">????????????</span>
                    <span className="info_bottom_right_desc">
                      {product_detail?.originPrice?.toLocaleString()}
                    </span>
                  </div>
                  <div className="info_box">
                    <span className="info_bottom_right_title">????????????</span>
                    <span className="info_bottom_right_desc">
                      {product_detail?.boardRegion}
                    </span>
                  </div>
                  <div className="info_box">
                    <span className="info_bottom_right_title">????????????</span>
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
                    <button
                      className="info_middle_btn_1"
                      onClick={moveToBorrow}
                    >
                      ????????????
                    </button>
                    <button className="info_middle_btn_2" onClick={moveToChat}>
                      1:1 ????????????
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
                <Tab label="????????????" {...a11yProps(0)} />
                <Tab label="????????????" {...a11yProps(1)} />
              </Tabs>
            </Box>

            <TabPanel value={tabValue} index={0}>
              <ProductDetailDesWrapper>
                <div className="desc_box_left">
                  <p>????????????</p>
                  <div>{product_detail?.contents}</div>
                  <p>????????????</p>
                  <div>{product_detail?.category}</div>
                </div>
                <div className="desc_box_right">
                  <p>?????? ??? ????????????</p>
                  <div>
                    [????????????] ?????? ??? ??????????????? ????????? ??????????????? ???????????????
                    ????????? ?????????????????? ??????????????? ?????? ????????? ?????? ?????????.
                    ????????? ?????? ?????? 24?????? ???????????? ????????? ???????????? ????????????
                    ???????????? ????????????. ????????? ??????????????? ??????????????? ?????? ??????
                    ????????? ?????????, ????????? ????????? ?????? ????????? ????????? ?????? ?????????
                    ???????????? ???????????????. ?????? ???????????? ???????????? ????????? ?????????
                    ?????????. <br />
                    <br />
                    [?????? ??? ????????????] ???????????? ????????? ????????? ????????? ????????????
                    ????????? ?????????. ?????? ??? ?????? ??? ????????? ??????????????? ?????????
                    ???????????? ???????????? ???????????? ?????? ??????(?????????, ?????? ??????
                    ?????????)??? ??????????????? ?????????.
                  </div>
                </div>
              </ProductDetailDesWrapper>
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
              <ServicePreparingWrapper>
                <ServicePreparingInner>
                  <Logo src="/logo.png"></Logo>
                  <h4>????????? ??????????????????. ??? ?????????!</h4>
                  <p>
                    ?????? ???????????? ???????????? ????????? ????????? ??????????????????.
                    ???????????????.
                  </p>
                </ServicePreparingInner>
              </ServicePreparingWrapper>
            </TabPanel>
          </Box>
        </>
      )}
    </Wrapper>
  );
};

export default ProductDetail;
