import React from "react";
import styled from "styled-components";
import Dropdown from "../../components/Dropdown";

const Withdrawal = () => {
  const userInfo = {
    userId: "happy1234@naver.com",
  };
  const withdrawalReasonList = [
    { value: "중복계정이 있어요.", name: "중복계정이 있어요" },
    { value: "앱 오류가 있어요.", name: "앱 오류가 있어요" },
    { value: "자주 사용하지 않아요.", name: "자주 사용하지 않아요." },
    { value: "개인정보가 걱정돼요.", name: "개인정보가 걱정돼요." },
    { value: "알람이 너무 자주 와요.", name: "알람이 너무 자주 와요." },
    {
      value: "휴대폰 번호가 바뀔 예정이에요.",
      name: "휴대폰 번호가 바뀔 예정이에요.",
    },
  ];
  return (
    <WithdrawalWrap>
      <HeaderSpace />
      <WithdrawalForm>
        <h3>SHARE POD 서비스를 탈퇴하시나요?</h3>
        <label className="userId" defaultValue={userInfo.userId}>
          아이디(이메일)
          <input />
        </label>
        <label className="password">
          비밀번호
          <input type="password" />
        </label>
        <div className="dropdownBox">
          <span>탈퇴 사유</span>
          <div className="dropdownOuter">
            <Dropdown options={withdrawalReasonList}></Dropdown>
          </div>
        </div>
        <Buttons>
          <button className="return">돌아가기</button>
          <button className="withdrawal">탈퇴하기</button>
        </Buttons>
      </WithdrawalForm>
    </WithdrawalWrap>
  );
};

const WithdrawalWrap = styled.div``;

const HeaderSpace = styled.div`
  width: 920px;
  height: 87px;
  background-color: #f2f3f4;
`;

const WithdrawalForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 539px;
  padding: 40px 0 0 221px;
  h3 {
    margin-bottom: 40px;
    font-size: 20px;
    font-weight: 500;
    color: #555;
  }
  input {
    width: 300px;
    height: 56px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 8px;
    color: #ddd;
  }
  .userId {
    margin-bottom: 24px;
    font-size: 16px;
    font-weight: 500;
    color: #555;
    input {
      margin-left: 60px;
      padding: 17px 16px;
      font-size: 16px;
      color: #555;
    }
  }
  .password {
    margin-bottom: 24px;
    font-size: 16px;
    font-weight: 500;
    color: #555;
    input {
      margin-left: 101px;
      padding: 17px 16px;
      font-size: 16px;
      color: #555;
    }
  }
  .dropdownBox {
    display: flex;
    margin-bottom: 64px;
    font-size: 16px;
    font-weight: 500;
    color: #555;
    span {
      margin-top: 17px;
    }
  }
  .dropdownOuter {
    width: 300px;
    height: 56px;
    box-sizing: border-box;
    margin-left: 97px;
  }
`;

const Buttons = styled.div`
  margin-left: 85px;
  button {
    width: 380px;
    height: 56px;
    margin-bottom: 16px;
    border: none;
    border-radius: 28px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }
  .return {
    border: 1px solid #ddd;
    background-color: #fff;
    color: #555;
  }
  .withdrawal {
    border: 1px solid #5f29fa;
    background-color: #5f29fa;
    color: #fff;
  }
`;

export default Withdrawal;
