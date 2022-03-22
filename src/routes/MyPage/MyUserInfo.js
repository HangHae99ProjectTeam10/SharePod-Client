import { MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { mapDataList } from "constants/mapDataList";
import {
  Buttons,
  Form,
  HorizontalLine,
  MapDataWrapper,
  MyUserInfoWrapper,
  NickNameWrapper,
  PhotoIconWrapper,
  Profile,
  ProfileUploader,
  UserNameWrapper,
  useStyles,
} from "./MyUserInfo.style";
import { useDispatch, useSelector } from "react-redux";
import MyPageService from "services/myPage";
import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded";

const MyUserInfo = () => {
  const dispatch = useDispatch();
  const classes = useStyles;
  const { userInfo } = useSelector(({ myPage }) => myPage.myPageData);

  const [profileImg, setProfileImg] = useState();
  const [imageSrc, setImageSrc] = useState();
  const [userRegion, setUserRegion] = useState();
  const [user, setUser] = useState(null);

  useEffect(() => {
    reset(user);
  }, [user]);

  useEffect(() => {
    if (userInfo) {
      setProfileImg(userInfo.userImg);
      setUserRegion(userInfo.userRegion);
      setTimeout(() => {
        setUser(
          {
            username: userInfo.username,
            nickName: userInfo.nickName,
            userRegion: userInfo.userRegion,
          },
          1000
        );
      });
    }
  }, [userInfo]);

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    setImageSrc(file);
    encodeFileToBase64(file);
  };

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setProfileImg(reader.result);
        resolve();
      };
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({});

  const onSubmit = (data) => {
    console.log(data, imageSrc);

    dispatch(MyPageService.editMyInfoData(data, imageSrc));
  };
  return (
    <MyUserInfoWrapper>
      <h3>내 프로필 관리</h3>
      <HorizontalLine />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Profile>
          <ProfileUploader>
            <div
              style={{
                backgroundImage: `url(${profileImg})`,
              }}
            ></div>
            <input
              type="file"
              id="profileImg"
              onChange={(e) => {
                handleFileInput(e);
              }}
            />
          </ProfileUploader>
          <PhotoIconWrapper for="profileImg">
            <CameraAltRoundedIcon />
          </PhotoIconWrapper>
        </Profile>
        <NickNameWrapper>
          <span>닉네임</span>
          <input {...register("nickName")} />
        </NickNameWrapper>
        <UserNameWrapper>
          <span>이메일</span>
          <input {...register("username")} readOnly name="username" />
        </UserNameWrapper>
        <MapDataWrapper>
          <span className="boxTitle">내 동네 설정</span>
          <div className="myMap">
            <span className="seoulCity">서울시</span>
            <Select
              {...register("userRegion")}
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
        </MapDataWrapper>
        <Buttons>
          <button className="cancel">변경 취소하기</button>
          <button className="save" type="submit">
            저장하기
          </button>
        </Buttons>
      </Form>
    </MyUserInfoWrapper>
  );
};

export default MyUserInfo;
