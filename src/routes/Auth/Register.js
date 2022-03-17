import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Box, MenuItem, Select } from "@mui/material";
import { mapDataList } from "constants/mapDataList";
import { history } from "redux/store";
import {
  FileUploaderInput,
  FileUploaderThumbnail,
  FileUploaderTitle,
  FileUploaderWrapper,
  Form,
  FormErrorMsg,
  FormInput,
  useStyles,
  Wrapper,
  FormLabel,
  FormSubmitBtn,
  FormNormalBtn,
} from "./Register.style";

const Register = () => {
  const classes = useStyles();

  const [imageSrc, setImageSrc] = useState(
    "https://i.pinimg.com/564x/c4/34/d8/c434d8c366517ca20425bdc9ad8a32de.jpg"
  );
  const handleFileInput = (e) => {
    const file = e.target.files[0];
    encodeFileToBase64(file);
  };

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      <Wrapper>
        <FileUploaderWrapper>
          <FileUploaderTitle>프로필 이미지 등록</FileUploaderTitle>
          <Box>
            <label htmlFor="file-input">
              <FileUploaderThumbnail
                src={imageSrc}
                alt="please upload your image"
              />
            </label>
            <FileUploaderInput
              id="file-input"
              type="file"
              onChange={(e) => {
                handleFileInput(e);
              }}
            />
          </Box>
        </FileUploaderWrapper>
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
            {errors.email && (
              <FormErrorMsg>이메일 양식에 맞지 않습니다.</FormErrorMsg>
            )}
          </Box>
          <Box>
            <FormLabel>닉네임</FormLabel>
            <FormInput
              {...register("nickname", { required: true })}
              placeholder="닉네임을 입력해주세요"
            />
            {errors.nickname && (
              <FormErrorMsg>닉네임은 필수 입력 값입니다.</FormErrorMsg>
            )}
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
          <Box>
            <FormLabel>비밀번호 확인</FormLabel>
            <FormInput
              type="password"
              {...register("password_confirm", { required: true })}
              placeholder="비밀번호를 입력해주세요"
            />
            {errors.password_confirm && (
              <FormErrorMsg>{errors.password_confirm.message}</FormErrorMsg>
            )}
          </Box>
          <Box>
            <FormLabel>내 동네 설정</FormLabel>
            <div
              style={{
                display: "flex",
              }}
            >
              <Select value="서울시" className={classes.selectCity}>
                <MenuItem value="서울시">서울시</MenuItem>
              </Select>
              <Select
                {...register("myhomeground")}
                defaultValue="강남구"
                className={classes.selectSmCity}
              >
                {mapDataList.map((p) => {
                  return (
                    <MenuItem key={p} value={p}>
                      {p}
                    </MenuItem>
                  );
                })}
              </Select>
            </div>
          </Box>
          <FormSubmitBtn type="submit">가입하기</FormSubmitBtn>
          <FormNormalBtn
            onClick={() => {
              history.push("/auth/signin");
            }}
          >
            로그인하기
          </FormNormalBtn>
        </Form>
      </Wrapper>
    </>
  );
};

export default Register;
