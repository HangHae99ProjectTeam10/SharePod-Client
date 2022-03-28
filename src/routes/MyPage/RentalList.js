import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  HorizontalLine,
  NothingPostedInner,
  NothingPostedWrapper,
  PageMoveButton,
  PageNumsButtonWrapper,
  PaginationButtons,
  RentalCard,
  RentalCardBox,
  RentalCardDailyRentalFee,
  RentalCardDate,
  RentalCardImg,
  RentalCardInfoWrapper,
  RentalCardMapData,
  RentalCardQualityConfirmButton,
  TopButtons,
  Wrapper,
} from "./RentalList.style";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { history } from "redux/store";

const RentalList = () => {
  const [myRentalRole, setMyRentalRole] = useState("1");
  const { rentBuyList } = useSelector(({ myPage }) => myPage.myPageData);
  const { rentSellList } = useSelector(({ myPage }) => myPage.myPageData);
  const [rentalList, setRentalList] = useState(rentBuyList);
  const [pageNumber, setPageNumber] = useState(1);
  const [displayList, setDisplayList] = useState([]);
  const [pageAmount, setPageAmount] = useState(
    parseInt(Math.ceil(rentBuyList.length / 6))
  );

  const handleRoleRadioButton = (e) => {
    setMyRentalRole(e.target.value);
    setPageNumber(1);
  };

  useEffect(() => {
    if (myRentalRole === "1") {
      setRentalList(rentBuyList);
    } else {
      setRentalList(rentSellList);
    }
  }, [myRentalRole]);

  useEffect(() => {
    setDisplayList([]);
    const addList = [];
    setPageAmount(Math.ceil(rentalList.length / 6));
    for (let i = (pageNumber - 1) * 6; i < pageNumber * 6; i++) {
      console.log(pageNumber);
      console.log(rentalList);
      if (rentalList[i]) {
        addList.push(rentalList[i]);
        console.log(addList);
        continue;
      }
      break;
    }
    setDisplayList(addList);
  }, [pageNumber, rentalList]);

  return (
    <Wrapper>
      <h3>대여 내역</h3>
      <HorizontalLine />
      <TopButtons>
        <label className={myRentalRole === "1" ? "checked" : null}>
          대여 내역
          <input
            type="radio"
            name="myRole"
            value="1"
            hidden
            onChange={handleRoleRadioButton}
          />
        </label>
        <label className={myRentalRole === "2" ? "checked" : null}>
          공유한 내역
          <input
            type="radio"
            name="myRole"
            value="2"
            hidden
            onChange={handleRoleRadioButton}
          />
        </label>
      </TopButtons>
      <RentalCardBox>
        {rentalList.length ? (
          displayList.map((p, idx) => {
            return (
              <>
                <RentalCard key={idx}>
                  <RentalCardImg src={p.firstImgUrl} />
                  <RentalCardInfoWrapper>
                    <h3>{p.boardTitle}</h3>
                    <RentalCardMapData>
                      <LocationOnOutlinedIcon /> 서울 {p.boardRegion}
                    </RentalCardMapData>
                    <RentalCardDate>
                      <CalendarTodayOutlinedIcon /> {p.startRental}~
                      {p.endRental}
                    </RentalCardDate>
                    <RentalCardDailyRentalFee>
                      <strong>{p.dailyRentalFee.toLocaleString()}</strong> 원 /
                      1일
                    </RentalCardDailyRentalFee>
                    <RentalCardQualityConfirmButton>
                      품질 확인하기
                    </RentalCardQualityConfirmButton>
                  </RentalCardInfoWrapper>
                </RentalCard>
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
                          key={idx}
                          className={
                            pageNumber === idx + 1 ? "nums checked" : "nums"
                          }
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
            );
          })
        ) : myRentalRole === "1" ? (
          <NothingPostedWrapper>
            <NothingPostedInner>
              <p>대여한 물품이 없습니다.</p>
              <button
                onClick={() => {
                  history.push("/product/product-search");
                }}
              >
                물품 둘러보기
              </button>
            </NothingPostedInner>
          </NothingPostedWrapper>
        ) : (
          <NothingPostedWrapper>
            <NothingPostedInner>
              <p>공유한 상품이 없습니다.</p>
              <button
                className="toWriteBoard"
                onClick={() => {
                  history.push("/product/upload-product");
                }}
              >
                상품 등록하기
              </button>
              <button
                className="toRequestConfirm"
                onClick={() => {
                  history.push("/reservation/confirm");
                }}
              >
                거래요청 확인하기
              </button>
            </NothingPostedInner>
          </NothingPostedWrapper>
        )}
      </RentalCardBox>
    </Wrapper>
  );
};

export default RentalList;
