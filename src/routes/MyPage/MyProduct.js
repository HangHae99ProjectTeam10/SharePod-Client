import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ButtonsWrapper,
  ContentWrapper,
  HorizontalLine,
  Logo,
  MyInfoWrapper,
  MyNickName,
  MyProductCardWrapper,
  MyProductListBox,
  NothingPostedInner,
  NothingPostedWrapper,
  ProductButtonsWrapper,
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
import { history } from "redux/store";
import MyPageService from "services/myPage";

const MyProduct = () => {
  const dispatch = useDispatch();
  const [pageViews, setPageViews] = useState("product");
  const { authUser } = useSelector(({ auth }) => auth);
  const { productList } = useSelector(({ myPage }) => myPage);
  const { registerDay } = useSelector(({ auth }) => auth);

  useEffect(() => {
    dispatch(MyPageService.getMyProductList());
  }, [dispatch]);

  const handleRadioButton = (e) => {
    setPageViews(e.target.value);
  };

  const ToRequestConfirm = () => {
    history.push("/reservation/confirm");
  };

  const moveToEditProduct = (id) => {
    history.push(`/product/edit-product/${id}`);
  };

  const moveToDetail = (id) => {
    history.push(`/product/product-detail/${id}`);
  };
  return (
    <Wrapper>
      <h3>내 상품 관리</h3>
      <HorizontalLine />
      <MyInfoWrapper>
        <ProfileImg src={authUser?.userImg} />
        <TextInfoWrapper>
          <MyNickName>{authUser?.nickName}</MyNickName>
          <TextInfoDataWrapper>
            <span>
              쉐어팟과 함께한지 <strong>{registerDay}일 째</strong>
            </span>
            <span>
              공유중인 상품 <strong>{productList?.length} 개</strong>
            </span>
          </TextInfoDataWrapper>
        </TextInfoWrapper>
      </MyInfoWrapper>
      <ButtonsWrapper>
        <RadioButtonWrapper>
          <label className={pageViews === "product" ? "checked" : null}>
            내 상품 {productList?.length}
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
              {productList?.length ? (
                <>
                  {productList?.map((p, idx) => {
                    return (
                      <MyProductCardWrapper key={idx}>
                        <div>
                          <ProductImg
                            src={p.firstImg}
                            onClick={() => moveToDetail(p.boardId)}
                          />
                        </div>

                        <ProductInfoWrapper>
                          <ProductTitle>{p.boardTitle}</ProductTitle>
                          <ProductMapData>
                            <LocationOnOutlinedIcon /> 서울{" "}
                            {authUser?.userRegion}
                          </ProductMapData>
                          <ProductDailyRentalFee>
                            <strong>{p.dailyRentalFee.toLocaleString()}</strong>{" "}
                            원 / 일
                          </ProductDailyRentalFee>
                          <ProductButtonsWrapper>
                            <button
                              className="edit"
                              onClick={() => moveToEditProduct(p.boardId)}
                            >
                              게시글 수정
                            </button>
                            <button
                              className="confirm"
                              onClick={ToRequestConfirm}
                            >
                              거래 요청 확인
                            </button>
                          </ProductButtonsWrapper>
                        </ProductInfoWrapper>

                        <BasicPopover boardId={p.boardId} />
                      </MyProductCardWrapper>
                    );
                  })}
                </>
              ) : (
                <NothingPostedWrapper>
                  <NothingPostedInner>
                    <p>등록된 상품이 없습니다.</p>
                    <button
                      onClick={() => {
                        history.push("/product/upload-product");
                      }}
                    >
                      상품 등록하기
                    </button>
                  </NothingPostedInner>
                </NothingPostedWrapper>
              )}
            </div>
          </MyProductListBox>
        ) : (
          <ServicePreparingWrapper>
            <ServicePreparingInner>
              <Logo src="/logo.png"></Logo>
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
