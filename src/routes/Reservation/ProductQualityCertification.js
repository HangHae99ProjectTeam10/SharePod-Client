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
  ProductInfo,
  ProductInfoBody,
  ProductInfoHeader,
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
  const { authUser } = useSelector(({ auth }) => auth);

  const search = window.location.search.split("&");
  const authId = search[0].split("?")[1];
  const productImg = search[1];
  const productTitle = decodeURI(search[2]);
  const productRegion = decodeURI(search[3]);
  const productDailyRentalFee = search[4];
  const startRental = search[5];
  const startRentalData = new Date(startRental);
  const endRental = search[6];
  const endRentalData = new Date(endRental);
  const rentalPeriod = Math.floor(
    (endRentalData.getTime() - startRentalData.getTime()) / (3600 * 24 * 1000)
  );
  const partnerNickName = search[7];
  const partnerProfileImg = search[8];

  const myId = authUser.userId;
  const myNickName = authUser.nickname;
  const myProfileImg = authUser.userImg;

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
  }, [certification_list]);

  const handleFileInput = (e, idx) => {
    const file = e.target.files[0];
    const num = e.target.name;
    if (!(file.type === "image/jpeg" || file.type === "image/png")) {
      alert("jpg, png ????????? ????????? ??? ????????????.");
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
      alert("???????????? ???????????? ???????????????!");
      return;
    }
    dispatch(
      ReservationService.postProductQualityCertificationImage(
        imgFileList[idx],
        certification_list[idx].authImgId,
        idx
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
    if (!certification_list[idx].authImgUrl) {
      alert("????????? ???????????? ????????????.");
    } else {
      dispatch(
        ReservationService.postProductCertificationConfirm(
          e.target.value,
          certification_list[idx].authImgId,
          certification_list[idx].authImgUrl,
          idx
        )
      );
    }
  };

  return (
    <Wrapper>
      <h2>?????? ?????? ????????????</h2>
      <HorizontalLine />
      <ProductInfoWrapper>
        <ProductInfo>
          <ProductInfoHeader>
            <span className="productInfoSeller">???????????????</span>
            <span className="productInfoBuyer">???????????????</span>
            <span className="productInfoTitle">????????????</span>
            <span className="productInfoBoardRegion">????????????</span>
            <span className="productInfoStartRental">?????????</span>
            <span className="productInfoEndRental">?????????</span>
            <span className="productInfoRentalPeriod">????????????</span>
            <span className="productInfoTotalFee">????????????</span>
          </ProductInfoHeader>
          <ProductInfoBody>
            <span className="productInfoSeller">
              {myId === seller_id ? (
                <>
                  <img src={myProfileImg} />
                  <p>{decodeURI(myNickName)}</p>
                </>
              ) : (
                <>
                  <img src={partnerProfileImg} />
                  <p>{decodeURI(partnerNickName)}</p>
                </>
              )}
            </span>
            <span className="productInfoBuyer">
              {" "}
              {myId === buyer_id ? (
                <>
                  <img src={myProfileImg} />
                  <p>{decodeURI(myNickName)}</p>
                </>
              ) : (
                <>
                  <img src={partnerProfileImg} />
                  <p>{decodeURI(partnerNickName)}</p>
                </>
              )}
            </span>
            <span className="productInfoTitle">
              <img src={productImg} />
              <p>{productTitle}</p>
            </span>
            <span className="productInfoBoardRegion">
              ????????? {productRegion}
            </span>
            <span className="productInfoStartRental">
              {startRental.split("-").join(".")}
            </span>
            <span className="productInfoEndRental">
              {endRental.split("-").join(".")}
            </span>
            <span className="productInfoRentalPeriod">{rentalPeriod} ???</span>
            <span className="productInfoTotalFee">
              ???{" "}
              {(
                rentalPeriod * parseInt(productDailyRentalFee)
              ).toLocaleString()}{" "}
              ???
            </span>
          </ProductInfoBody>
        </ProductInfo>
      </ProductInfoWrapper>
      <ProductQualityCertificationWrapper>
        <ProductQualityCertificationListWrapper>
          <ProductQualityCertificationHeader>
            <span>
              ?????? ?????????({imgSrcList.filter((p) => p).length}/
              {certification_list.length})
            </span>
          </ProductQualityCertificationHeader>
          {myId === buyer_id ? (
            <>
              {certification_list.map((p, idx) => {
                startRentalData.setDate(startRentalData.getDate() + 1);
                return (
                  <ProductQualityCertificationCard key={idx}>
                    <ProductQualityCertificationRequestDate>
                      {`${startRentalData.getFullYear()}.
                    ${startRentalData.getMonth() + 1}.
                    ${startRentalData.getDate()}`}
                    </ProductQualityCertificationRequestDate>
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
                            <p>????????? ??????</p>
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
                          alert("?????? ?????? ??? ????????? ?????????.");
                        }}
                      >
                        ????????????
                      </CertificationImageUploadSuccessButton>
                    ) : p.authImgUrl ? (
                      <CertificationImageUploadButton
                        onClick={() => {
                          handleUploadButton(idx);
                        }}
                      >
                        ?????? ????????????
                      </CertificationImageUploadButton>
                    ) : (
                      <CertificationImageUploadButton
                        onClick={() => {
                          handleUploadButton(idx);
                        }}
                      >
                        ????????????
                      </CertificationImageUploadButton>
                    )}
                  </ProductQualityCertificationCard>
                );
              })}
            </>
          ) : myId === seller_id ? (
            <>
              {certification_list.map((p, idx) => {
                startRentalData.setDate(startRentalData.getDate() + 1);
                return (
                  <ProductQualityCertificationCard key={idx}>
                    <ProductQualityCertificationRequestDate>
                      {`${startRentalData.getFullYear()}.
                  ${startRentalData.getMonth() + 1}.
                  ${startRentalData.getDate()}`}
                    </ProductQualityCertificationRequestDate>
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
                            <p>????????? ??????</p>
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
                          alert("?????? ?????? ??? ????????? ?????????.");
                        }}
                      >
                        ????????????
                      </CertificationImageUploadSuccessButton>
                    ) : (
                      <>
                        <CertificationRefuseButton
                          value={false}
                          onClick={(e) => {
                            handleConfirmButton(e, idx);
                          }}
                        >
                          ????????????
                        </CertificationRefuseButton>
                        <CertificationConfirmButton
                          value={true}
                          onClick={(e) => {
                            handleConfirmButton(e, idx);
                          }}
                        >
                          ????????????
                        </CertificationConfirmButton>
                      </>
                    )}
                  </ProductQualityCertificationCard>
                );
              })}
            </>
          ) : (
            <div>?????? ??? ???????????????.</div>
          )}
        </ProductQualityCertificationListWrapper>
      </ProductQualityCertificationWrapper>
    </Wrapper>
  );
};

export default ProductQualityCertification;
