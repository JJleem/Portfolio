import React from "react";
import Footer from "../../Component/footer/Footer";
import description from "../../assets/img/icon/description.png";
import skill from "../../assets/img/icon/skill.png";
import detail from "../../assets/img/icon/detail.png";
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
  ModalCursor,
  HideTitle,
  Title,
  DescSection,
  Description,
  DescriptionSection,
  DescriptionInner,
  ArrowDown,
  SkillContainer,
  Skill,
  SkillLogo,
  SkillText,
  SkillWrapper,
  DescriptionGridInner,
} from "./StyleDetail";
import { useState, useEffect } from "react";
import Db from "../../data/db.json";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [isDescClick, setIsDescClick] = useState(false);

  const [isDescClickTwo, setIsDescClickTwo] = useState(false);
  const [isDescClickThree, setIsDescClickThree] = useState(false);

  const handleDescClick = () => {
    setIsDescClick(!isDescClick);
  };
  const handleDescClickTwo = () => {
    setIsDescClickTwo(!isDescClickTwo);
  };
  const handleDescClickThree = () => {
    setIsDescClickThree(!isDescClickThree);
  };
  const projects = Db.items;
  const { id } = useParams() as { id?: string };
  const ChooseData = projects.find((item) => item.id.toString() === id);
  const goSite = (site: string) => {
    window.open(site, "_blank");
  };
  const [isClick, setIsClick] = useState(false);
  useEffect(() => {
    const storedIsClick = sessionStorage.getItem(`isClick_${id}`);
    if (storedIsClick !== null) {
      setIsClick(JSON.parse(storedIsClick));
    }
  }, [id]);
  const handleClicked = () => {
    setIsClick((prevIsClick) => !prevIsClick);
    sessionStorage.setItem(`isClick_${id}`, JSON.stringify(!isClick));
  };
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {
    const handleWindowMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleWindowMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);
  return (
    <StyleDetail>
      <DetailWrapper>
        <TopSection></TopSection>
        <BottomSection>
          <HideTitle>
            <span>MOLT's Project</span>
            <div>{ChooseData?.maintitle}</div>
          </HideTitle>
          <ImgWrap>
            <ImgHeader>
              <HeartLogo isClick={isClick} onClick={handleClicked}></HeartLogo>
            </ImgHeader>

            {ChooseData?.site && (
              <ImgSection
                img={ChooseData?.img}
                transition={ChooseData?.transition}
                onClick={() => goSite(ChooseData?.site)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
              >
                <ModalCursor
                  isHover={isHovered}
                  style={{
                    pointerEvents: "none",
                    left: mousePosition.x - 20,
                    top: mousePosition.y - 140,
                  }}
                >
                  클릭하여 사이트로 이동해보세요
                </ModalCursor>
              </ImgSection>
            )}
          </ImgWrap>
          <DescWrap>
            <Title>
              <span>MOLT's Project</span>
              <div>{ChooseData?.maintitle}</div>
            </Title>
            <DescSection>
              <Description logo={description}>
                <span></span>
                <div>Description</div>
                <ArrowDown
                  isClick={isDescClick}
                  onClick={handleDescClick}
                ></ArrowDown>
              </Description>
              <DescriptionSection isClick={isDescClick}>
                <DescriptionInner isClick={isDescClick}>
                  이 사이트는 '디지털 정부서비스 UI/UX 가이드라인'을 참고하여
                  클론코딩하였습니다. <br />
                  정부에서 제시한 UI/UX에 대한 세부 사항을 학습하기위해
                  작업하였으며, 이 사이트에서는 UI/UX 가이드라인을 바탕으로 실제
                  디지털 정부서비스의 UI/UX를 구현하고 있습니다.
                </DescriptionInner>
              </DescriptionSection>
              <Description logo={skill}>
                <span></span>
                <div>Skill</div>
                <ArrowDown
                  isClick={isDescClickTwo}
                  onClick={handleDescClickTwo}
                ></ArrowDown>
              </Description>
              <DescriptionSection isClick={isDescClickTwo}>
                <DescriptionGridInner isClick={isDescClickTwo}>
                  <SkillContainer isClick={isDescClickTwo}>
                    <SkillWrapper>
                      <Skill>
                        <SkillLogo logo={ChooseData?.library.one}></SkillLogo>
                      </Skill>
                      <span>{ChooseData?.library.onetitle}</span>
                    </SkillWrapper>

                    <SkillText>
                      Recoil을 적극활용하여 전역상태를 관리하였습니다.
                    </SkillText>
                  </SkillContainer>
                  <SkillContainer>
                    <SkillWrapper>
                      <Skill>
                        <SkillLogo logo={ChooseData?.library.two}></SkillLogo>
                      </Skill>
                      <span>{ChooseData?.library.twotitle}</span>
                    </SkillWrapper>
                    <SkillText>dd</SkillText>
                  </SkillContainer>

                  <SkillContainer>
                    <SkillWrapper>
                      <Skill>
                        <SkillLogo logo={ChooseData?.library.three}></SkillLogo>
                      </Skill>
                      <span>{ChooseData?.library.threetitle}</span>
                    </SkillWrapper>
                    <SkillText>dd</SkillText>
                  </SkillContainer>
                  {ChooseData?.library.four && (
                    <SkillContainer>
                      <SkillWrapper>
                        <Skill>
                          <SkillLogo
                            logo={ChooseData?.library.four}
                          ></SkillLogo>
                        </Skill>
                        <span>{ChooseData?.library.fourtitle}</span>
                      </SkillWrapper>
                      <SkillText>dd</SkillText>
                    </SkillContainer>
                  )}
                  {ChooseData?.library.five && (
                    <SkillContainer>
                      <SkillWrapper>
                        <Skill>
                          <SkillLogo
                            logo={ChooseData?.library.five}
                          ></SkillLogo>
                        </Skill>
                        <span>{ChooseData?.library.fivetitle}</span>
                      </SkillWrapper>
                      <SkillText>dd</SkillText>
                    </SkillContainer>
                  )}
                  {ChooseData?.library.six && (
                    <SkillContainer>
                      <SkillWrapper>
                        <Skill>
                          <SkillLogo logo={ChooseData?.library.six}></SkillLogo>
                        </Skill>
                        <span>{ChooseData?.library.sixtitle}</span>
                      </SkillWrapper>
                      <SkillText>dd</SkillText>
                    </SkillContainer>
                  )}
                </DescriptionGridInner>
              </DescriptionSection>
              <Description logo={detail}>
                <span></span>
                <div>Details</div>
                <ArrowDown
                  isClick={isDescClickThree}
                  onClick={handleDescClickThree}
                ></ArrowDown>
              </Description>
              <DescriptionSection isClick={isDescClickThree}>
                <DescriptionInner isClick={isDescClickThree}>
                  이 사이트는 '디지털 정부서비스 UI/UX 가이드라인'을 참고하여
                  클론코딩하였습니다. <br />
                  정부에서 제시한 UI/UX에 대한 세부 사항을 학습하기위해
                  작업하였으며, 이 사이트에서는 UI/UX 가이드라인을 바탕으로 실제
                  디지털 정부서비스의 UI/UX를 구현하고 있습니다.
                </DescriptionInner>
              </DescriptionSection>
            </DescSection>
          </DescWrap>
        </BottomSection>
      </DetailWrapper>
      <Footer />
    </StyleDetail>
  );
};

export default Detail;
