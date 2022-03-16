import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

const MainCategory = () => {
  return (
    <div
      style={{
        color: "#4A2FC3",
        fontWeight: "bold",
        display: "flex",
        padding: "20px 0px",
        alignItems: "center",
      }}
    >
      <MenuIcon />
      <div
        style={{
          marginLeft: "10px",
        }}
      >
        카테고리
      </div>
    </div>
  );
};
export default MainCategory;
