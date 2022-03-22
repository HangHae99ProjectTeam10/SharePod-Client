import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
  ButtonsWrapper,
  ContentWrapper,
  Logo,
  MoreVertButton,
  MyInfoWrapper,
  MyNickName,
  MyProductCardWrapper,
  MyProductListBox,
  ProductDailyRentalFee,
  ProductImg,
  ProductInfoWrapper,
  ProductMapData,
  ProductTitle,
  ProfileImg,
  RadioButtonWrapper,
  ServicePreparingInner,
  ServicePreparingWrapper,
  TextInfoDataWrapper,
  TextInfoWrapper,
  ToWritePageButton,
  Wrapper,
} from "./MyProduct.style";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import BasicPopover from "components/PopOver";

const MyProduct = () => {
  const history = useHistory();
  const [pageViews, setPageViews] = useState("product");
  const handleRadioButton = (e) => {
    setPageViews(e.target.value);
    console.log(pageViews);
  };
  const myPageData = useSelector(({ myPage }) => myPage.myPageData);
  const userInfo = myPageData.userInfo;
  const MyBoardList = myPageData.userMyBoard;
  return (
    <Wrapper>
      <h3>내 상품 관리</h3>
      <MyInfoWrapper>
        <ProfileImg src={userInfo.userImg} />
        <TextInfoWrapper>
          <MyNickName>{userInfo.nickName}</MyNickName>
          <TextInfoDataWrapper>
            <span>
              쉐어팟과 함께한지 <strong>53일 째</strong>
            </span>
            <span>
              공유중인 상품 <strong>5 개</strong>
            </span>
          </TextInfoDataWrapper>
        </TextInfoWrapper>
      </MyInfoWrapper>
      <ButtonsWrapper>
        <RadioButtonWrapper>
          <label className={pageViews === "product" ? "checked" : null}>
            내 상품 {MyBoardList.length}
            <input
              type="radio"
              name="myProductSelect"
              value="product"
              hidden
              onChange={handleRadioButton}
            />
          </label>
          <label className={pageViews === "inquiry" ? "checked" : null}>
            상품문의 0
            <input
              type="radio"
              name="myProductSelect"
              value="inquiry"
              hidden
              onChange={handleRadioButton}
            />
          </label>
        </RadioButtonWrapper>
        <ToWritePageButton
          onClick={() => {
            history.push("/product/upload-product");
          }}
        >
          +상품 등록하기
        </ToWritePageButton>
      </ButtonsWrapper>
      <ContentWrapper>
        {pageViews === "product" ? (
          <MyProductListBox>
            <div className="productListBoxInner">
              {MyBoardList.map((p) => {
                return (
                  <MyProductCardWrapper>
                    <ProductImg src={p.firstImg} />
                    <ProductInfoWrapper>
                      <ProductTitle>{p.boardTitle}</ProductTitle>
                      <ProductMapData>
                        <LocationOnOutlinedIcon /> 서울 {userInfo.userRegion}
                      </ProductMapData>
                      <ProductDailyRentalFee>
                        <strong>{p.dailyRentalFee.toLocaleString()}</strong> 원
                        / 일
                      </ProductDailyRentalFee>
                      <div className="MyProductCard_ProductInfoBox_ButtonsBox">
                        <button className="edit">게시글 수정</button>
                        <button className="confirm">거래 요청 확인</button>
                      </div>
                    </ProductInfoWrapper>
                    <MoreVertButton>
                      <BasicPopover></BasicPopover>
                    </MoreVertButton>
                  </MyProductCardWrapper>
                );
              })}
            </div>
          </MyProductListBox>
        ) : (
          <ServicePreparingWrapper>
            <ServicePreparingInner>
              <Logo></Logo>
              <h4>서비스 준비중입니다. 곧 만나요!</h4>
              <p>
                현재 페이지를 준비하고 있으니 조금만 기다려주세요. 감사합니다.
              </p>
            </ServicePreparingInner>
          </ServicePreparingWrapper>
        )}
      </ContentWrapper>
    </Wrapper>
  );
};

export default MyProduct;
