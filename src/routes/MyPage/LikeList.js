import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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

import { history } from "redux/store";
import MyPageService from "services/myPage";
import { Pagination } from "@mui/material";
import ProductCard from "components/MyPage/ProductCard";

const LikeList = () => {
  const dispatch = useDispatch();

  const { likeList } = useSelector(({ myPage }) => myPage);

  const [startPageNum, setStartPageNum] = useState(0);
  const [nowPage, setNowPage] = useState(1);
  const [pageTotalCount, setPageTotalCount] = useState(1);

  useEffect(() => {
    dispatch(MyPageService.getMyLikeList());
  }, [dispatch]);

  useEffect(() => {
    const pageRestNum = likeList?.length % 6;
    if (pageRestNum === 0) {
      setPageTotalCount(parseInt(likeList?.length / 6));
    } else {
      setPageTotalCount(parseInt(likeList?.length / 6) + 1);
    }
  }, [likeList]);

  const handleChangePage = (e, page) => {
    setNowPage(page);
    setStartPageNum((page - 1) * 6);
  };

  return (
    <Wrapper>
      <h3>찜한 내역</h3>
      <HorizontalLine />
      {likeList?.length !== 0 ? (
        <>
          <LikeListWrapper>
            {likeList?.slice(startPageNum, startPageNum + 6).map((p) => {
              return <ProductCard {...p} key={p.boardId} />;
            })}
          </LikeListWrapper>
          <PaginationButtons>
            <Pagination
              count={pageTotalCount}
              variant="outlined"
              color="primary"
              page={nowPage}
              onChange={handleChangePage}
            />
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
