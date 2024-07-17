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
import { Link } from "react-router-dom";
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
                  "https://github.com/JJleem/Portfolio/raw/master/paper/jaejunIntroduction.zip"
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
                  "https://github.com/JJleem/Portfolio/raw/master/paper/jaejunIntroduction.zip"
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
