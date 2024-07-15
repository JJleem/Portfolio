import React from "react";
import Footer from "../../Component/footer/Footer";
import {
  StyleDetail,
  DetailWrapper,
  TopSection,
  BottomSection,
  ImgWrap,
  DescWrap,
  ImgHeader,
  HeartLogo,
  ImgSection,
} from "./StyleDetail";
import { useState } from "react";
import Db from "../../data/db.json";
import { useParams } from "react-router-dom";
const Detail = () => {
  interface Project {
    id?: string;
    img?: string;
  }
  const projects = Db.items;
  const { id } = useParams() as { id?: string };

  const ChooseData = projects.find((item) => item.id.toString() === id);

  const [isClick, setIsClick] = useState(false);
  const handleClicked = () => {
    setIsClick(!isClick);
  };
  return (
    <StyleDetail>
      <DetailWrapper>
        <TopSection></TopSection>
        <BottomSection>
          <ImgWrap>
            <ImgHeader>
              <HeartLogo isClick={isClick} onClick={handleClicked}></HeartLogo>
            </ImgHeader>
            <ImgSection img={ChooseData?.img}></ImgSection>
          </ImgWrap>
          <DescWrap></DescWrap>
        </BottomSection>
      </DetailWrapper>
      <Footer />
    </StyleDetail>
  );
};

export default Detail;
