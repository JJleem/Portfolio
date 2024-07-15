/* eslint-disable @typescript-eslint/no-unused-vars */
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

import Db from "../../data/db.json";
import { useNavigate } from "react-router-dom";
import { numberState } from "../../atom/atom";
import { newNumberState } from "../../atom/atom";
import { useRecoilState } from "recoil";
const MainProject = () => {
  const filteredData = Db.items.map((item) => item);

  const [randomNumber, setRandomNumber] = useRecoilState<number>(numberState);
  const [newRandomNumber, setNewRandomNumber] =
    useRecoilState<number>(newNumberState);
  const navigate = useNavigate();
  const goItem = (itemId: number) => {
    navigate(`/collection/${itemId}`);
  };
  return (
    <>
      <ProjectWrap>
        {filteredData
          .filter((_, index) => index === randomNumber)
          .map((db) => (
            <Inner key={db.id}>
              <DescWrap>
                <TitleWrap>
                  <span>OVERVIEW</span>
                  {db.maintitle}
                </TitleWrap>
                <ItemWrap>
                  <ItemList>
                    <Item>
                      <ItemTitle>프로그래밍 언어</ItemTitle>
                      <ItemDesc>{db.language}</ItemDesc>
                    </Item>
                    <Item>
                      <ItemTitle>설명</ItemTitle>
                      <ItemDesc>{db.mainsub}</ItemDesc>
                    </Item>
                    <Item>
                      <ItemTitle>작업기간</ItemTitle>
                      <ItemDesc>{db.date}</ItemDesc>
                    </Item>
                    <Item>
                      <ItemTitle>프로젝트 종류</ItemTitle>
                      <ItemDesc>{db.projecttype}</ItemDesc>
                    </Item>
                    <Item>
                      <ItemTitle>Skill</ItemTitle>
                      <ItemDesc>
                        <LogoList>
                          <Logo skill={db.library.one} />
                          <Logo skill={db.library.two} />
                          <Logo skill={db.library.three} />
                        </LogoList>
                      </ItemDesc>
                    </Item>
                  </ItemList>
                  <Btn
                    bgColor={theme.colors.primary_V}
                    text="WATCH NOW"
                    size="p15l"
                    linkto={`/collection/${db.id}`}
                  ></Btn>
                </ItemWrap>
              </DescWrap>
              <ImageSection>
                <HidTitleWrap>
                  <span>OVERVIEW</span>
                  {db.maintitle}
                </HidTitleWrap>
                <ImgWrap img={db.img}></ImgWrap>
              </ImageSection>
            </Inner>
          ))}
      </ProjectWrap>
      <ProjectWrap>
        {filteredData
          .filter((_, index) => index === newRandomNumber)
          .map((db) => (
            <Inner key={db.id}>
              <DescWrap>
                <TitleWrap>
                  <span>OVERVIEW</span>
                  {db.maintitle}
                </TitleWrap>
                <ItemWrap>
                  <ItemList>
                    <Item>
                      <ItemTitle>프로그래밍 언어</ItemTitle>
                      <ItemDesc>{db.language}</ItemDesc>
                    </Item>
                    <Item>
                      <ItemTitle>설명</ItemTitle>
                      <ItemDesc>{db.mainsub}</ItemDesc>
                    </Item>
                    <Item>
                      <ItemTitle>작업기간</ItemTitle>
                      <ItemDesc>{db.date}</ItemDesc>
                    </Item>
                    <Item>
                      <ItemTitle>프로젝트 종류</ItemTitle>
                      <ItemDesc>{db.projecttype}</ItemDesc>
                    </Item>
                    <Item>
                      <ItemTitle>Skill</ItemTitle>
                      <ItemDesc>
                        <LogoList>
                          <Logo skill={db.library.one} />
                          <Logo skill={db.library.two} />
                          <Logo skill={db.library.three} />
                        </LogoList>
                      </ItemDesc>
                    </Item>
                  </ItemList>
                  <Btn
                    bgColor={theme.colors.primary_V}
                    text="WATCH NOW"
                    size="p15l"
                    linkto={`/collection/${db.id}`}
                  />
                </ItemWrap>
              </DescWrap>
              <ImageSection>
                <HidTitleWrap>
                  <span>OVERVIEW</span>
                  {db.maintitle}
                </HidTitleWrap>
                <ImgWrap img={db.img}></ImgWrap>
              </ImageSection>
            </Inner>
          ))}
      </ProjectWrap>
    </>
  );
};

export default MainProject;
