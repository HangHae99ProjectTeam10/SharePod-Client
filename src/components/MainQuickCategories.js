import React from "react";

const MainQuickCategories = () => {
  const arr = [0, 0, 0, 0, 0];
  return (
    <div
      style={{
        margin: "40px 0px",
      }}
    >
      <div>
        <div
          style={{
            fontSize: "1.4rem",
            fontWeight: "bold",
          }}
        >
          빠른 카테고리
        </div>
        <div
          style={{
            color: "#777777",
            margin: "10px 0px 20px 0px",
          }}
        >
          인기 카테고리를 한눈에
        </div>
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        {arr.map((p, index) => {
          return (
            <div
              key={index}
              style={{
                position: "relative",
                marginRight: "20px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  zIndex: 1,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "100%",
                  textAlign: "center",
                  color: "#FFFFFF",
                  fontWeight: "bold",
                }}
              >
                디지털기기
              </div>
              <div
                style={{
                  width: "130px",
                  height: "130px",
                  borderRadius: "20px",
                  background: "black",
                  overflow: "hidden",
                  boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
                }}
              >
                <img
                  style={{
                    opacity: "0.7",
                    width: "100%",
                    objectFit: "cover",
                  }}
                  src="https://i.pinimg.com/564x/9d/e1/36/9de13693679089b67c1c87ce2233090d.jpg"
                  alt=""
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainQuickCategories;
