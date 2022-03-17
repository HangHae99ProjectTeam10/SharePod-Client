import React from "react";
import { useForm } from "react-hook-form";
import { Box, Button } from "@mui/material";
import "./styles.css";
import { history } from "redux/store";
import { Form, FormErrorMsg, FormInput, FormLabel } from "./Register.style";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  const moveToSignup = () => {
    history.push("/auth/signup");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <FormLabel>아이디(이메일)</FormLabel>
        <FormInput
          {...register("email", {
            pattern: /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/,
            required: true,
          })}
          placeholder="아이디를 입력해주세요"
        />
        {errors.email && <FormErrorMsg>이메일을 입력해주세요.</FormErrorMsg>}
      </Box>

      <Box>
        <FormLabel>비밀번호</FormLabel>
        <FormInput
          type="password"
          {...register("password", { required: true })}
          placeholder="비밀번호를 입력해주세요"
        />
        {errors.password && (
          <FormErrorMsg>{errors.password.message}</FormErrorMsg>
        )}
      </Box>

      <Button type="submit">로그인하기</Button>
      <Button onClick={moveToSignup}>회원가입하기</Button>
    </Form>
  );
};

export default Login;
