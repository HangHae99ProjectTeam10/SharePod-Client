import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import MyPageService from "services/myPage";

const RentalList = () => {
  const dispatch = useDispatch();
  const [myRentalRole, setMyRentalRole] = useState("1");
  const { buyList } = useSelector(({ myPage }) => myPage);
  const { sellList } = useSelector(({ myPage }) => myPage);
  const [rentalList, setRentalList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [displayList, setDisplayList] = useState([]);
  const [pageAmount, setPageAmount] = useState(
    rentalList && parseInt(Math.ceil(rentalList.length / 6))
  );

  const handleRoleRadioButton = (e) => {
    setMyRentalRole(e.target.value);
    setPageNumber(1);
  };

  useEffect(() => {
    dispatch(MyPageService.getMyBuyList());
  }, []);

  useEffect(() => {
    setRentalList(buyList);
  }, [buyList]);

  useEffect(() => {
    if (myRentalRole === "1") {
      setRentalList(buyList);
    } else {
      setRentalList(sellList);
    }
  }, [myRentalRole]);

  useEffect(() => {
    setDisplayList([]);
    const addList = [];
    if (rentalList) {
      parseInt(Math.ceil(rentalList.length / 6));
      for (let i = (pageNumber - 1) * 6; i < pageNumber * 6; i++) {
        if (rentalList[i]) {
          addList.push(rentalList[i]);
          continue;
        }
        break;
      }
    }
    console.log(addList);
    setDisplayList(addList);
  }, [pageNumber, rentalList]);

  const moveToCertification = (p) => {
    console.log(p);
    history.push(
      `/reservation/product-quality-certification/?${p.authId}&${p.firstImgUrl}&${p.boardTitle}&${p.boardRegion}&${p.dailyRentalFee}`
    );
  };

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
        {rentalList?.length ? (
          displayList.map((p, idx) => {
            return (
              <div key={idx}>
                <RentalCard>
                  <RentalCardImg src={p.firstImgUrl} />
                  <RentalCardInfoWrapper>
                    <h3>{p.boardTitle}</h3>
                    <RentalCardMapData>
                      <LocationOnOutlinedIcon /> 서울
                      {p.boardRegion}
                    </RentalCardMapData>
                    <RentalCardDate>
                      <CalendarTodayOutlinedIcon />
                      {p.startRental.split("-").join(".")}~
                      {p.endRental.split("-").join(".")}
                    </RentalCardDate>
                    <RentalCardDailyRentalFee>
                      <strong>{p.dailyRentalFee.toLocaleString()}</strong> 원 /
                      1일
                    </RentalCardDailyRentalFee>
                    <RentalCardQualityConfirmButton
                      onClick={() => {
                        moveToCertification(p);
                      }}
                    >
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
              </div>
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
