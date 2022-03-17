import React from "react";

import styled from "styled-components";

const MyUserInfo = () => {
  return (
    <MyUserInfoWrap>
      MyuserInfo
      <HeaderSpace />
      <InfoBox>
        <Profile></Profile>
      </InfoBox>
    </MyUserInfoWrap>
  );
};

const MyUserInfoWrap = styled.div``;

const HeaderSpace = styled.div``;

const InfoBox = styled.div``;

const Profile = styled.div``;

export default MyUserInfo;
