import React from "react";

import {
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
  LogoSpan,
} from "../../pages/collection/StyleCollection";
import { useState } from "react";
import Box from "../../Component/box/Box";

import ts from "../../assets/img/skill/Typescript.png";
import react from "../../assets/img/skill/reactSmall.png";
import js from "../../assets/img/skill/JavaScript.png";
import { useRecoilState } from "recoil";
import { filterState, searchTermState } from "../../atom/atom";
import Db from "../../data/db.json";

const ItemTabs = () => {
  const [check, setCheck] = useState({
    ts: false,
    react: false,
    js: false,
    all: true,
  });

  const tsItems = Db.items.filter((item) => item.skill === "ts");
  const reactItems = Db.items.filter((item) => item.skill === "react");
  const jsItems = Db.items.filter((item) => item.skill === "js");

  const handleSkillClick = (checks: string) => {
    setCheck((prevCheck) => ({
      ...prevCheck,
      [checks]: true,
      ts: checks === "ts",
      react: checks === "react",
      js: checks === "js",
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

  const [searchTerm, setSearchTerm] = useRecoilState(searchTermState);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredTsItems = tsItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredReactItems = reactItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredJsItems = jsItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <InputWrap>
        <LogoContainer onClick={HandleFilterSection} isFilter={filterSection}>
          <Logo />
        </LogoContainer>

        <SearchInput
          type="text"
          placeholder="leemjaejun's projects , study examples"
          onChange={handleSearch}
        />

        <BtnContainer>
          <Column onClick={HandleFilter} isFilter={filter} />
          <Row onClick={HandleFilter} isFilter={filter} />
        </BtnContainer>
      </InputWrap>

      <ItemContainer>
        <FilterSection isFilter={filterSection}>
          <FilterList isFilter={filterSection}>
            <FilterItem>
              <FilterTitle>ALL</FilterTitle>
              <FilterCheckBox
                onClick={() => handleSkillClick("all")}
                isClick={check.all}
              ></FilterCheckBox>
            </FilterItem>
            <FilterItem>
              <FilterLogo logo={ts}></FilterLogo>
              <FilterTitle>TYPESCRIPT</FilterTitle>
              <FilterCheckBox
                onClick={() => handleSkillClick("ts")}
                isClick={check.ts}
              ></FilterCheckBox>
            </FilterItem>
            <FilterItem>
              <FilterLogo logo={react}></FilterLogo>
              <FilterTitle>REACT</FilterTitle>
              <FilterCheckBox
                onClick={() => handleSkillClick("react")}
                isClick={check.react}
              ></FilterCheckBox>
            </FilterItem>
            <FilterItem>
              <FilterLogo logo={js}></FilterLogo>
              <FilterTitle>JAVASCRIPT</FilterTitle>
              <FilterCheckBox
                onClick={() => handleSkillClick("js")}
                isClick={check.js}
              ></FilterCheckBox>
            </FilterItem>
          </FilterList>
        </FilterSection>

        <ItemSection>
          {filteredTsItems.length > 0 && (check.all || check.ts) && (
            <ItemList isFilter={filter}>
              <SkillTitle isFilter={filter}>
                <LogoSpan logo={ts}></LogoSpan>TYPESCRIPT
              </SkillTitle>
              <ItemWrap isFilter={filter}>
                {filteredTsItems.map((item) => (
                  <Box
                    key={item.id}
                    itemImg={item.img}
                    skill={item.skill}
                    title={item.title}
                    transition={item.transition}
                    sub={item.sub}
                    linkto={""}
                    github={item.github}
                    go={item.id}
                  />
                ))}
              </ItemWrap>
            </ItemList>
          )}

          {filteredReactItems.length > 0 && (check.all || check.react) && (
            <ItemList isFilter={filter}>
              <SkillTitle isFilter={filter}>
                <LogoSpan logo={react}></LogoSpan>REACT
              </SkillTitle>
              <ItemWrap isFilter={filter}>
                {filteredReactItems.map((item) => (
                  <Box
                    key={item.id}
                    itemImg={item.img}
                    skill={item.skill}
                    title={item.title}
                    transition={item.transition}
                    sub={item.sub}
                    linkto={""}
                    github={item.github}
                    go={item.id}
                  />
                ))}
              </ItemWrap>
            </ItemList>
          )}

          {filteredJsItems.length > 0 && (check.all || check.js) && (
            <ItemList isFilter={filter}>
              <SkillTitle isFilter={filter}>
                <LogoSpan logo={js}></LogoSpan>JAVASCRIPT
              </SkillTitle>
              <ItemWrap isFilter={filter}>
                {filteredJsItems.map((item) => (
                  <Box
                    key={item.id}
                    itemImg={item.img}
                    skill={item.skill}
                    title={item.title}
                    transition={item.transition}
                    sub={item.sub}
                    linkto={""}
                    github={item.github}
                    go={item.id}
                  />
                ))}
              </ItemWrap>
            </ItemList>
          )}

          {/* <ItemList>
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
      </ItemList> */}
        </ItemSection>
      </ItemContainer>
    </>
  );
};

export default ItemTabs;
