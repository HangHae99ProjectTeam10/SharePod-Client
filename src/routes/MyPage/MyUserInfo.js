import { MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import JWTAuth from "services/auth";

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
import { useDispatch } from "react-redux";

const MyUserInfo = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles;
  const userInfo = {
    userImg: props.userInfo.userImg,
    nickname: props.userInfo.nickName,
    username: props.userInfo.username,
    userRegion: props.userInfo.userRegion,
  };

  const [profileImg, setProfileImg] = useState();
  const [username, setUsername] = useState();
  const [nickname, setNickname] = useState();
  const [mapData, setMapData] = useState();

  useEffect(() => {
    setProfileImg(userInfo.userImg);
    setUsername(userInfo.username);
    setNickname(userInfo.nickname);
    setMapData(userInfo.userRegion);
  }, [userInfo]);

  const handleFileInput = (e) => {
    const file = e.target.files[0];
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
      console.log(profileImg);
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    console.log(data, profileImg);
    dispatch(JWTAuth);
  };
  return (
    <MyUserInfoWrap>
      <HeaderSpace />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Profile>
          <ProfileUploader>
            <div
              style={{
                backgroundImage: `url("${profileImg}")`,
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
            <span className="mapdata">서울시 {mapData || ""}</span>
          </div>
        </Profile>
        <div className="idBox">
          <span>아이디(이메일)</span>
          <input defaultValue={username} disabled />
        </div>
        <div className="nicknameBox">
          <span>닉네임</span>
          <input
            {...register("nickname", { required: true })}
            defaultValue={nickname}
          />
        </div>
        <div className="mapdataBox">
          <span className="boxTitle">내 동네 설정</span>
          <div className="myMap">
            <span>서울시</span>
            <div className="dropdownOutter">
              <Select
                {...register("userRegion")}
                defaultValue={"중구"}
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
