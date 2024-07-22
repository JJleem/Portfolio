import React from "react";
import {
  ItemContainer,
  ItemSection,
} from "../../pages/collection/StyleCollection";
import {
  IntroductionInner,
  LinkSection,
  LinkTitle,
  PdfDownload,
  PdfDownloadLogo,
  PdfLink,
  PdfLogo,
  PdfSection,
  PdfText,
} from "./StyleIntroduction";

import pdf from "../../assets/img/icon/pdf.png";
import hwp from "../../assets/img/icon/hwp.png";
const Introduction = () => {
  return (
    <ItemContainer>
      <ItemSection>
        <IntroductionInner>
          <LinkSection>
            <LinkTitle>이력서 PDF 다운로드</LinkTitle>
            <PdfSection>
              <PdfLink
                to={
                  "https://raw.githubusercontent.com/JJleem/Portfolio/master/paper/%EC%9E%84%EC%9E%AC%EC%A4%80%20%EC%9D%B4%EB%A0%A5%EC%84%9C(PDF).pdf"
                }
              >
                <PdfLogo logo={pdf}></PdfLogo>
                <PdfText>이력서 PDF 형식 파일 다운로드</PdfText>

                <PdfDownload>
                  다운로드 <PdfDownloadLogo></PdfDownloadLogo>
                </PdfDownload>
              </PdfLink>
            </PdfSection>
          </LinkSection>
          <LinkSection>
            <LinkTitle>이력서 HWP 다운로드</LinkTitle>
            <PdfSection>
              <PdfLink
                to={
                  "https://raw.githubusercontent.com/JJleem/Portfolio/master/paper/%EC%9E%84%EC%9E%AC%EC%A4%80%20%EC%9E%85%EC%82%AC%EC%A7%80%EC%9B%90%EC%84%9C(HWP).hwp"
                }
              >
                <PdfLogo logo={hwp}></PdfLogo>
                <PdfText>이력서 HWP파일 다운로드</PdfText>

                <PdfDownload>
                  다운로드 <PdfDownloadLogo></PdfDownloadLogo>
                </PdfDownload>
              </PdfLink>
            </PdfSection>
          </LinkSection>
        </IntroductionInner>
      </ItemSection>
    </ItemContainer>
  );
};

export default Introduction;
