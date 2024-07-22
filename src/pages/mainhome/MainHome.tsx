import React, { useEffect } from "react";
import {
  BgWrapper,
  FirstProjectWrap,
  HomeGrid,
  HomeWrapper,
  ItemWrapper,
  Logo,
  MainDesc,
  MainDescTitle,
  MainInfo,
  MainItem,
  MainItemDesc,
  MainItemLogo,
  MainLogo,
  MainProjectWrap,
  MainSub,
  MainSubWrap,
  MainTitle,
  NewProject,
  NewProjectWrap,
  ProjectTitle,
  SubTitle,
} from "./StyleMainHome";
import Footer from "../../Component/footer/Footer";
import Btn from "../../Component/btn/Btn";
import theme from "../../assets/theme/theme";
import MainProject from "../../Component/mainproject/MainProject";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { numberState } from "../../atom/atom";
import { newNumberState } from "../../atom/atom";
import { useRecoilState } from "recoil";
import TopBtn from "../../Component/topbtn/TopBtn";
import CurrentTime from "./CurrentTime";
const MainHome = () => {
  //
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //
  const navigate = useNavigate();
  const goConnect = () => {
    navigate("/collection");
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [randomNumber, setRandomNumber] = useRecoilState<number>(numberState);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [newRandomNumber, setNewRandomNumber] =
    useRecoilState<number>(newNumberState);

  const generateNewNumbers = () => {
    const newRandomNumber: number = Math.floor(Math.random() * 14);
    const newNewRandomNumber: number = Math.floor(Math.random() * 14);

    setRandomNumber(newRandomNumber);
    setNewRandomNumber(newNewRandomNumber);
  };

  return (
    <>
      <Helmet title="MOLT SPACE | Frontend-developer Portfolio"></Helmet>
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
              <MainDescTitle>
                <CurrentTime />
                <div>
                  <span className="molt">MOLT</span>SPACE 차원의 문이 열리기
                  시작했습니다!
                </div>
              </MainDescTitle>
              <div>
                신입 프론트엔드 개발자 <span>임재준</span> 의 포트폴리오 입니다.
              </div>
            </MainDesc>
          </MainInfo>
          <ItemWrapper>
            <MainItem>
              <MainItemLogo>
                <Logo type="ts" />
              </MainItemLogo>
              <MainItemDesc>
                <div>
                  <span>Typescript</span> <br />를 기반으로 다양한 프로젝트들을
                  개발하였습니다.
                </div>
              </MainItemDesc>
            </MainItem>
            <MainItem>
              <MainItemLogo>
                <Logo type="react" />
              </MainItemLogo>
              <MainItemDesc>
                <div>
                  <span>React</span> <br />를 기반으로 다양한 프로젝트들을
                  개발하였습니다.
                </div>
              </MainItemDesc>
            </MainItem>
            <MainItem>
              <MainItemLogo>
                <Logo type="js" />
              </MainItemLogo>
              <MainItemDesc>
                <div>
                  <span> Javascript</span> <br />를 기반으로 다양한 프로젝트들을
                  개발하였습니다.
                </div>
              </MainItemDesc>
            </MainItem>
            <MainItem>
              <MainItemLogo>
                <Logo type="github" />
              </MainItemLogo>
              <MainItemDesc>
                <div>
                  <span>Github</span> <br />를 통해 효율적인 프로젝트관리를
                  하였습니다.
                </div>
              </MainItemDesc>
            </MainItem>
          </ItemWrapper>

          <MainProjectWrap>
            <FirstProjectWrap>
              <Btn
                bgColor={theme.colors.primary_V}
                text="CONNECT"
                size="p15c"
                onClick={goConnect}
                linkto={"/collection"}
              />
              <ProjectTitle scrolly={scrollY}>
                <span>PROJECTS </span>
                <NewProjectWrap>
                  <NewProject onClick={generateNewNumbers}></NewProject>
                </NewProjectWrap>
              </ProjectTitle>
              <MainProject></MainProject>
            </FirstProjectWrap>
          </MainProjectWrap>
          <MainSubWrap scrolly={scrollY}>
            <MainSub>
              <span>Typescript, React, Javascript</span>등 여러가지 프로젝트를
              작업하였습니다.
              <br />
              많은 기능을 구현하려 노력하였습니다.
              <br />
              <br />
              MOLTSPACE의 여러가지 프로젝트들을 탐험해보세요.
            </MainSub>
            <MainSub>
              MOLTSPACE의 우주는 계속 진화합니다. <br /> 다양한 기능들이 <br />{" "}
              수시로 업데이트 될 예정입니다.
            </MainSub>
            <Btn
              bgColor={theme.colors.primary_V}
              text="CONNECT"
              size="p15c"
              onClick={goConnect}
              linkto={"/collection"}
            />
          </MainSubWrap>
        </HomeGrid>

        <Footer />
      </HomeWrapper>
      <TopBtn />
    </>
  );
};

export default MainHome;
