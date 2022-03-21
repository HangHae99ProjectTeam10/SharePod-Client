import styled from "styled-components";

export const MyProductWrap = styled.div`
  .buttonOuter {
    display: flex;
    justify-content: flex-end;
    button {
    }
  }
`;

export const MyInfoBox = styled.div`
  display: flex;
  .textInfoBox {
  }
`;

export const ProfileImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const MyProductListBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  .productListBoxInner {
    display: flex;
    flex-direction: column;
  }
`;

export const MyProductCard = styled.div`
  display: flex;
  padding: 20px 30px;
  .MyProductCard_ProductInfoBox {
    display: flex;
    flex-direction: column;
  }
  .MyProductCard_ProductInfoBox_ButtonsBox {
    margin-top: 64px;
    button {
      width: 255px;
      height: 56px;
      box-sizing: border-box;
      margin-right: 28px;
      border-radius: 28px;
      cursor: pointer;
    }
    .edit {
      border: 1px solid #ddd;
      color: #555;
      background-color: #fff;
    }
    .confirm {
      border: none;
      color: #fff;
      background-color: #632efa;
    }
  }
`;

export const ProductImg = styled.img`
  width: 200px;
  height: 200px;
  margin-right: 26px;
  border-radius: 8px;
`;
