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
  const { requestList } = useSelector(({ myPage }) => myPage);
  const [rentalList, setRentalList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [displayList, setDisplayList] = useState([]);
  const [pageAmount, setPageAmount] = useState();

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
    } else if (myRentalRole === "2") {
      setRentalList(sellList);
    } else {
      console.log(requestList);
      setRentalList(requestList);
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
    setDisplayList(addList);
    setPageAmount(rentalList && parseInt(Math.ceil(rentalList.length / 6)));
  }, [pageNumber, rentalList]);

  const moveToCertification = (p) => {
    history.push(
      `/reservation/product-quality-certification/?${p.authId}&${p.firstImgUrl}&${p.boardTitle}&${p.boardRegion}&${p.dailyRentalFee}&${p.startRental}&${p.endRental}&${p.nickName}&${p.othersImg}`
    );
  };

  const moveToDetail = (id) => {
    history.push(`/product/product-detail/${id}`);
  };

  return (
    <Wrapper>
      <h3>?????? ??????</h3>
      <HorizontalLine />
      <TopButtons>
        <label className={myRentalRole === "1" ? "checked" : null}>
          ?????? ??????
          <input
            type="radio"
            name="myRole"
            value="1"
            hidden
            onChange={handleRoleRadioButton}
          />
        </label>
        <label className={myRentalRole === "2" ? "checked" : null}>
          ????????? ??????
          <input
            type="radio"
            name="myRole"
            value="2"
            hidden
            onChange={handleRoleRadioButton}
          />
        </label>
        <label className={myRentalRole === "3" ? "checked" : null}>
          ?????? ?????? ??????
          <input
            type="radio"
            name="myRole"
            value="3"
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
                      <LocationOnOutlinedIcon /> ??????
                      {p.boardRegion}
                    </RentalCardMapData>
                    <RentalCardDate>
                      <CalendarTodayOutlinedIcon />
                      {p.startRental.split("-").join(".")}~
                      {p.endRental.split("-").join(".")}
                    </RentalCardDate>
                    <RentalCardDailyRentalFee>
                      <strong>{p.dailyRentalFee.toLocaleString()}</strong> ??? /
                      1???
                    </RentalCardDailyRentalFee>
                    {myRentalRole === "3" ? (
                      <RentalCardQualityConfirmButton
                        onClick={() => {
                          moveToDetail(p.boardId);
                        }}
                      >
                        ?????? ????????????
                      </RentalCardQualityConfirmButton>
                    ) : (
                      <RentalCardQualityConfirmButton
                        onClick={() => {
                          moveToCertification(p);
                        }}
                      >
                        ?????? ????????????
                      </RentalCardQualityConfirmButton>
                    )}
                  </RentalCardInfoWrapper>
                </RentalCard>
                {/* <PaginationButtons>
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
                </PaginationButtons> */}
              </div>
            );
          })
        ) : myRentalRole === "1" ? (
          <NothingPostedWrapper>
            <NothingPostedInner>
              <p>????????? ????????? ????????????.</p>
              <button
                onClick={() => {
                  history.push("/product/product-search");
                }}
              >
                ?????? ????????????
              </button>
            </NothingPostedInner>
          </NothingPostedWrapper>
        ) : myRentalRole === "2" ? (
          <NothingPostedWrapper>
            <NothingPostedInner>
              <p>????????? ????????? ????????????.</p>
              <button
                className="toWriteBoard"
                onClick={() => {
                  history.push("/product/upload-product");
                }}
              >
                ?????? ????????????
              </button>
              <button
                className="toRequestConfirm"
                onClick={() => {
                  history.push("/reservation/confirm");
                }}
              >
                ???????????? ????????????
              </button>
            </NothingPostedInner>
          </NothingPostedWrapper>
        ) : (
          <NothingPostedWrapper>
            <NothingPostedInner>
              <p>?????? ??????????????? ????????????.</p>
              <button
                onClick={() => {
                  history.push("/product/product-search");
                }}
              >
                ?????? ????????????
              </button>
            </NothingPostedInner>
          </NothingPostedWrapper>
        )}
      </RentalCardBox>
    </Wrapper>
  );
};

export default RentalList;
