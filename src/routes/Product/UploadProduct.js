import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Box, MenuItem, Select } from "@mui/material";

import { categoryList } from "constants/categoryList";
import { mapDataList } from "constants/mapDataList";
import { productQualityList } from "constants/productQualityList";
import { boardActionCreator } from "redux/middlewares/boardActionCreator";
import {
  UploadProdcutWrap,
  ProductImgaeField,
  ImageBox,
  ContentUploader,
  Form,
  Label,
  Input,
  Tags,
  FormNormalBtn,
  useStyles,
} from "./UploadProduct.style";
import { useDispatch } from "react-redux";

const UploadProduct = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [imageSrc1, setImageSrc1] = useState("");
  const [firstImgUrl, setFirstImgUrl] = useState();
  const [imageSrc2, setImageSrc2] = useState("");
  const [secondImgUrl, setSecondImgUrl] = useState();
  const [imageSrc3, setImageSrc3] = useState("");
  const [lastImgUrl, setLastImgUrl] = useState();
  const [videoSrc, setVideoSrc] = useState("");
  const [videoUrl, setVideoUrl] = useState();

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    const num = e.target.name;
    switch (num) {
      case "0":
        setFirstImgUrl(file);
        break;
      case "1":
        setSecondImgUrl(file);
        break;
      case "2":
        setLastImgUrl(file);
        break;
      case "3":
        break;
      default:
        return;
    }
    encodeFileToBase64(file, num);
  };

  const handleVideoInput = (e) => {
    const file = e.target.files[0];
    var reader = new FileReader();
    var url = URL.createObjectURL(file);
    setVideoUrl(url);
  };

  const mediaFiles = {
    imageSrc1,
    imageSrc2,
    imageSrc3,
    videoSrc,
  };

  const encodeFileToBase64 = (fileBlob, num) => {
    const reader = new FileReader();
    const number = num;
    console.log(fileBlob);
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        switch (num) {
          case "0":
            setImageSrc1(reader.result);
            break;
          case "1":
            setImageSrc2(reader.result);
            break;
          case "2":
            setImageSrc3(reader.result);
            break;
          case "3":
            setVideoSrc(reader.result);
            break;
          default:
            return;
        }
        resolve();
      };
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    dispatch(boardActionCreator.postBoardAxios(data, mediaFiles));
  };

  return (
    <UploadProdcutWrap>
      <h2>📝대여 거래 글 작성</h2>
      <ProductImgaeField>
        <span>상품 이미지 (0/4)</span>
        <ImageBox>
          <ContentUploader>
            <div
              style={{
                backgroundImage: `url("${imageSrc1}")`,
              }}
            ></div>
            <input
              type="file"
              name="0"
              onChange={(e) => {
                handleFileInput(e);
              }}
            ></input>
          </ContentUploader>
          <ContentUploader>
            <div
              style={{
                backgroundImage: `url("${imageSrc2}")`,
              }}
            ></div>
            <input
              type="file"
              name="1"
              onChange={(e) => {
                handleFileInput(e);
              }}
            ></input>
          </ContentUploader>
          <ContentUploader>
            <div
              style={{
                backgroundImage: `url("${imageSrc3}")`,
              }}
            ></div>
            <input
              type="file"
              name="2"
              onChange={(e) => {
                handleFileInput(e);
              }}
            ></input>
          </ContentUploader>
          <ContentUploader>
            <video>
              <source src={videoSrc}></source>
            </video>
            <input
              type="file"
              name="3"
              onChange={(e) => {
                handleFileInput(e);
              }}
            ></input>
          </ContentUploader>
        </ImageBox>
      </ProductImgaeField>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          제목
          <Input
            className="title"
            placeholder="제목을 입력해주세요."
            {...register("title", { required: true })}
          />
        </Label>
        <Label>
          카테고리
          <div className="category">
            <Select
              {...register("category")}
              defaultValue="디지털 기기"
              className={classes.selectCategory}
            >
              {categoryList.map((p) => {
                return (
                  <MenuItem key={p} value={p}>
                    {p}
                  </MenuItem>
                );
              })}
            </Select>
          </div>
        </Label>
        <Label>
          거래지역
          <div className="mapData">
            <Select value="서울시" className={classes.selectCity}>
              <MenuItem value="서울시">서울시</MenuItem>
            </Select>
            <Select
              {...register("boardRegion")}
              defaultValue="강남구"
              className={classes.selectSmCity}
            >
              {mapDataList.map((p) => {
                return (
                  <MenuItem key={p} value={p}>
                    {p}
                  </MenuItem>
                );
              })}
            </Select>
          </div>
        </Label>
        <Label>
          상태
          <div className="quality">
            <Select
              {...register("productQuality")}
              defaultValue="A"
              className={classes.selectQuality}
            >
              {productQualityList.map((p) => {
                return (
                  <MenuItem key={p} value={p}>
                    {p}
                  </MenuItem>
                );
              })}
            </Select>
          </div>
        </Label>
        <Label>
          대여비
          <Input
            type="number"
            className="dailyrentalfee"
            {...register("dailyRentalFee", { required: true })}
          ></Input>
          <span className="dayBy">원 / 1 일</span>
        </Label>
        <Label>
          설명
          <textarea
            {...register("contents", { required: true })}
            className="contents"
            placeholder="ex) 한번 사용했어요 / 한번도 사용한 적 없어요 / 새거예요 / 여러 번 썼어요 ···"
          ></textarea>
        </Label>
        {/* <Label>
          수량
          <Input
            type="number"
            className="amount"
            {...register("dailyRentalFee", { required: true })}
          ></Input>
          <span className="amountSpan">개</span>
        </Label> */}
        <Tags>
          연관태그
          <span className="mapdataTag">#강남구</span>
          <span className="categoryTag">#디지털 기기</span>
        </Tags>
        <FormNormalBtn type="submit">등록하기</FormNormalBtn>
      </Form>
    </UploadProdcutWrap>
  );
};

export default UploadProduct;
