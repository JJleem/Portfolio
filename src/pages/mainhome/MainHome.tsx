import React from "react";
import {
  BgWrapper,
  HomeGrid,
  HomeWrapper,
  ItemWrapper,
  MainDesc,
  MainInfo,
  MainItem,
  MainLogo,
  MainTitle,
  SubTitle,
} from "./StyleMainHome";
import ExploreGnb from "../../Component/gnb/ExploreGnb";
import Footer from "../../Component/footer/Footer";
import Btn from "../../Component/btn/Btn";
import theme from "../../assets/theme/theme";
import Box from "../../Component/box/Box";
import videoplatform from "../../assets/img/item/videoplatform.png";
import typescript from "../../assets/img/skill/Typescript.png";

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
            <MainItem></MainItem>
            <MainItem></MainItem>
            <MainItem></MainItem>
            <MainItem></MainItem>
            <MainItem></MainItem>
          </ItemWrapper>
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
