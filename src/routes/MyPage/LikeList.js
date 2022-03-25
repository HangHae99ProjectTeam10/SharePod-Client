import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  HorizontalLine,
  LikeListCard,
  LikeListCardDailyRentalFee,
  LikeListCardImg,
  LikeListCardModifiedAt,
  LikeListMapData,
  LikeListWrapper,
  NothingPostedInner,
  NothingPostedWrapper,
  PageMoveButton,
  PageNumsButtonWrapper,
  PaginationButtons,
  Wrapper,
} from "./LikeList.style";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { getDate, getHours, getMinutes, getMonth, getYear } from "date-fns";
import { history } from "redux/store";

const LikeList = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [displayList, setDisplayList] = useState([]);
  const myLikedList = [
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "레보네이트 공기청정기",
      mapData: "강서구",
      dailyRentalFee: 2000,
      modifiedAt: "2022-03-20T16:23:03.056",
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "레보네이트 공기청정기",
      mapData: "강서구",
      dailyRentalFee: 2000,
      modifiedAt: "2022-03-20T16:23:03.056",
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "레보네이트 공기청정기",
      mapData: "강서구",
      dailyRentalFee: 2000,
      modifiedAt: "2022-03-20T16:23:03.056",
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "레보네이트 공기청정기",
      mapData: "강서구",
      dailyRentalFee: 2000,
      modifiedAt: "2022-03-20T16:23:03.056",
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "레보네이트 공기청정기",
      mapData: "강서구",
      dailyRentalFee: 2000,
      modifiedAt: "2022-03-20T16:23:03.056",
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "레보네이트 공기청정기",
      mapData: "강서구",
      dailyRentalFee: 2000,
      modifiedAt: "2022-03-20T16:23:03.056",
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "레보네이트 공기청정기",
      mapData: "강서구",
      dailyRentalFee: 2000,
      modifiedAt: "2022-03-20T16:23:03.056",
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "레보네이트 공기청정기",
      mapData: "동대문구",
      dailyRentalFee: 2000,
      modifiedAt: "2022-03-20T16:23:03.056",
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "레보네이트 공기청정기",
      mapData: "동대문구",
      dailyRentalFee: 2000,
      modifiedAt: "2022-03-20T16:23:03.056",
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "레보네이트 공기청정기",
      mapData: "동대문구",
      dailyRentalFee: 2000,
      modifiedAt: "2022-03-20T16:23:03.056",
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "레보네이트 공기청정기",
      mapData: "동대문구",
      dailyRentalFee: 2000,
      modifiedAt: "2022-03-20T16:23:03.056",
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "레보네이트 공기청정기",
      mapData: "동대문구",
      dailyRentalFee: 2000,
      modifiedAt: "2022-03-20T16:23:03.056",
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "맥북",
      mapData: "강서구",
      dailyRentalFee: 2000,
      modifiedAt: "2022-03-20T16:23:03.056",
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "맥북",
      mapData: "강서구",
      dailyRentalFee: 2000,
      modifiedAt: "2022-03-20T16:23:03.056",
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "맥북",
      mapData: "강서구",
      dailyRentalFee: 2000,
      modifiedAt: "2022-03-20T16:23:03.056",
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "맥북",
      mapData: "강서구",
      dailyRentalFee: 2000,
      modifiedAt: "2022-03-20T16:23:03.056",
    },
    {
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      title: "맥북",
      mapData: "강서구",
      dailyRentalFee: 2000,
      modifiedAt: "2022-03-20T16:23:03.056",
    },
  ];

  const { userLikedBoard } = useSelector(({ myPage }) => myPage.myPageData);

  useEffect(() => {
    setDisplayList([]);
    const addList = [];
    for (let i = (pageNumber - 1) * 6; i < pageNumber * 6; i++) {
      addList.push(userLikedBoard[i]);
    }
    setDisplayList(addList);
  }, [pageNumber]);
  const pageAmount = parseInt(Math.ceil(userLikedBoard.length / 6));

  const nowTimeData = new Date();
  const nowYear = getYear(nowTimeData);
  const nowMonth = getMonth(nowTimeData);
  const nowDate = getDate(nowTimeData);
  const nowHour = getHours(nowTimeData);
  const nowMinute = getMinutes(nowTimeData);

  return (
    <Wrapper>
      <h3>찜한 내역</h3>
      <HorizontalLine />
      {displayList.length1 == 0 ? (
        <>
          <LikeListWrapper>
            {displayList.map((p) => {
              if (!p) {
                return;
              }
              const dataDate = new Date(p.modifiedAt);
              const year = getYear(dataDate);
              const month = getMonth(dataDate);
              const date = getDate(dataDate);
              const hour = getHours(dataDate);
              const minute = getMinutes(dataDate);
              return (
                <LikeListCard key={p.boardId}>
                  <LikeListCardImg src={p.firstImg} />
                  <h4>{p.boardTitle}</h4>
                  <LikeListMapData>
                    <LocationOnOutlinedIcon /> 서울 {p.mapData}
                  </LikeListMapData>
                  <LikeListCardDailyRentalFee>
                    <strong>{p.dailyRentalFee.toLocaleString()}</strong> 원 / 1
                    일
                  </LikeListCardDailyRentalFee>
                  <LikeListCardModifiedAt>
                    {nowYear !== year
                      ? `${nowYear - year}년 전`
                      : nowMonth !== month
                      ? `${nowMonth - month}개월 전`
                      : nowDate !== date
                      ? `${nowDate - date}일 전`
                      : nowHour !== hour
                      ? `${nowHour - hour}시간 전`
                      : nowMinute !== minute
                      ? `${nowMinute - minute}분 전`
                      : null}
                  </LikeListCardModifiedAt>
                </LikeListCard>
              );
            })}
          </LikeListWrapper>
          <PaginationButtons>
            <PageMoveButton
              className="prev"
              onClick={() => {
                if (pageNumber > 1) {
                  setPageNumber(pageNumber - 1);
                }
              }}
            >
              {"<"}
            </PageMoveButton>
            <PageNumsButtonWrapper>
              {[...Array(pageAmount)].map((n, idx) => {
                return (
                  <span
                    className={pageNumber === idx + 1 ? "nums checked" : "nums"}
                    onClick={() => {
                      setPageNumber(idx + 1);
                    }}
                  >
                    {idx + 1}
                  </span>
                );
              })}
            </PageNumsButtonWrapper>
            <PageMoveButton
              className="next"
              onClick={() => {
                if (pageNumber < pageAmount) {
                  setPageNumber(pageNumber + 1);
                }
              }}
            >
              {">"}
            </PageMoveButton>
          </PaginationButtons>
        </>
      ) : (
        <NothingPostedWrapper>
          <NothingPostedInner>
            <p>찜한 상품이 없습니다.</p>
            <button
              onClick={() => {
                history.push("/product/product-search");
              }}
            >
              상품 둘러보기
            </button>
          </NothingPostedInner>
        </NothingPostedWrapper>
      )}
    </Wrapper>
  );
};

export default LikeList;
