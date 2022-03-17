import React, { useState } from "react";

import styled from "styled-components";
import Dropdown from "../../components/Dropdown";

const MyUserInfo = () => {
  const userInfo = {
    userImg:
      "https://cdn.pixabay.com/photo/2017/10/15/13/54/doll-2853763_1280.jpg",
    nickname: "쉐어팟이요",
    userId: "happy1234@naver.com",
    mapData: "강남구",
  };

  const [profileImg, setProfileImg] = useState(userInfo.userImg);
  const [userId, setUserId] = useState(userInfo.userId);
  const [nickname, setNickname] = useState(userInfo.nickname);
  const [mapData, setMapData] = useState("종로구");

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

  const mapDataList = [
    { value: "종로구", name: "종로구" },
    { value: "중구", name: "중구" },
    { value: "용산구", name: "용산구" },
    { value: "성동구", name: "성동구" },
    { value: "광진구", name: "광진구" },
    { value: "동대문구", name: "동대문구" },
    { value: "중랑구", name: "중랑구" },
    { value: "성북구", name: "성북구" },
    { value: "강북구", name: "강북구" },
    { value: "도봉구", name: "도봉구" },
    { value: "노원구", name: "노원구" },
    { value: "은평구", name: "은평구" },
    { value: "서대문구", name: "서대문구" },
    { value: "마포구", name: "마포구" },
    { value: "양천구", name: "양천구" },
    { value: "강서구", name: "강서구" },
    { value: "구로구", name: "구로구" },
    { value: "금천구", name: "금천구" },
    { value: "영등포구", name: "영등포구" },
    { value: "동작구", name: "동작구" },
    { value: "관악구", name: "관악구" },
    { value: "서초구", name: "서초구" },
    { value: "강남구", name: "강남구" },
    { value: "송파구", name: "송파구" },
    { value: "강동구", name: "강동구" },
  ];
  console.log(mapData);
  return (
    <MyUserInfoWrap>
      <HeaderSpace />
      <InfoBox>
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
            <span className="nickname">{userInfo.nickname}</span>
            <span className="mapdata">서울시 {userInfo.mapdata}</span>
          </div>
        </Profile>
        <div className="idBox">
          <span>아이디(이메일)</span>
          <input defaultValue={userId} disabled />
        </div>
        <div className="nicknameBox">
          <span>닉네임</span>
          <input defaultValue={nickname} />
        </div>
        <div className="mapdataBox">
          <span className="boxTitle">내 동네 설정</span>
          <div className="myMap">
            <span>서울시</span>
            <div className="dropdownOutter">
              <Dropdown
                options={mapDataList}
                changeData={setMapData}
              ></Dropdown>
            </div>
          </div>
        </div>
        <Buttons>
          <button className="cancel">변경취소하기</button>
          <button className="save">저장하기</button>
        </Buttons>
      </InfoBox>
    </MyUserInfoWrap>
  );
};

const MyUserInfoWrap = styled.div``;

const HeaderSpace = styled.div`
  width: 940px;
  height: 154px;
  background-color: #f2f3f4;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 574px;
  padding: 0 190px;

  .idBox,
  .nicknameBox,
  .mapdataBox {
    margin-bottom: 24px;
    span {
      font-size: 16px;
      font-weight: 500;
      color: #555;
    }
    input {
      width: 380px;
      height: 56px;
      box-sizing: border-box;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 17px 17px 17px 16px;
    }
  }
  .idBox {
    input {
      margin-left: 50px;
    }
  }
  .nicknameBox {
    input {
      margin-left: 107px;
    }
  }
  .mapdataBox {
    display: flex;
    .boxTitle {
      padding-top: 18px;
    }
    .myMap {
      display: flex;
      margin-left: 64px;
      span {
        width: 186px;
        height: 56px;
        margin-right: 8px;
        box-sizing: border-box;
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 17px 16px;
      }
      .dropdownOutter {
        width: 189px;
        height: 56px;
      }
    }
  }
`;

const Profile = styled.div`
  display: flex;
  position: relative;
  width: 540px;
  margin: 0 auto 48px;
  .userTextInfo {
    display: flex;
    flex-direction: column;
    margin-top: 13px;
    .nickname {
      font-size: 24px;
      font-weight: 700;
      color: #555;
    }
    .mapdata {
      font-size: 16px;
      color: #555;
    }
  }
`;

const ProfileUploader = styled.label`
  position: relative;
  top: -32px;
  width: 136px;
  height: 136px;
  margin-right: 24px;

  div {
    display: inline-block;
    width: 100%;
    height: 100%;
    border-radius: 68px;
    background-size: cover;
    overflow: hidden;
  }
  input {
    opacity: 0;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  margin: 48px 24px 360px auto;
  button {
    width: 380px;
    height: 56px;
    box-sizing: border-box;
    border-radius: 28px;
    border: 1px solid #ddd;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }
  .cancel {
    margin-bottom: 16px;
    background-color: #fff;
    color: #555;
  }

  .save {
    background-color: #5f29fa;
    color: #fff;
  }
`;

export default MyUserInfo;
