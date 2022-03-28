import React, { useEffect, useState } from "react";
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
  ImgUploadGuide,
  FormBoxWrapper,
} from "./UploadProduct.style";
import { useDispatch, useSelector } from "react-redux";
import ProductService from "services/product";
import {
  useLocation,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

const EditProduct = () => {
  /**TODO: 여기 하드코딩 되어있는 부분 나중에 고치기 */
  const classes = useStyles();
  const location = useLocation();
  const { id } = useParams();
  const { product_detail } = useSelector(({ product }) => product);
  console.log(product_detail);

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

  const [titleValue, setTitleValue] = useState(product_detail?.title);
  const onHandleTitleValue = (e) => {
    setTitleValue(e.target.value);
  };
  const [categoryValue, setCategoryValue] = useState(
    product_detail?.category ? product_detail?.category : "디지털 기기"
  );
  useEffect(() => {
    if (location.pathname.includes("edit")) {
      dispatch(ProductService.getOneProductDetail(id));
      // location.reload();
    }
  }, [dispatch, id, location.pathname]);

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
    if (!firstImgUrl || !videoUrl) {
      window.alert("사진과 동영상을 업로드 해주세요");
    } else {
      if (location.pathname.includes("edit")) {
        dispatch(ProductService.editProduct(id, data, mediaFiles));
      } else {
        console.log("add");
        dispatch(ProductService.addProduct(data, mediaFiles));
      }
    }
  };

  useEffect(() => {
    if (location.pathname.includes("edit")) {
      dispatch(ProductService.getOneProductDetail(id));
    }
  }, [dispatch, id, location]);

  return (
    <Wrapper>
      {id ? <h2>상품 수정하기</h2> : <h2>상품 등록하기</h2>}
      <Divider />
      <FormWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ProductImgaeField>
            <FormLabel>
              상품 이미지 (0/4) <span>* </span>
            </FormLabel>

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
          <ImgUploadGuide>
            *상품 이미지는 640×640에 최적화되었습니다.
            <br />- 이미지는 상품등록 시 정사각형으로 짤려서 등록됩니다. <br />
            - 이미지를 클릭할 경우 원본 이미지를 확인 할 수 있습니다. <br />- 큰
            이미지일 경우 이미지가 깨지는 경우가 발생할 수 있습니다. <br />
            최대 지원 사이즈인 640×640으로 리사이즈 해서 올려주세요.(개당
            이미지최대50M)
          </ImgUploadGuide>
          <FormBoxWrapper>
            <FormBox>
              <FormLabel>
                제목<span>* </span>
              </FormLabel>
              <FormInput
                minLength={2}
                maxLength={40}
                {...register("title", {
                  required: true,
                })}
                defaultValue={product_detail?.title && product_detail?.title}
                placeholder="제목을 입력해주세요"
              />
              <span className="title">0/40</span>
            </FormBox>
            {errors.title && (
              <FormErrorMsg>제목을 2글자이상 입력해주세요</FormErrorMsg>
            )}
          </FormBoxWrapper>
          <FormBoxWrapper>
            <FormBox>
              <FormLabel>
                카테고리<span>* </span>
              </FormLabel>
              <Select
                defaultValue={categoryValue}
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
          </FormBoxWrapper>
          <FormBoxWrapper>
            <FormBox>
              <FormLabel>
                거래지역<span>* </span>
              </FormLabel>
              <Select value="서울시" disabled>
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
          </FormBoxWrapper>
          <FormBoxWrapper>
            <FormBox>
              <FormLabel>
                상태<span>*</span>
              </FormLabel>
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
          </FormBoxWrapper>
          <FormBoxWrapper>
            <FormBox>
              <FormLabel>
                상품원가 <span>*</span>
              </FormLabel>
              <FormInput
                min={100}
                width="300px"
                type="number"
                placeholder="숫자만 입력해주세요"
                defaultValue={
                  product_detail?.originPrice && product_detail?.originPrice
                }
                {...register("originPrice", { required: true })}
              />
              <span className="price_unit">원</span>
            </FormBox>
          </FormBoxWrapper>
          <FormBoxWrapper>
            <FormBox>
              <FormLabel>
                대여비 <span>*</span>
              </FormLabel>
              <FormInput
                min={100}
                width="300px"
                type="number"
                placeholder="가격을 입력해주세요"
                defaultValue={
                  product_detail?.dailyRentalFee &&
                  product_detail?.dailyRentalFee
                }
                {...register("dailyRentalFee", { required: true })}
              />
              <span className="price_unit">원 / 1 일 기준</span>
            </FormBox>
          </FormBoxWrapper>
          <FormBoxWrapper>
            <FormBox>
              <FormLabel>설명</FormLabel>
              <FormTextArea
                minLength={10}
                maxLength={2000}
                {...register("contents", { required: true })}
                defaultValue={
                  product_detail?.contents ? product_detail?.contents : ""
                }
                placeholder="ex) 한번 사용했어요 / 한번도 사용한 적 없어요 / 새거예요 / 여러 번 썼어요 ···"
              />
              <span className="contents">0/2000</span>
            </FormBox>
            {errors.contents && (
              <FormErrorMsg>설명을 10글자이상 입력해주세요</FormErrorMsg>
            )}
          </FormBoxWrapper>

          <BtnBox>
            <BackBtn>돌아가기</BackBtn>
            <SubmitBtn>등록하기</SubmitBtn>
          </BtnBox>
        </form>
      </FormWrapper>
    </Wrapper>
  );
};

export default EditProduct;
