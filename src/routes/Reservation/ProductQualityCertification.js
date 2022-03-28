import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReservationService from "services/reservation";
import {
  CertificationConfirmButton,
  CertificationImageUploadButton,
  CertificationImageUploaded,
  CertificationImageUploader,
  CertificationImageUploaderInput,
  CertificationImageUploadSuccessButton,
  CertificationRefuseButton,
  HorizontalLine,
  ProductImage,
  ProductInfo,
  ProductInfoWrapper,
  ProductQualityCertificationCard,
  ProductQualityCertificationHeader,
  ProductQualityCertificationListWrapper,
  ProductQualityCertificationRequestDate,
  ProductQualityCertificationWrapper,
  Wrapper,
} from "./ProductQualityCertification.style";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import { Box } from "@mui/material";
import { history } from "redux/store";

const ProductQualityCertification = () => {
  const dispatch = useDispatch();
  const { certification_list } = useSelector(({ reservation }) => reservation);
  const { seller_id } = useSelector(({ reservation }) => reservation);
  const { buyer_id } = useSelector(({ reservation }) => reservation);
  const { userId } = useSelector(({ auth }) => auth.authUser);

  const search = window.location.search.split("&");
  const authId = search[0].split("?")[1];
  const productImg = search[1];
  const productTitle = decodeURI(search[2]);
  const productRegion = decodeURI(search[3]);
  const productDailyRentalFee = search[4];

  const startRental = "2022-03-29";
  const startRentalData = new Date(startRental);

  const [imgSrcList, setImgSrcList] = useState([]);
  const [imgFileList, setImgFileList] = useState([]);

  useEffect(() => {
    dispatch(ReservationService.getProductQualityCertification(authId));
  }, []);

  useEffect(() => {
    const newImgSrcList = [];
    for (let i = 0; i < certification_list.length; i++) {
      newImgSrcList.push(certification_list[i].authImgUrl);
    }
    setImgSrcList(newImgSrcList);
    console.log(certification_list);
  }, [certification_list]);

  const handleFileInput = (e, idx) => {
    const file = e.target.files[0];
    const num = e.target.name;
    if (!(file.type === "image/jpeg" || file.type === "image/png")) {
      alert("jpg, png 파일만 등록할 수 있습니다.");
      return;
    }
    let newImgFileList = [];
    for (let i = 0; i < certification_list.length; i++) {
      if (parseInt(idx) === i) {
        newImgFileList.push(file);
      } else {
        newImgFileList.push(imgFileList[i]);
      }
    }
    setImgFileList(newImgFileList);
    encodeFileToBase64(file, num);
  };

  const handleUploadButton = (idx) => {
    if (!imgFileList[idx]) {
      alert("이미지가 등록되지 않았습니다!");
      return;
    }
    dispatch(
      ReservationService.postProductQualityCertificationImage(
        imgFileList[idx],
        certification_list[idx].authImgId
      )
    );
  };

  const encodeFileToBase64 = (fileBlob, num) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        let newImgSrcList = [];
        for (let i = 0; i < certification_list.length; i++) {
          if (parseInt(num) === i) {
            newImgSrcList.push(reader.result);
          } else {
            newImgSrcList.push(imgSrcList[i]);
          }
        }
        setImgSrcList(newImgSrcList);
        resolve();
      };
    });
  };

  const handleConfirmButton = (e, idx) => {
    dispatch(
      ReservationService.postProductCertificationConfirm(
        e.target.value,
        certification_list[idx].authImgId,
        certification_list[idx].authImgUrl,
        idx
      )
    );
  };

  return (
    <Wrapper>
      <h2>제품 상태 기록하기</h2>
      <HorizontalLine />
      <ProductInfoWrapper>
        <ProductImage src={productImg} />
        <ProductInfo>
          <h3 className="boardTitle">{productTitle}</h3>
          <span className="boardRegion">
            <LocationOnOutlinedIcon /> 서울 {productRegion}
          </span>
          <span className="dailyRentalFee">
            <strong>
              {parseInt(productDailyRentalFee).toLocaleString()} 원 / 1일
            </strong>
          </span>
        </ProductInfo>
      </ProductInfoWrapper>
      <ProductQualityCertificationWrapper>
        <ProductQualityCertificationHeader>
          <span>
            상품 이미지({imgSrcList.filter((p) => p).length}/
            {certification_list.length})
          </span>
        </ProductQualityCertificationHeader>
        <ProductQualityCertificationListWrapper>
          {userId === buyer_id ? (
            <>
              {certification_list.map((p, idx) => {
                startRentalData.setDate(startRentalData.getDate() + 1);
                return (
                  <ProductQualityCertificationCard key={idx}>
                    <Box mr={2}>
                      <label htmlFor={`file-input${idx}`}>
                        {imgSrcList[idx] ? (
                          <CertificationImageUploaded
                            src={imgSrcList[idx]}
                            alt="img_1"
                          />
                        ) : (
                          <CertificationImageUploader>
                            <AddPhotoAlternateOutlinedIcon />
                            <p>이미지 등록</p>
                          </CertificationImageUploader>
                        )}
                      </label>
                      <CertificationImageUploaderInput
                        id={`file-input${idx}`}
                        type="file"
                        name={idx}
                        onChange={(e) => {
                          handleFileInput(e, idx);
                        }}
                      />
                    </Box>
                    {p.authImgCheck ? (
                      <CertificationImageUploadSuccessButton
                        onClick={() => {
                          alert("인증 완료 된 이미지 입니다.");
                        }}
                      >
                        등록완료
                      </CertificationImageUploadSuccessButton>
                    ) : (
                      <CertificationImageUploadButton
                        onClick={() => {
                          handleUploadButton(idx);
                        }}
                      >
                        등록하기
                      </CertificationImageUploadButton>
                    )}

                    <ProductQualityCertificationRequestDate>
                      요청일자:
                      {`${startRentalData.getFullYear()}.
                    ${startRentalData.getMonth() + 1}.
                    ${startRentalData.getDate()}`}
                    </ProductQualityCertificationRequestDate>
                  </ProductQualityCertificationCard>
                );
              })}
            </>
          ) : userId === seller_id ? (
            <>
              {certification_list.map((p, idx) => {
                startRentalData.setDate(startRentalData.getDate() + 1);
                return (
                  <ProductQualityCertificationCard key={idx}>
                    <Box mr={2}>
                      <label htmlFor={`file-input${idx}`}>
                        {imgSrcList[idx] ? (
                          <CertificationImageUploaded
                            src={imgSrcList[idx]}
                            alt="img_1"
                          />
                        ) : (
                          <CertificationImageUploader>
                            <AddPhotoAlternateOutlinedIcon />
                            <p>이미지 등록</p>
                          </CertificationImageUploader>
                        )}
                      </label>
                      <CertificationImageUploaderInput
                        id={`file-input${idx}`}
                        type="file"
                        name={idx}
                        onChange={(e) => {
                          handleFileInput(e, idx);
                        }}
                        disabled
                      />
                    </Box>
                    {p.authImgCheck ? (
                      <CertificationImageUploadSuccessButton
                        onClick={() => {
                          alert("인증 완료 된 이미지 입니다.");
                        }}
                      >
                        등록완료
                      </CertificationImageUploadSuccessButton>
                    ) : (
                      <>
                        <CertificationRefuseButton
                          value={false}
                          onClick={(e) => {
                            handleConfirmButton(e, idx);
                          }}
                        >
                          거절하기
                        </CertificationRefuseButton>
                        <CertificationConfirmButton
                          value={true}
                          onClick={(e) => {
                            handleConfirmButton(e, idx);
                          }}
                        >
                          승락하기
                        </CertificationConfirmButton>
                      </>
                    )}
                    <ProductQualityCertificationRequestDate>
                      요청일자:
                      {`${startRentalData.getFullYear()}.
                  ${startRentalData.getMonth() + 1}.
                  ${startRentalData.getDate()}`}
                    </ProductQualityCertificationRequestDate>
                  </ProductQualityCertificationCard>
                );
              })}
            </>
          ) : (
            <div>잘못 된 접근입니다.</div>
          )}
        </ProductQualityCertificationListWrapper>
      </ProductQualityCertificationWrapper>
    </Wrapper>
  );
};

export default ProductQualityCertification;
