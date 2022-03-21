import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
  MyInfoBox,
  MyProductCard,
  MyProductListBox,
  MyProductWrap,
  ProductImg,
  ProfileImg,
} from "./MyProduct.style";

const MyProduct = () => {
  const history = useHistory();
  const myPageData = useSelector((state) => state.myPage.user_info);
  const userInfo = myPageData.userInfo;
  console.log(userInfo);
  const MyBoardList = myPageData.userMyBoard;
  console.log(MyBoardList);
  return (
    <MyProductWrap>
      <MyInfoBox>
        <ProfileImg src={userInfo.userImg} />
        <div className="textInfoBox">
          <span className="textInfoBox_userName">{userInfo.nickName}</span>
          <div className="textInfoBox_data">
            <span className="textInfoBox_data_createdAt">
              쉐어팟과 함께한지 <strong></strong>
            </span>
          </div>
        </div>
      </MyInfoBox>
      <div className="buttonOuter">
        <button
          onClick={() => {
            history.push("/product/upload-product");
          }}
        >
          게시글 작성하기
        </button>
      </div>
      <MyProductListBox>
        <div className="productListBoxInner">
          {MyBoardList.map((p) => {
            return (
              <MyProductCard>
                <ProductImg src={p.firstImg} />
                <div className="MyProductCard_ProductInfoBox">
                  <span>{p.boardTitle}</span>
                  <span>🌐 서울 {userInfo.userRegion}</span>
                  <span>
                    <strong>3000</strong> 원/일
                  </span>
                  <div className="MyProductCard_ProductInfoBox_ButtonsBox">
                    <button className="edit">게시글 수정</button>
                    <button className="confirm">거래 요청 확인</button>
                  </div>
                </div>
              </MyProductCard>
            );
          })}
        </div>
      </MyProductListBox>
    </MyProductWrap>
  );
};

export default MyProduct;
