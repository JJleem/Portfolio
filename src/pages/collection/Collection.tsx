import React from "react";
import Gnb from "../../Component/gnb/Gnb";
import Footer from "../../Component/footer/Footer";
import {
  BottomCover,
  Container,
  Section,
  Profile,
  TopCover,
  BottomSection,
  TitleName,
  SubName,
  Desc,
  Fold,
  DataList,
  Data,
  Tab,
  TabList,
  More,
  InputWrap,
  LogoContainer,
  Logo,
  SearchInput,
  BtnContainer,
  Column,
  Row,
  ItemWrap,
  ItemList,
  SkillTitle,
  ItemContainer,
  ItemSection,
  FilterSection,
  FilterList,
  FilterItem,
  FilterTitle,
  FilterCheckBox,
  FilterLogo,
} from "./StyleCollection";
import { useState } from "react";
import Box from "../../Component/box/Box";
import videoplatform from "../../assets/img/item/videoplatform.png";
import krds from "../../assets/img/item/krds.png";
import ts from "../../assets/img/skill/Typescript.png";
import react from "../../assets/img/skill/reactSmall.png";
import js from "../../assets/img/skill/JavaScript.png";
import { useRecoilState } from "recoil";
import { filterState } from "../../atom/atom";
import CloudAnimation from "../../assets/three/CloudAnimation";
const Collection = () => {
  const [more, setMore] = useState(false);
  const handleMore = () => {
    setMore(!more);
  };

  const [tabs, setTabs] = useState({
    items: true,
    analytics: false,
    activity: false,
  });

  const handleTabClick = (tab: string) => {
    setTabs((prevTabs) => ({
      ...prevTabs,
      [tab]: true,
      items: tab === "items",
      analytics: tab === "analytics",
      activity: tab === "activity",
    }));
  };

  const [check, setCheck] = useState({
    typescript: false,
    react: false,
    javascript: false,
    all: true,
  });

  const handleCheck = (checks: string) => {
    setCheck((prevCheck) => ({
      ...prevCheck,
      [checks]: true,
      typescript: checks === "typescript",
      react: checks === "react",
      javascript: checks === "javascript",
      all: checks === "all",
    }));
  };
  const [filter, setFilter] = useRecoilState(filterState);
  const HandleFilter = () => {
    setFilter(!filter);
  };
  const [filterSection, setFilterSection] = useState(false);
  const HandleFilterSection = () => {
    setFilterSection(!filterSection);
  };

  return (
    <Container>
      <Section>
        <TopCover>
          <CloudAnimation />
        </TopCover>
        <BottomCover>
          <Profile />
          <BottomSection>
            <TitleName>LEEM JAEJUN</TitleName>
            <SubName>MOLT</SubName>
            <Desc>
              Jenkins the Valet’s Writer’s Room is a collection of 6942 NFTs
              that unlock a members-only Web3 authenticated...
            </Desc>
            <Fold>
              See More <More onClick={handleMore} isClick={more}></More>
            </Fold>
            <DataList>
              <Data>
                <span>Items</span>
                <p>5.56K</p>
              </Data>
              <Data>
                <span>Owners</span>
                <p>3.54K</p>
              </Data>
              <Data>
                <span>VOL.</span>
                <p>632.05</p>
              </Data>
              <Data>
                <span>Floor</span>
                <p>0.1943</p>
              </Data>
              <Data>
                <span>Royalty</span>
                <p>10%</p>
              </Data>
            </DataList>
          </BottomSection>
          <TabList>
            <Tab onClick={() => handleTabClick("items")} isClick={tabs.items}>
              Items
            </Tab>
            <Tab
              onClick={() => handleTabClick("analytics")}
              isClick={tabs.analytics}
            >
              Self-Introduction
            </Tab>
            <Tab
              onClick={() => handleTabClick("activity")}
              isClick={tabs.activity}
            >
              Activity
            </Tab>
          </TabList>

          <InputWrap>
            <LogoContainer
              onClick={HandleFilterSection}
              isFilter={filterSection}
            >
              <Logo />
            </LogoContainer>

            <SearchInput
              type="text"
              placeholder="leemjaejun's projects , study examples"
            />

            <BtnContainer>
              <Column onClick={HandleFilter} isFilter={filter} />
              <Row onClick={HandleFilter} isFilter={filter} />
            </BtnContainer>
          </InputWrap>
          {tabs.items && (
            <ItemContainer>
              <FilterSection isFilter={filterSection}>
                <FilterList isFilter={filterSection}>
                  <FilterItem>
                    <FilterTitle>ALL</FilterTitle>
                    <FilterCheckBox
                      onClick={() => handleCheck("all")}
                      isClick={check.all}
                    ></FilterCheckBox>
                  </FilterItem>
                  <FilterItem>
                    <FilterLogo logo={ts}></FilterLogo>
                    <FilterTitle>TYPESCRIPT</FilterTitle>
                    <FilterCheckBox
                      onClick={() => handleCheck("typescript")}
                      isClick={check.typescript}
                    ></FilterCheckBox>
                  </FilterItem>
                  <FilterItem>
                    <FilterLogo logo={react}></FilterLogo>
                    <FilterTitle>REACT</FilterTitle>
                    <FilterCheckBox
                      onClick={() => handleCheck("react")}
                      isClick={check.react}
                    ></FilterCheckBox>
                  </FilterItem>
                  <FilterItem>
                    <FilterLogo logo={js}></FilterLogo>
                    <FilterTitle>JAVASCRIPT</FilterTitle>
                    <FilterCheckBox
                      onClick={() => handleCheck("javascript")}
                      isClick={check.javascript}
                    ></FilterCheckBox>
                  </FilterItem>
                </FilterList>
              </FilterSection>

              <ItemSection>
                <ItemList isFilter={filter}>
                  <SkillTitle isFilter={filter}>
                    <span></span>TYPESCRIPT
                  </SkillTitle>
                  <ItemWrap isFilter={filter}>
                    <Box
                      itemImg={videoplatform}
                      skill={ts}
                      title="비디오 플랫폼"
                      transition="10"
                      sub="TMDB API를 활용하여 작업한 비디오플랫폼 프로젝트입니다"
                    />
                    <Box
                      itemImg={krds}
                      skill={ts}
                      title="KRDS"
                      transition="10"
                      sub="정부 UI/UX 가이드라인 사이트 KRDS 클론코딩 사이트 입니다."
                    />
                    <Box
                      itemImg={krds}
                      skill={ts}
                      title="KRDS"
                      transition="10"
                      sub="정부 UI/UX 가이드라인 사이트 KRDS 클론코딩 사이트 입니다."
                    />
                    <Box
                      itemImg={krds}
                      skill={ts}
                      title="KRDS"
                      transition="10"
                      sub="정부 UI/UX 가이드라인 사이트 KRDS 클론코딩 사이트 입니다."
                    />
                    <Box
                      itemImg={krds}
                      skill={ts}
                      title="KRDS"
                      transition="10"
                      sub="정부 UI/UX 가이드라인 사이트 KRDS 클론코딩 사이트 입니다."
                    />
                    <Box
                      itemImg={videoplatform}
                      skill={ts}
                      title="비디오 플랫폼"
                      transition="10"
                      sub="TMDB API를 활용하여 작업한 비디오플랫폼 프로젝트입니다"
                    />
                  </ItemWrap>
                </ItemList>
                <ItemList>
                  <SkillTitle>
                    <span></span>React
                  </SkillTitle>
                  <ItemWrap>
                    <Box
                      itemImg={videoplatform}
                      skill={ts}
                      title="비디오 플랫폼"
                      transition="10"
                      sub="TMDB API를 활용하여 작업한 비디오플랫폼 프로젝트입니다"
                    />
                    <Box
                      itemImg={krds}
                      skill={ts}
                      title="KRDS"
                      transition="10"
                      sub="정부 UI/UX 가이드라인 사이트 KRDS 클론코딩 사이트 입니다."
                    />
                  </ItemWrap>
                </ItemList>
                <ItemList>
                  <SkillTitle>
                    <span></span>Javascript
                  </SkillTitle>
                  <ItemWrap>
                    <Box
                      itemImg={videoplatform}
                      skill={ts}
                      title="비디오 플랫폼"
                      transition="10"
                      sub="TMDB API를 활용하여 작업한 비디오플랫폼 프로젝트입니다"
                    />
                    <Box
                      itemImg={krds}
                      skill={ts}
                      title="KRDS"
                      transition="10"
                      sub="정부 UI/UX 가이드라인 사이트 KRDS 클론코딩 사이트 입니다."
                    />
                  </ItemWrap>
                </ItemList>
              </ItemSection>
            </ItemContainer>
          )}
        </BottomCover>
      </Section>
      <Footer />
    </Container>
  );
};

export default Collection;
