import React from "react";
import Footer from "../../Component/footer/Footer";
import description from "../../assets/img/icon/description.png";
import skill from "../../assets/img/icon/skill.png";
import detail from "../../assets/img/icon/detail.png";
import github from "../../assets/img/skill/githubWhite.png";
import opne from "../../assets/img/icon/open.png";
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
  SkillUl,
  SkillLi,
  DetailsItems,
  Goback,
} from "./StyleDetail";
import { useState, useEffect } from "react";
import Db from "../../data/db.json";
import { Link, useNavigate, useParams } from "react-router-dom";
import TopBtn from "../../Component/topbtn/TopBtn";

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
  const handleWindowMouseMove = (e: MouseEvent) => {
    const windowHeight = window.innerHeight;
    const adjustedY = Math.min(e.clientY, windowHeight - 50); // y 좌표를 화면 높이에 맞게 조정
    setMousePosition({ x: e.clientX, y: adjustedY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleWindowMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);
  const navigate = useNavigate();
  const goback = () => {
    navigate(-1);
  };
  return (
    <StyleDetail>
      <DetailWrapper>
        <TopSection>
          <Goback onClick={goback}>
            <div></div>
          </Goback>
        </TopSection>
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
              >
                <ModalCursor
                  isHover={isHovered}
                  style={{
                    pointerEvents: "none",
                    left: mousePosition.x + 20,
                    top: mousePosition.y - 40,
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
                  {ChooseData?.detail?.desc}
                  <br />
                  <br />
                  {ChooseData?.detail?.desc2}
                  <br />
                  <br />
                  {ChooseData?.detail?.desc3 && ChooseData?.detail?.desc3}

                  {ChooseData?.detail?.desc4 && ChooseData?.detail?.desc4}
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
                      <SkillUl>
                        <SkillLi>{ChooseData?.detail?.onedesc}</SkillLi>
                        {ChooseData?.detail?.onedesc2 && (
                          <SkillLi>{ChooseData?.detail?.onedesc2}</SkillLi>
                        )}
                      </SkillUl>
                    </SkillText>
                  </SkillContainer>
                  <SkillContainer>
                    <SkillWrapper>
                      <Skill>
                        <SkillLogo logo={ChooseData?.library.two}></SkillLogo>
                      </Skill>
                      <span>{ChooseData?.library.twotitle}</span>
                    </SkillWrapper>
                    <SkillText>
                      <SkillUl>
                        <SkillLi>{ChooseData?.detail?.twodesc}</SkillLi>
                        {ChooseData?.detail?.twodesc2 && (
                          <SkillLi>{ChooseData?.detail?.twodesc2}</SkillLi>
                        )}
                      </SkillUl>
                    </SkillText>
                  </SkillContainer>

                  <SkillContainer>
                    <SkillWrapper>
                      <Skill>
                        <SkillLogo logo={ChooseData?.library.three}></SkillLogo>
                      </Skill>
                      <span>{ChooseData?.library.threetitle}</span>
                    </SkillWrapper>
                    <SkillText>
                      <SkillUl>
                        <SkillLi>{ChooseData?.detail?.threedesc}</SkillLi>
                        {ChooseData?.detail?.threedesc2 && (
                          <SkillLi>{ChooseData?.detail?.threedesc2}</SkillLi>
                        )}
                      </SkillUl>
                    </SkillText>
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
                      <SkillText>
                        <SkillUl>
                          {ChooseData?.detail?.fourdesc && (
                            <SkillLi>{ChooseData?.detail?.fourdesc}</SkillLi>
                          )}
                          {ChooseData?.detail?.fourdesc2 && (
                            <SkillLi>{ChooseData?.detail?.fourdesc2}</SkillLi>
                          )}
                        </SkillUl>
                      </SkillText>
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
                      <SkillText>
                        <SkillUl>
                          {ChooseData?.detail?.fivedesc && (
                            <SkillLi>{ChooseData?.detail?.fivedesc}</SkillLi>
                          )}
                          {ChooseData?.detail?.fivedesc2 && (
                            <SkillLi>{ChooseData?.detail?.fivedesc2}</SkillLi>
                          )}
                        </SkillUl>
                      </SkillText>
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
                      <SkillText>
                        <SkillUl>
                          {ChooseData?.detail?.sixdesc && (
                            <SkillLi>{ChooseData?.detail?.sixdesc}</SkillLi>
                          )}
                          {ChooseData?.detail?.sixdesc2 && (
                            <SkillLi>{ChooseData?.detail?.sixdesc2}</SkillLi>
                          )}
                        </SkillUl>
                      </SkillText>
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
                  <DetailsItems>
                    프로그래밍 언어<span>{ChooseData?.language}</span>
                  </DetailsItems>
                  <DetailsItems>
                    작업 기간<span>{ChooseData?.date}</span>
                  </DetailsItems>
                  <DetailsItems>
                    프로젝트 종류<span>{ChooseData?.projecttype}</span>
                  </DetailsItems>
                  <DetailsItems logo={opne}>
                    사이트 보러가기
                    <Link to={ChooseData?.site || ""} target="_blank">
                      <span>
                        <i></i>
                      </span>
                    </Link>
                  </DetailsItems>
                  <DetailsItems logo={github}>
                    GitHub 보러가기
                    <Link to={ChooseData?.github || ""} target="_blank">
                      <span>
                        <i></i>
                      </span>
                    </Link>
                  </DetailsItems>
                </DescriptionInner>
              </DescriptionSection>
            </DescSection>
          </DescWrap>
        </BottomSection>
      </DetailWrapper>
      <TopBtn />
      <Footer />
    </StyleDetail>
  );
};

export default Detail;
