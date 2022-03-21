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
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import MyPageService from "services/myPage";

const Withdrawal = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.myPage.user_info);
  const classes = useStyles;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    dispatch(MyPageService.withdrawalMyId(data));
  };
  return (
    <WithdrawalWrap>
      <HeaderSpace />
      <WithdrawalForm onSubmit={handleSubmit(onSubmit)}>
        <h3>SHARE POD 서비스를 탈퇴하시나요?</h3>
        <label className="userId">
          아이디(이메일)
          <input
            defaultValue={userInfo.username}
            readOnly
            {...register("username")}
          />
        </label>
        <label className="password">
          비밀번호
          <input type="password" {...register("password")} />
        </label>
        <div className="dropdownBox">
          <span>탈퇴 사유</span>
          <div className="dropdownOuter">
            <Select
              // {...register("withdrawalReason")}
              className={classes.selectSmCity}
              defaultValue="중복계정이 있어요."
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
          <button className="withdrawal" type="submit">
            탈퇴하기
          </button>
        </Buttons>
      </WithdrawalForm>
    </WithdrawalWrap>
  );
};

export default Withdrawal;
