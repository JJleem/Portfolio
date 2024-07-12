import React from "react";
import {
  BgWrapper,
  FirstProjectWrap,
  HomeGrid,
  HomeWrapper,
  ItemWrapper,
  Logo,
  MainDesc,
  MainInfo,
  MainItem,
  MainItemDesc,
  MainItemLogo,
  MainLogo,
  MainProjectWrap,
  MainTitle,
  ProjectTitle,
  SubTitle,
} from "./StyleMainHome";
import ExploreGnb from "../../Component/gnb/ExploreGnb";
import Footer from "../../Component/footer/Footer";
import Btn from "../../Component/btn/Btn";
import theme from "../../assets/theme/theme";
import Box from "../../Component/box/Box";
import videoplatform from "../../assets/img/item/videoplatform.png";
import typescript from "../../assets/img/skill/Typescript.png";
import { ProjectWrap } from "../../Component/mainproject/StyleMainProject";
import MainProject from "../../Component/mainproject/MainProject";

const MainHome = () => {
  return (
    <HomeWrapper>
      <ExploreGnb />
      <BgWrapper>
        <HomeGrid>
          <MainInfo>
            <MainLogo />
            <MainTitle>
              <span>JJ</span>SPACE
            </MainTitle>
            <SubTitle>BOSagora NFT MARKET PLACE</SubTitle>
            <MainDesc>
              2024년 7월, JJSPACE 차원의 문이 열리기 시작했습니다! <br />
              내가 보유한 NFT 및 자산 확인이 가능한 상태입니다.
            </MainDesc>
          </MainInfo>
          <ItemWrapper>
            <MainItem>
              <MainItemLogo>
                <Logo type="ts" />
              </MainItemLogo>
              <MainItemDesc>
                BOASPACE는 <br />
                보스아고라 메인넷 기반의 NFT 마켓플레이스입니다.
              </MainItemDesc>
            </MainItem>
            <MainItem>
              <MainItemLogo>
                <Logo type="react" />
              </MainItemLogo>
              <MainItemDesc>
                BOASPACE는 <br />
                보스아고라 메인넷 기반의 NFT 마켓플레이스입니다.
              </MainItemDesc>
            </MainItem>
            <MainItem>
              <MainItemLogo>
                <Logo type="js" />
              </MainItemLogo>
              <MainItemDesc>
                BOASPACE는 <br />
                보스아고라 메인넷 기반의 NFT 마켓플레이스입니다.
              </MainItemDesc>
            </MainItem>
            <MainItem>
              <MainItemLogo>
                <Logo type="github" />
              </MainItemLogo>
              <MainItemDesc>
                BOASPACE는 <br />
                보스아고라 메인넷 기반의 NFT 마켓플레이스입니다.
              </MainItemDesc>
            </MainItem>
            <MainItem>
              <MainItemLogo>
                <Logo />
              </MainItemLogo>
              <MainItemDesc>
                BOASPACE는 <br />
                보스아고라 메인넷 기반의 NFT 마켓플레이스입니다.
              </MainItemDesc>
            </MainItem>
          </ItemWrapper>
          <Btn
            bgColor={theme.colors.primary_V}
            text="CONNECT WALLET"
            size="p15c"
          />
          <MainProjectWrap>
            <FirstProjectWrap>
              <ProjectTitle>
                <span>NFT </span>Project
              </ProjectTitle>
              <MainProject></MainProject>
            </FirstProjectWrap>
            <MainProject></MainProject>
          </MainProjectWrap>
        </HomeGrid>
      </BgWrapper>
      <Footer />
    </HomeWrapper>
  );
};

export default MainHome;

{
  /* <Box itemImg={videoplatform} skill={typescript} transition="10" />
        <div>
          <Btn bgColor={theme.colors.primary_V} size="p15" text="Button" />
          <Btn bgColor={theme.colors.primary_V} size="p14" text="Connect" />
          <Btn bgColor={theme.colors.transparent} size="p15t" text="Button" />
          <Btn
            bgColor={theme.colors.primary_V}
            size="p15c"
            text="CONNECT WALLET"
          />
          <Btn
            bgColor={theme.colors.transparent}
            size="p20t"
            text="COMMING SOON"
          />
        </div> */
}
