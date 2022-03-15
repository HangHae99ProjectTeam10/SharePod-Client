import React, { useState } from "react";

import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Dropdown from "../../components/Dropdown";
import { history } from "../../redux/store";

const Register = () => {
  // const navigate = useNavigate();

  const [imageSrc, setImageSrc] = useState(
    "https://tistory1.daumcdn.net/tistory/2866877/attach/13f43ae07fe94befa5571bfd6442c89e"
  );

  const [userName, setUserName] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [mapdata, setMapData] = useState("종로구");

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

  const signup = () => {};

  return (
    <RegistFormWrap>
      <InputLabel
        For="profile"
        style={{
          textAlign: "center",
          marginRight: "56px",
        }}
      >
        프로필 이미지 등록
        <div
          style={{
            marginTop: "12px",
            display: "inline-block",
            width: "136px",
            height: "136px",
            overflow: "hidden",
            borderRadius: "68px",
            backgroundColor: "black",
            backgroundImage: `url("${imageSrc}")`,
            backgroundSize: "cover",
          }}
        >
          <input
            style={{
              opacity: "0",
            }}
            id="profile"
            type="file"
            onChange={(e) => {
              handleFileInput(e);
            }}
          />
        </div>
      </InputLabel>
      <UserInfoBox>
        <InputLabel>
          아이디(이메일)
          <RegistInput
            placeholder="아이디/이메일을 입력해주세요"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </InputLabel>
        <InputLabel>
          닉네임
          <RegistInput
            label="닉네임"
            placeholder="닉네임을 입력해주세요"
            onChange={(e) => {
              setNickname(e.target.value);
            }}
          />
        </InputLabel>
        <InputLabel>
          비밀번호
          <RegistInput
            type="password"
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </InputLabel>
        <InputLabel>
          비밀번호 확인
          <RegistInput
            type="password"
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요"
            onChange={(e) => {
              setPasswordCheck(e.target.value);
            }}
          />
        </InputLabel>
        <MapdataBox>
          <span> 내 동네 설정</span>
          <div
            style={{
              display: "flex",
              margin: "18px 0 32px",
            }}
          >
            <div
              style={{
                width: "160px",
                height: "56px",
                boxSizing: "border-box",
                marginRight: "35px",
                border: "1px solid #dedede",
                borderRadius: "8px",
                padding: "17px",
                fontSize: "16px",
                color: "#999",
              }}
            >
              서울시
            </div>
            <Dropdown options={mapDataList} changeData={setMapData} />
          </div>
        </MapdataBox>
        <RegistButton
          onClick={() => {
            history.push("/signup");
          }}
        >
          회원가입
        </RegistButton>
        <RegistButton
          onClick={() => {
            history.push("/");
          }}
        >
          돌아가기
        </RegistButton>
      </UserInfoBox>
    </RegistFormWrap>
  );
};

const RegistFormWrap = styled.section`
  display: flex;
  padding: 25px 285px;
`;

const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

const RegistInput = styled.input`
  width: 351px;
  height: 56px;
  border: 1px solid #dedede;
  background-color: #fff;
  border-radius: 8px;
  margin-top: 18px;
`;

const UserInfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const MapdataBox = styled.div``;

const RegistButton = styled.button`
  width: 351px;
  height: 56px;
  margin-bottom: 16px;
`;

export default Register;
