import React from "react";
import styled from "styled-components";
import { withdrawalReasonList } from "constants/withdrawalReasonList";
import {} from "./MyUserInfo.style";
import {
  Buttons,
  HorizontalLine,
  useStyles,
  WithdrawalForm,
  WithdrawalPassword,
  WithdrawalReason,
  WithdrawalUserName,
  Wrapper,
} from "./Withdrawal.style";
import { MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import MyPageService from "services/myPage";

const Withdrawal = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector(({ myPage }) => myPage.myPageData);
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
    <Wrapper>
      <h3>회원 탈퇴</h3>
      <HorizontalLine />
      <WithdrawalForm onSubmit={handleSubmit(onSubmit)}>
        <h4>SHARE POD 서비스를 탈퇴하시나요?</h4>
        <WithdrawalUserName>
          이메일
          <input
            defaultValue={userInfo.username}
            readOnly
            {...register("username")}
          />
        </WithdrawalUserName>
        <WithdrawalPassword>
          비밀번호
          <input type="password" {...register("password")} />
        </WithdrawalPassword>
        <WithdrawalReason>
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
        </WithdrawalReason>
        <Buttons>
          <button className="return">돌아가기</button>
          <button className="withdrawal" type="submit">
            탈퇴하기
          </button>
        </Buttons>
      </WithdrawalForm>
    </Wrapper>
  );
};

export default Withdrawal;
