import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const MainRecentPosts = () => {
  const arr = [0, 0, 0, 0, 0, 0];
  return (
    <div
      style={{
        margin: "80px 0px",
      }}
    >
      <div>
        <div
          style={{
            fontSize: "1.4rem",
            fontWeight: "bold",
          }}
        >
          최근 대여 게시글
        </div>
        <div
          style={{
            color: "#777777",
            margin: "10px 0px 20px 0px",
          }}
        >
          지금 올라온 게시글을 확인해보세요.
        </div>
      </div>
      {/* 이미지 시작 */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          justifyContent: "space-between",
        }}
      >
        {arr.map((p, index) => {
          return (
            <div key={index}>
              <div
                style={{
                  background: "white",
                  width: "300px",
                  height: "500px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
              >
                <div
                  style={{
                    overflow: "hidden",
                    height: "60%",
                    position: "relative",
                  }}
                >
                  <FavoriteBorderIcon
                    style={{
                      position: "absolute",
                      right: "0",
                      margin: "10px",
                      fontSize: "1.8rem",
                      color: "#4A2FC3",
                    }}
                  />
                  <img
                    style={{
                      width: "100%",
                      objectFit: "cover",
                    }}
                    src="https://i.pinimg.com/564x/93/bc/47/93bc47022380cf947a53acb595bc3c70.jpg"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "-14%",
                      transform: "translate(10%, 50%)",
                      display: "flex",
                    }}
                  >
                    <img
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                        borderRadius: "10px",
                        border: "5px solid white",
                        marginRight: "10px",
                      }}
                      src="https://tistory1.daumcdn.net/tistory/2866877/attach/13f43ae07fe94befa5571bfd6442c89e"
                      alt=""
                    />
                    <div
                      style={{
                        lineHeight: "60px",
                      }}
                    >
                      <p
                        style={{
                          color: "#777777",
                          fontSize: "0.9rem",
                        }}
                      >
                        판매자 : 홍길동
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: "8%",
                      left: "8%",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: "bold",
                      }}
                    >
                      삼성전자 공기청정기 필요하신 분!!
                    </div>
                    <div
                      style={{
                        display: "flex",
                        margin: "5px 0px",
                      }}
                    >
                      <span
                        style={{
                          color: "#4A2FC3",
                          fontWeight: "bold",
                        }}
                      >
                        30,000원
                      </span>

                      <span
                        style={{
                          color: "#C6C6C6",
                          fontSize: "0.9rem",
                        }}
                      >
                        / 1일기준
                      </span>
                    </div>

                    <div
                      style={{
                        margin: "10px 0px",
                      }}
                    >
                      공기청정기 1회 사용했습니다. 필요하신 분 연락주세요.
                    </div>
                    <div
                      style={{
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          background: "#FFD600",
                          borderRadius: "20px",
                          color: "#4A2FC3",
                          padding: "8px",
                          fontWeight: "bold",
                          fontSize: "0.8rem",
                          marginRight: "10px",
                        }}
                      >
                        #디지털기기
                      </div>
                      <div
                        style={{
                          background: "#FFD600",
                          borderRadius: "20px",
                          color: "#4A2FC3",
                          padding: "8px",
                          fontWeight: "bold",
                          fontSize: "0.8rem",
                        }}
                      >
                        #강남구
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainRecentPosts;
