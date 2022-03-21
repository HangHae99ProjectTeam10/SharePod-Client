import React from "react";
import styled from "styled-components";
import { withdrawalReasonList } from "constants/withdrawalReasonList";
import {} from "./MyUserInfo.style";
import {
  Buttons,
  HeaderSpace,
  useStyles,
  WithdrawalForm,
  WithdrawalWrap,
} from "./Withdrawal.style";
import { MenuItem, Select } from "@mui/material";

const Withdrawal = () => {
  const classes = useStyles;
  const userInfo = {
    userId: "happy1234@naver.com",
  };
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
            <Select
              // defaultValue={userRegion ? userRegion : "강서구"}
              className={classes.selectSmCity}
            >
              {withdrawalReasonList.map((p) => {
                return (
                  <MenuItem key={p} value={p}>
                    {p}
                  </MenuItem>
                );
              })}
            </Select>
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

export default Withdrawal;
