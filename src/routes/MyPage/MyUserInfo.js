import { MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { mapDataList } from "constants/mapDataList";
import {
  Buttons,
  Form,
  HorizontalLine,
  MapDataWrapper,
  NickNameWrapper,
  PhotoIconWrapper,
  Profile,
  ProfileUploader,
  UserNameWrapper,
  useStyles,
  Wrapper,
} from "./MyUserInfo.style";
import { useDispatch, useSelector } from "react-redux";
import MyPageService from "services/myPage";
import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded";

const MyUserInfo = () => {
  const dispatch = useDispatch();
  const classes = useStyles;
  const { register, handleSubmit } = useForm({});
  const { myInfo } = useSelector(({ myPage }) => myPage);

  const [profileImg, setProfileImg] = useState();
  const [imageSrc, setImageSrc] = useState();

  useEffect(() => {
    dispatch(MyPageService.getMyInfo());
  }, [dispatch]);

  useEffect(() => {
    setProfileImg(myInfo?.userImg);
  }, [myInfo]);

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

  const onSubmit = (data) => {
    dispatch(MyPageService.editMyInfoData(data, imageSrc));
  };

  return (
    <Wrapper>
      <h3>내 프로필 관리</h3>
      <HorizontalLine />
      {myInfo && (
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
            <PhotoIconWrapper htmlFor="profileImg">
              <CameraAltRoundedIcon />
            </PhotoIconWrapper>
          </Profile>
          <NickNameWrapper>
            <span>닉네임</span>
            <input defaultValue={myInfo.nickName} {...register("nickName")} />
          </NickNameWrapper>
          <UserNameWrapper>
            <span>이메일</span>
            <input
              {...register("username")}
              readOnly
              name="username"
              value={myInfo?.username}
            />
          </UserNameWrapper>
          <MapDataWrapper>
            <span className="boxTitle">내 동네 설정</span>
            <div className="myMap">
              <span className="seoulCity">서울시</span>
              <Select
                {...register("userRegion")}
                className={classes.selectSmCity}
                defaultValue={myInfo.userRegion}
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
      )}
    </Wrapper>
  );
};

export default MyUserInfo;
