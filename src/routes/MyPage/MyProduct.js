import React from "react";
import {
  MyInfoBox,
  MyProductCard,
  MyProductListBox,
  MyProductWrap,
  ProductImg,
  ProfileImg,
} from "./MyProduct.style";

const MyProduct = () => {
  return (
    <MyProductWrap>
      <MyInfoBox>
        <ProfileImg src="http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg" />
        <div className="textInfoBox">
          <span className="textInfoBox_userName">Username</span>
          <div className="textInfoBox_data">
            <span className="textInfoBox_data_createdAt">
              쉐어팟과 함께한지 <strong></strong>
            </span>
          </div>
        </div>
      </MyInfoBox>
      <div className="buttonOuter">
        <button>게시글 작성하기</button>
      </div>
      <MyProductListBox>
        <div className="productListBoxInner">
          <MyProductCard>
            <ProductImg src="https://www.winix.com/kr/m/images/life_kv_air_m_20200128_1.jpg" />
            <div className="MyProductCard_ProductInfoBox">
              <span>공기청정기</span>
              <span>서울 강서구</span>
              <span>
                <strong>3000</strong> 원/일
              </span>
              <div className="MyProductCard_ProductInfoBox_ButtonsBox">
                <button className="edit">게시글 수정</button>
                <button className="confirm">거래 요청 확인</button>
              </div>
            </div>
          </MyProductCard>
          <MyProductCard>
            <ProductImg
              src="https://www.winix.com/kr/m/images/life_kv_air_m_20200128_1.jpg"
              onClick={() => {}}
            />
            <div className="MyProductCard_ProductInfoBox">
              <span>공기청정기</span>
              <span>서울 강서구</span>
              <span>
                <strong>3000</strong> 원/일
              </span>
              <div className="MyProductCard_ProductInfoBox_ButtonsBox">
                <button className="edit">게시글 수정</button>
                <button className="confirm">거래 요청 확인</button>
              </div>
            </div>
          </MyProductCard>
          <MyProductCard>
            <ProductImg src="https://www.winix.com/kr/m/images/life_kv_air_m_20200128_1.jpg" />
            <div className="MyProductCard_ProductInfoBox">
              <span>공기청정기</span>
              <span>서울 강서구</span>
              <span>
                <strong>3000</strong> 원/일
              </span>
              <div className="MyProductCard_ProductInfoBox_ButtonsBox">
                <button className="edit">게시글 수정</button>
                <button className="confirm">거래 요청 확인</button>
              </div>
            </div>
          </MyProductCard>
          <MyProductCard>
            <ProductImg src="https://www.winix.com/kr/m/images/life_kv_air_m_20200128_1.jpg" />
            <div className="MyProductCard_ProductInfoBox">
              <span>공기청정기</span>
              <span>서울 강서구</span>
              <span>
                <strong>3000</strong> 원/일
              </span>
              <div className="MyProductCard_ProductInfoBox_ButtonsBox">
                <button className="edit">게시글 수정</button>
                <button className="confirm">거래 요청 확인</button>
              </div>
            </div>
          </MyProductCard>
        </div>
      </MyProductListBox>
    </MyProductWrap>
  );
};

export default MyProduct;
