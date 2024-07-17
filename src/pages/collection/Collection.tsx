import React from "react";

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
} from "./StyleCollection";
import { useState } from "react";

import CloudAnimation from "../../assets/three/CloudAnimation";

import ItemTabs from "../../Component/itemTabs/ItemTabs";
import Introduction from "../../Component/introduction/Introduction";
import Activity from "../../Component/activity/Activity";
import TopBtn from "../../Component/topbtn/TopBtn";

const Collection = () => {
  const [more, setMore] = useState(true);
  const handleMore = () => {
    setMore(!more);
  };

  const [tabs, setTabs] = useState({
    items: true,
    introduction: false,
    activity: false,
  });

  const handleTabClick = (tab: string) => {
    setTabs((prevTabs) => ({
      ...prevTabs,
      [tab]: true,
      items: tab === "items",
      introduction: tab === "introduction",
      activity: tab === "activity",
    }));
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
              {/* <Data>
                <span>Floor</span>
                <p>0.1943</p>
              </Data>
              <Data>
                <span>Royalty</span>
                <p>10%</p>
              </Data> */}
            </DataList>
          </BottomSection>
          <TabList>
            <Tab onClick={() => handleTabClick("items")} isClick={tabs.items}>
              Items
            </Tab>

            <Tab
              onClick={() => handleTabClick("activity")}
              isClick={tabs.activity}
            >
              Activity
            </Tab>
            <Tab
              onClick={() => handleTabClick("introduction")}
              isClick={tabs.introduction}
            >
              Introduction
            </Tab>
          </TabList>
          {tabs.items && <ItemTabs />}
          {tabs.introduction && <Introduction />}
          {tabs.activity && <Activity />}
        </BottomCover>
        <TopBtn />
      </Section>

      <Footer />
    </Container>
  );
};

export default Collection;
