import { MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { mapDataList } from "constants/mapDataList";
import {
  Buttons,
  Form,
  HeaderSpace,
  InfoBox,
  MyUserInfoWrap,
  Profile,
  ProfileUploader,
  useStyles,
} from "./MyUserInfo.style";
import { useDispatch, useSelector } from "react-redux";
import MyPageService from "services/myPage";

const MyUserInfo = () => {
  const dispatch = useDispatch();
  const classes = useStyles;
  const userInfo = useSelector((state) => state.myPage.user_info);

  const [profileImg, setProfileImg] = useState();
  const [imageSrc, setImageSrc] = useState();
  const [nickname, setNickname] = useState();
  const [userRegion, setUserRegion] = useState();
  const [user, setUser] = useState(null);

  useEffect(() => {
    reset(user);
  }, [user]);

  useEffect(() => {
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
    <MyUserInfoWrap>
      <HeaderSpace />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Profile>
          <ProfileUploader>
            <div
              style={{
                backgroundImage: `url("https://sharepods.s3.ap-northeast-2.amazonaws.com/jjb9973ade-70bc-4433-807b-6c4534c5ad29_1.jpg")`,
              }}
            ></div>
            <input
              type="file"
              onChange={(e) => {
                handleFileInput(e);
              }}
            />
          </ProfileUploader>
          <div className="userTextInfo">
            <span className="nickname">{nickname}</span>
            <span className="mapdata">서울시 {userRegion}</span>
          </div>
        </Profile>
        <div className="idBox">
          <span>아이디(이메일)</span>
          <input {...register("username")} name="username" />
        </div>
        <div className="nicknameBox">
          <span>닉네임</span>
          <input {...register("nickName")} />
        </div>
        <div className="mapdataBox">
          <span className="boxTitle">내 동네 설정</span>
          <div className="myMap">
            <span>서울시</span>
            <div className="dropdownOutter">
              <Select
                {...register("userRegion")}
                // defaultValue={userRegion ? userRegion : "강서구"}
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
          </div>
        </div>
        <Buttons>
          <button className="cancel">변경취소하기</button>
          <button className="save" type="submit">
            저장하기
          </button>
        </Buttons>
      </Form>
    </MyUserInfoWrap>
  );
};

export default MyUserInfo;
