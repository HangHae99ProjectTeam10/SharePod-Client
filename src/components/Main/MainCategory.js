import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  CategoryListItemContentWrapper,
  CategoryNavList,
  CategoryNavWrapper,
  CategoryText,
  FlexBox,
  ProductCategoryListItem,
  ProductRegionListItem,
  Wrapper,
} from "./MainCategory.style";
import { categoryList } from "constants/categoryList";
import { mapDataList } from "constants/mapDataList";
import { history } from "redux/store";

const CategoryListItemContent = (props) => {
  const { categorySelectRadio } = props;
  const moveToSearchResultProduct = (p) => {
    history.push(`/product/product-search/?&&${p}`);
  };

  const moveToSearchResultRegion = (p) => {
    if (p === "전체보기") {
      history.push(`/product/product-search/?&&&${" "}`);
    } else {
      history.push(`/product/product-search/?&&&${p}`);
    }
  };
  return (
    <CategoryListItemContentWrapper categorySelectRadio={categorySelectRadio}>
      {categorySelectRadio === "product"
        ? categoryList.map((p) => {
            return (
              <div key={p} onClick={() => moveToSearchResultProduct(p)}>
                {p}
              </div>
            );
          })
        : categorySelectRadio === "region"
        ? mapDataList.map((p) => {
            return (
              <div key={p} onClick={() => moveToSearchResultRegion(p)}>
                {p}
              </div>
            );
          })
        : null}
    </CategoryListItemContentWrapper>
  );
};

const CategoryNav = (props) => {
  const [categorySelectRadio, setCategorySelectRadio] = useState(false);
  const { categoryNavToggle } = props;

  const handleSetCategorySelectRadio = (value) => {
    if (categorySelectRadio === value) {
      setCategorySelectRadio(false);
    } else {
      setCategorySelectRadio(value);
    }
  };
  return (
    <CategoryNavWrapper categoryNavToggle={categoryNavToggle}>
      <CategoryNavList>
        <ProductCategoryListItem
          className={categorySelectRadio === "product" ? "checked" : null}
          onClick={() => handleSetCategorySelectRadio("product")}
        >
          제품 전체보기
        </ProductCategoryListItem>
        <ProductRegionListItem
          className={categorySelectRadio === "region" ? "checked" : null}
          onClick={() => handleSetCategorySelectRadio("region")}
        >
          지역 전체보기
        </ProductRegionListItem>
      </CategoryNavList>
      <CategoryListItemContent categorySelectRadio={categorySelectRadio} />
    </CategoryNavWrapper>
  );
};

const MainCategory = () => {
  const [categoryNavToggle, setCategoryNavToggle] = useState(false);
  const handleCategoryNavToggle = () => {
    if (categoryNavToggle) {
      setCategoryNavToggle(false);
    } else {
      setCategoryNavToggle(true);
    }
  };
  return (
    <Wrapper>
      <FlexBox onClick={handleCategoryNavToggle}>
        <MenuIcon />
        <CategoryText>카테고리</CategoryText>
      </FlexBox>
      <CategoryNav categoryNavToggle={categoryNavToggle} />
    </Wrapper>
  );
};

export default MainCategory;
