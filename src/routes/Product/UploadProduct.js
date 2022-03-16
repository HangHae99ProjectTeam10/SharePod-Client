import React, { useState } from "react";

import styled from "styled-components";
import Dropdown from "../../components/Dropdown";

const UploadProduct = () => {
  const [imageSrc1, setImageSrc1] = useState("");
  const [imageSrc2, setImageSrc2] = useState("");
  const [imageSrc3, setImageSrc3] = useState("");
  const [videoSrc, setVideoSrc] = useState("");
  const handleFileInput = (e) => {
    const file = e.target.files[0];
    const num = e.target.name;
    console.log(file, num);
    encodeFileToBase64(file, num);
  };

  const encodeFileToBase64 = (fileBlob, num) => {
    const reader = new FileReader();
    const number = num;
    console.log(fileBlob);
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        if (number === "0") {
          setImageSrc1(reader.result);
        } else if (number === "1") {
          setImageSrc2(reader.result);
        } else if (number === "2") {
          setImageSrc3(reader.result);
        } else {
          setVideoSrc(reader.result);
        }
        resolve();
      };
    });
  };
  const categories = [
    { value: "디지털 기기", name: "디지털 기기" },
    { value: "생활 가전", name: "생활 가전" },
    { value: "음반/악기", name: "음반/악기" },
    { value: "스포츠/레저", name: "스포츠/레저" },
    { value: "컴퓨터/게임", name: "컴퓨터/게임" },
  ];
  const mapDataList = [
    { value: "종로구", name: "종로구" },
    { value: "중구", name: "중구" },
    { value: "용산구", name: "용산구" },
    { value: "성동구", name: "성동구" },
    { value: "광진구", name: "광진구" },
    { value: "동대문구", name: "동대문구" },
    { value: "중랑구", name: "중랑구" },
    { value: "성북구", name: "성북구" },
    { value: "강북구", name: "강북구" },
    { value: "도봉구", name: "도봉구" },
    { value: "노원구", name: "노원구" },
    { value: "은평구", name: "은평구" },
    { value: "서대문구", name: "서대문구" },
    { value: "마포구", name: "마포구" },
    { value: "양천구", name: "양천구" },
    { value: "강서구", name: "강서구" },
    { value: "구로구", name: "구로구" },
    { value: "금천구", name: "금천구" },
    { value: "영등포구", name: "영등포구" },
    { value: "동작구", name: "동작구" },
    { value: "관악구", name: "관악구" },
    { value: "서초구", name: "서초구" },
    { value: "강남구", name: "강남구" },
    { value: "송파구", name: "송파구" },
    { value: "강동구", name: "강동구" },
  ];

  const qualities = [
    { value: "A", name: "A" },
    { value: "B", name: "B" },
    { value: "C", name: "C" },
  ];
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
      <Label>
        제목
        <Input className="title" placeholder="제목을 입력해주세요." />
      </Label>
      <Label>
        카테고리
        <div className="category">
          <Dropdown options={categories}></Dropdown>
        </div>
      </Label>
      <Label>
        거래지역
        <span className="mapSpan">서울시</span>
        <Dropdown className="mapdata" options={mapDataList}></Dropdown>
      </Label>
      <Label>
        상태
        <div className="quality">
          <Dropdown options={qualities}></Dropdown>
        </div>
      </Label>
      <Label>
        대여비
        <Input className="dailyrentalfee"></Input>
        <span className="dayBy">원 / 1 일</span>
      </Label>
      <Label>
        설명
        <textarea
          className="contents"
          placeholder="ex) 한번 사용했어요 / 한번도 사용한 적 없어요 / 새거예요 / 여러 번 썼어요 ···"
        ></textarea>
      </Label>
      <Label>
        수량
        <Input className="amount"></Input>
        <span className="amountSpan">개</span>
      </Label>
      <Tags>
        연관태그
        <span className="mapdataTag">#강남구</span>
        <span className="categoryTag">#디지털 기기</span>
      </Tags>
      <button>등록하기</button>
    </UploadProdcutWrap>
  );
};

const UploadProdcutWrap = styled.section`
  display: flex;
  flex-direction: column;
  padding: 40px 165px 253px;
  h2 {
    font-size: 24px;
    font-weight: 700;
  }
  button {
    width: 349px;
    height: 70px;
    border: none;
    margin-left: auto;
    border-radius: 8px;
    padding: 26px 120px;
    font-size: 24px;
    font-weight: 700;
    line-height: 26px;
    color: #fff;
    cursor: pointer;
    background-color: #8c8c8c;
  }
`;

const ProductImgaeField = styled.div`
  display: flex;
  margin-bottom: 40px;
  span {
    display: inline-block;
    font-size: 20px;
    font-weight: 700;
    color: #777;
  }
`;

const ImageBox = styled.div`
  display: flex;
  width: 730px;
  gap: 30px;
  margin-left: 41px;
`;

const ContentUploader = styled.label`
  width: 160px;
  height: 160px;

  div,
  video {
    display: inline-block;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-size: cover;
    border-radius: 5px;
    background-color: #777;
  }
  input {
    opacity: 0;
  }
`;

const Label = styled.label`
  display: flex;
  font-size: 20px;
  font-weight: 700;
  color: #777;
  margin-bottom: 40px;
  .title {
    width: 729px;
    margin-left: 155px;
    padding: 17px 16px;
    font-size: 16px;
  }
  .category {
    margin-left: 117px;
  }
  .mapSpan {
    margin: 0 30px 0 116px;
    color: #c4c4c4;
    font-size: 16px;
    font-weight: 700;
    padding: 17px 18px;
    width: 160px;
    border: 1px solid #c4c4c4;
    border-radius: 8px;
  }
  .mapdata {
    margin-left: 30px;
  }
  .quality {
    margin-left: 153px;
  }

  .dailyrentalfee {
    width: 254px;
    height: 56px;
    margin-left: 134px;
  }
  .dayBy {
    margin-left: 12px;
    line-height: 60px;
  }

  textarea {
    width: 920px;
    height: 180px;
    font-size: 16px;
    margin-left: 153px;
    padding: 23px 10px;
    resize: none;
  }

  .amount {
    margin: 0 12px 0 154px;
    width: 254px;
    height: 56px;
    font-size: 16px;
  }
  .amountSpan {
    line-height: 60px;
  }
`;

const Input = styled.input`
  border-radius: 8px;
  border: 1px solid #c4c4c4;
`;

const Tags = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #777;
  margin-bottom: 36px;
  span {
    color: #8c8c8c;
    font-size: 14px;
    weight: 400;
    padding: 6px 13px;
    border-radius: 20px;
    background-color: #ededed;
  }
  .mapdataTag {
    margin-left: 116px;
  }
  .categoryTag {
    margin-left: 12px;
  }
`;
export default UploadProduct;
