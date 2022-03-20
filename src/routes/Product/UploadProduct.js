import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Box, Divider, MenuItem, Select } from "@mui/material";

import { categoryList } from "constants/categoryList";
import { mapDataList } from "constants/mapDataList";
import { productQualityList } from "constants/productQualityList";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import {
  Wrapper,
  ProductImgaeField,
  useStyles,
  FormLabel,
  ProductImageUploader,
  ProductImageUploaderInput,
  FormInput,
  FormErrorMsg,
  FormBox,
  BtnBox,
  BackBtn,
  SubmitBtn,
  FormWrapper,
  FormTextArea,
  ProductImageUploaded,
  ProductVideoUploaded,
} from "./UploadProduct.style";
import { useDispatch } from "react-redux";
import ProductService from "services/product";

const UploadProduct = () => {
  /**TODO: 여기 하드코딩 되어있는 부분 나중에 고치기 */
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  //프론트에서 사용
  const [firstImgSrc, setFirstImgSrc] = useState();
  const [secondImgSrc, setSecondImgSrc] = useState();
  const [lastImgSrc, setLastImgSrc] = useState();
  const [videoSrc, setVideoSrc] = useState();
  //서버에 보내는 url
  const [firstImgUrl, setFirstImgUrl] = useState();
  const [secondImgUrl, setSecondImgUrl] = useState();
  const [lastImgUrl, setLastImgUrl] = useState();
  const [videoUrl, setVideoUrl] = useState();

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    const num = e.target.name;
    switch (num) {
      case "0":
        if (!(file.type === "image/jpeg" || file.type === "image/png")) {
          alert("jpg, png 파일만 등록할 수 있습니다.");
          return;
        }
        setFirstImgUrl(file);
        break;
      case "1":
        if (!(file.type === "image/jpeg" || file.type === "image/png")) {
          alert("jpg, png 파일만 등록할 수 있습니다.");
          return;
        }
        setSecondImgUrl(file);
        break;
      case "2":
        if (!(file.type === "image/jpeg" || file.type === "image/png")) {
          alert("jpg, png 파일만 등록할 수 있습니다.");
          return;
        }
        setLastImgUrl(file);
        break;
      case "3":
        if (!(file.type === "video/mp4")) {
          alert("동영상 파일만 등록할 수 있습니다.");
          return;
        }
        setVideoUrl(file);
        break;
      default:
        return;
    }
    encodeFileToBase64(file, num);
  };

  const mediaFiles = {
    firstImgUrl,
    secondImgUrl,
    lastImgUrl,
    videoUrl,
  };

  const encodeFileToBase64 = (fileBlob, num) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        switch (num) {
          case "0":
            setFirstImgSrc(reader.result);
            break;
          case "1":
            setSecondImgSrc(reader.result);
            break;
          case "2":
            setLastImgSrc(reader.result);
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

  const onSubmit = (data) => {
    dispatch(ProductService.addProduct(data, mediaFiles));
  };

  return (
    <Wrapper>
      <h2>기본정보</h2>
      <Divider />
      <FormWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ProductImgaeField>
            <FormLabel>상품 이미지 (0/4)</FormLabel>

            <Box mr={2}>
              <label htmlFor="file-input1">
                {firstImgSrc ? (
                  <ProductImageUploaded src={firstImgSrc} alt="img_1" />
                ) : (
                  <ProductImageUploader>
                    <AddPhotoAlternateOutlinedIcon />
                    <p>이미지 등록</p>
                  </ProductImageUploader>
                )}
              </label>
              <ProductImageUploaderInput
                id="file-input1"
                type="file"
                name="0"
                onChange={(e) => {
                  handleFileInput(e);
                }}
              />
            </Box>
            <Box mx={2}>
              <label htmlFor="file-input2">
                {secondImgSrc ? (
                  <ProductImageUploaded src={secondImgSrc} alt="img_2" />
                ) : (
                  <ProductImageUploader>
                    <AddPhotoAlternateOutlinedIcon />
                    <p>이미지 등록</p>
                  </ProductImageUploader>
                )}
              </label>
              <ProductImageUploaderInput
                id="file-input2"
                type="file"
                name="1"
                onChange={(e) => {
                  handleFileInput(e);
                }}
              />
            </Box>
            <Box mx={2}>
              <label htmlFor="file-input3">
                {lastImgSrc ? (
                  <ProductImageUploaded src={lastImgSrc} alt="img_3" />
                ) : (
                  <ProductImageUploader>
                    <AddPhotoAlternateOutlinedIcon />
                    <p>이미지 등록</p>
                  </ProductImageUploader>
                )}
              </label>
              <ProductImageUploaderInput
                id="file-input3"
                type="file"
                name="2"
                onChange={(e) => {
                  handleFileInput(e);
                }}
              />
            </Box>
            <Box mx={2}>
              <label htmlFor="file-input4">
                {videoSrc ? (
                  <ProductVideoUploaded src={videoSrc} />
                ) : (
                  <ProductImageUploader>
                    <VideoCallOutlinedIcon />
                    <p>비디오 등록</p>
                  </ProductImageUploader>
                )}
              </label>
              <ProductImageUploaderInput
                id="file-input4"
                type="file"
                name="3"
                onChange={(e) => {
                  handleFileInput(e);
                }}
              />
            </Box>
          </ProductImgaeField>
          <FormBox>
            <FormLabel>제목</FormLabel>
            <FormInput
              {...register("title", {
                required: true,
              })}
              placeholder="제목을 입력해주세요"
            />
            {errors.title && <FormErrorMsg>제목을 입력해주세요</FormErrorMsg>}
          </FormBox>
          <FormBox>
            <FormLabel>카테고리</FormLabel>
            <Select
              defaultValue="디지털 기기"
              {...register("category", {
                required: true,
              })}
            >
              {categoryList.map((p) => {
                return (
                  <MenuItem key={p} value={p}>
                    {p}
                  </MenuItem>
                );
              })}
            </Select>
          </FormBox>
          <FormBox>
            <FormLabel>거래지역</FormLabel>
            <Select value="서울시">
              <MenuItem value="서울시">서울시</MenuItem>
            </Select>
            <Select {...register("boardRegion")} defaultValue="강남구">
              {mapDataList.map((p) => {
                return (
                  <MenuItem key={p} value={p}>
                    {p}
                  </MenuItem>
                );
              })}
            </Select>
          </FormBox>
          <FormBox>
            <FormLabel>상태</FormLabel>
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
          </FormBox>
          <FormBox>
            <FormLabel>대여비</FormLabel>
            <FormInput
              type="number"
              {...register("dailyRentalFee", { required: true })}
            />
            <span className="price_unit">원 / 1 일 기준</span>
          </FormBox>
          <FormBox>
            <FormLabel>설명</FormLabel>
            <FormTextArea
              {...register("contents", { required: true })}
              placeholder="ex) 한번 사용했어요 / 한번도 사용한 적 없어요 / 새거예요 / 여러 번 썼어요 ···"
            />
          </FormBox>

          <BtnBox>
            <BackBtn>돌아가기</BackBtn>
            <SubmitBtn>등록하기</SubmitBtn>
          </BtnBox>
        </form>
      </FormWrapper>
    </Wrapper>
  );
};

export default UploadProduct;
