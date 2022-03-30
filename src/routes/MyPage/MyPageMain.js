import React, { useState } from "react";
import {
  MyPageButtons,
  MyPageContentsField,
  MyPageHeader,
  MyPageSideWrapper,
  SelectedContent,
  Wrapper,
} from "./MyPageMain.style";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { history } from "redux/store";

const MyPageMain = ({ children }) => {
  const [radioValue, setRadioValue] = useState("0");
  const handleRadioButton = (e) => {
    setRadioValue(e.target.value);
  };
  const moveToPage = (route) => {
    history.push(`/mypage${route}`);
  };

  const toggleMenus = [
    {
      title: "내 프로필 관리",
      route: "/myInfo",
      icon: <PersonOutlineOutlinedIcon />,
    },
    {
      title: "찜한 내역",
      route: "/like-list",
      icon: <FavoriteBorderOutlinedIcon />,
    },
    {
      title: "내 상품 관리",
      route: "/product-list",
      icon: <BorderColorOutlinedIcon />,
    },
    {
      title: "대여 내역",
      route: "/borrow-list",
      icon: <DescriptionOutlinedIcon />,
    },
    {
      title: "1:1 채팅 내역",
      route: "/chat-list",
      icon: <ChatOutlinedIcon />,
    },
    {
      title: "회원 탈퇴",
      route: "/withdraw",
      icon: <DeleteOutlineOutlinedIcon />,
    },
  ];
  return (
    <Wrapper>
      <MyPageContentsField>
        <MyPageSideWrapper>
          <MyPageHeader>
            <h2>마이페이지</h2>
          </MyPageHeader>
          <MyPageButtons>
            {toggleMenus?.map((p, idx) => {
              return (
                <label
                  key={p.title}
                  className={radioValue === `${idx}` ? "checked" : null}
                  onClick={() => moveToPage(p.route)}
                >
                  {p.icon}
                  {p.title}
                  <input
                    type="radio"
                    hidden
                    name="mypage"
                    value={idx.toString()}
                    onChange={handleRadioButton}
                  />
                </label>
              );
            })}
          </MyPageButtons>
        </MyPageSideWrapper>
        <SelectedContent>{children}</SelectedContent>
      </MyPageContentsField>
    </Wrapper>
  );
};

export default MyPageMain;
