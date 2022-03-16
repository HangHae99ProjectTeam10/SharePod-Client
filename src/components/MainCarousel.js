import React from "react";

const MainCarousel = () => {
  return (
    <div
      style={{
        overflow: "hidden",
        padding: "30px 0px",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "2400px",
          transform: "translate(-26%, 0%)",
        }}
      >
        <div
          style={{
            background: "#A496F8",
            width: "800px",
            height: "235px",
            borderRadius: "20px",
            margin: "0px 20px",
            boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
          }}
        >
          main carousel
        </div>
        <div
          style={{
            background: "#F7D67E",
            width: "800px",
            height: "235px",
            borderRadius: "20px",
            margin: "0px 20px",
            boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
          }}
        >
          main carousel
        </div>
        <div
          style={{
            background: "#F19997",
            width: "800px",
            height: "235px",
            borderRadius: "20px",
            margin: "0px 20px",
            boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
          }}
        >
          main carousel
        </div>
      </div>
    </div>
  );
};

export default MainCarousel;
