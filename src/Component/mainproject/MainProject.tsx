import React from "react";
import {
  DescWrap,
  HidTitleWrap,
  ImageSection,
  ImgWrap,
  Inner,
  Item,
  ItemDesc,
  ItemList,
  ItemTitle,
  ItemWrap,
  Logo,
  LogoList,
  ProjectWrap,
  TitleWrap,
} from "./StyleMainProject";
import Btn from "../btn/Btn";
import theme from "../../assets/theme/theme";

const MainProject = () => {
  return (
    <ProjectWrap>
      <Inner>
        <DescWrap>
          <TitleWrap>
            <span>OVERVIEW</span>
            #1 Videoplatform
          </TitleWrap>
          <ItemWrap>
            <ItemList>
              <Item>
                <ItemTitle>Price</ItemTitle>
                <ItemDesc>w 5,000</ItemDesc>
              </Item>
              <Item>
                <ItemTitle>Quantity</ItemTitle>
                <ItemDesc>000ea</ItemDesc>
              </Item>
              <Item>
                <ItemTitle>Owned By</ItemTitle>
                <ItemDesc>핀플러스글로벌</ItemDesc>
              </Item>
              <Item>
                <ItemTitle>Description</ItemTitle>
                <ItemDesc>실물자산 기반 최초의 수익형 부동산 NFT</ItemDesc>
              </Item>
              <Item>
                <ItemTitle>SNS</ItemTitle>
                <ItemDesc>
                  <LogoList>
                    <Logo />
                    <Logo />
                    <Logo />
                  </LogoList>
                </ItemDesc>
              </Item>
            </ItemList>
            <Btn bgColor={theme.colors.primary_V} text="BUY NOW" size="p15l" />
          </ItemWrap>
        </DescWrap>
        <ImageSection>
          <HidTitleWrap>
            <span>OVERVIEW</span>
            #1 Videoplatform
          </HidTitleWrap>
          <ImgWrap></ImgWrap>
        </ImageSection>
      </Inner>
    </ProjectWrap>
  );
};

export default MainProject;
