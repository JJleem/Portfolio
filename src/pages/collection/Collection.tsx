import React, { useEffect, useRef } from "react";

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
  FoldText,
  Modaldetail,
  ModalContent,
  TabListContainer,
} from "./StyleCollection";
import { useState } from "react";

import CloudAnimation from "../../assets/three/CloudAnimation";
import { useMediaQuery } from "react-responsive";
import ItemTabs from "../../Component/itemTabs/ItemTabs";
import Introduction from "../../Component/introduction/Introduction";
import Activity from "../../Component/activity/Activity";
import TopBtn from "../../Component/topbtn/TopBtn";
import SkillStack from "../../Component/skillstack/SkillStack";
import Contact from "../../Component/contact/Contact";

const Collection = () => {
  const [isModal, setIsModal] = useState(true);
  const handleIsModal = () => {
    const newIsModal = !isModal;
    setIsModal(newIsModal);
    sessionStorage.setItem("isModal", JSON.stringify(newIsModal));
  };
  useEffect(() => {
    const storedIsModal = sessionStorage.getItem("isModal");
    if (storedIsModal !== null) {
      setIsModal(JSON.parse(storedIsModal));
    }
  }, []);
  const [more, setMore] = useState(true);
  const handleMore = () => {
    setMore(!more);
  };

  const [tabs, setTabs] = useState({
    items: true,
    introduction: false,
    activity: false,
    skillstack: false,
    contact: false,
  });

  const isSmall = useMediaQuery({ maxWidth: 744 });

  const tabPositions: { [key: string]: number } = {
    items: isSmall ? 530 : 610,
    introduction: isSmall ? 410 : 610,
    activity: isSmall ? 530 : 610,
    skillstack: isSmall ? 530 : 642,
    contact: isSmall ? 530 : 630,
  };

  const [isScrolling, setIsScrolling] = useState(false);

  const handleTabClick = (tab: string) => {
    if (isScrolling) return; // 스크롤 중이면 클릭 무시

    setIsScrolling(true); // 스크롤 중임을 표시
    setTabs((prevTabs) => ({
      ...prevTabs,
      [tab]: true,
      items: tab === "items",
      introduction: tab === "introduction",
      activity: tab === "activity",
      skillstack: tab === "skillstack",
      contact: tab === "contact",
    }));

    const scrollToTab = () => {
      window.requestAnimationFrame(() => {
        window.scrollTo({
          top: tabPositions[tab],
          behavior: "smooth",
        });
      });

      const scrollEndListener = () => {
        window.removeEventListener("scroll", scrollEndListener);
        setIsScrolling(false); // 스크롤 완료 후 상태 업데이트
      };
      window.addEventListener("scroll", scrollEndListener);
    };

    scrollToTab();
  };

  const tabListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tabListRef.current) {
      const tabList = tabListRef.current;
      const activeTab = tabList.querySelector(".active") as HTMLElement;
      if (activeTab) {
        const tabListRect = tabList.getBoundingClientRect();
        const activeTabRect = activeTab.getBoundingClientRect();
        const activeTabLeftInList = activeTabRect.left - tabListRect.left;
        const activeTabRightInList = activeTabRect.right - tabListRect.left;
        const tabListWidth = tabList.offsetWidth;
        if (activeTabLeftInList <= 0) {
          tabList.scrollLeft = 0;
        } else if (activeTabRightInList >= tabListWidth) {
          tabList.scrollLeft = activeTabRect.width + 100;
        } else {
          tabList.scrollLeft =
            activeTabLeftInList -
            (tabListWidth - activeTabRect.width) / 2 +
            100;
        }
      }
    }
  }, [tabs]);

  return (
    <Container>
      <Section>
        <TopCover>
          <CloudAnimation />
        </TopCover>
        <BottomCover>
          <Profile />
          <BottomSection isModal={isModal}>
            <TitleName>LEEM JAEJUN</TitleName>
            <SubName>MOLT</SubName>
            <Desc>
              안녕하세요. 성실하게 나아가는 신입 프론트엔드 개발자 임재준
              입니다.
            </Desc>
            <Fold>
              See More <More onClick={handleMore} isClick={more}></More>
            </Fold>
            <FoldText isClick={more}>
              <div>
                사용자의 니즈를 이해하고 이를 바탕으로 직관적이고 깔끔한 UI를
                구현하는 것이 저의 목표입니다.
              </div>

              <div>
                또한 최신 프론트엔드 기술들을 적극적으로 학습하고 이를
                프로젝트에 적용하여 효율적이고 유지보수가 용이한 코드를 작성하는
                것에 관심이 많습니다.
              </div>
            </FoldText>
            <DataList>
              <Data>
                <span>Typescript.</span>
                <p>7</p>
              </Data>
              <Data>
                <span>React.</span>
                <p>4</p>
              </Data>
              <Data>
                <span>Javascript.</span>
                <p>3</p>
              </Data>
            </DataList>
          </BottomSection>
          <TabListContainer>
            <TabList ref={tabListRef}>
              <Tab
                className={tabs.items ? "active" : ""}
                onClick={() => handleTabClick("items")}
                isClick={tabs.items}
              >
                Projects
              </Tab>

              <Tab
                className={tabs.activity ? "active" : ""}
                onClick={() => handleTabClick("activity")}
                isClick={tabs.activity}
              >
                Activity
              </Tab>
              <Tab
                className={tabs.skillstack ? "active" : ""}
                onClick={() => handleTabClick("skillstack")}
                isClick={tabs.skillstack}
              >
                SkillStack
              </Tab>
              <Tab
                className={tabs.introduction ? "active" : ""}
                onClick={() => handleTabClick("introduction")}
                isClick={tabs.introduction}
              >
                Introduction
              </Tab>

              <Tab
                className={tabs.contact ? "active" : ""}
                onClick={() => handleTabClick("contact")}
                isClick={tabs.contact}
              >
                Contact
              </Tab>
            </TabList>
            <Modaldetail isModal={isModal} onClick={handleIsModal}>
              <ModalContent>
                <span>각 탭들을 클릭해 확인해보세요.</span>
                <i></i>
              </ModalContent>
            </Modaldetail>
          </TabListContainer>
          {tabs.items && <ItemTabs />}
          {tabs.introduction && <Introduction />}
          {tabs.activity && <Activity />}
          {tabs.skillstack && <SkillStack />}
          {tabs.contact && <Contact />}
        </BottomCover>
        <TopBtn />
      </Section>

      <Footer />
    </Container>
  );
};

export default Collection;
