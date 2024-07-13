import React, { useEffect } from "react";
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
  MainSub,
  MainSubWrap,
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
import MainProject from "../../Component/mainproject/MainProject";
import Gaside from "../../Component/aside/Gaside";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { locationState } from "../../atom/atom";
import { useLocation } from "react-router-dom";
import Gnb from "../../Component/gnb/Gnb";
const MainHome = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const goConnect = () => {
    navigate("/collection");
  };

  return (
    <HomeWrapper>
      <BgWrapper />
      <HomeGrid>
        <MainInfo>
          <MainLogo />
          <MainTitle>
            <span>MOLT</span>SPACE
          </MainTitle>
          <SubTitle>Frontend LeemJaeJun Portfolio</SubTitle>
          <MainDesc>
            2024년 7월, MOLTSPACE 차원의 문이 열리기 시작했습니다! <br />
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
          onClick={goConnect}
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
        <MainSubWrap>
          <MainSub>
            곧, BOASPACE의 차원의 문이 활짝 열릴 예정입니다! <br />
            차원의 문이 활짝 열리면 <br />
            <span>NFT 민팅, 판매, 전송, 거래</span>가 가능해집니다.
          </MainSub>
          <MainSub>
            BOASPACE의 우주는 계속 진화합니다. <br /> 차별화된 다양한 편의기능이{" "}
            <br /> 수시로 업데이트 될 예정입니다.
          </MainSub>
          <Btn
            bgColor={theme.colors.primary_V}
            text="CONNECT WALLET"
            size="p15c"
            onClick={goConnect}
          />
        </MainSubWrap>
      </HomeGrid>
      <Footer />
    </HomeWrapper>
  );
};

export default MainHome;
