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
} from "./StyleCollection";
import { useState } from "react";

import CloudAnimation from "../../assets/three/CloudAnimation";

import ItemTabs from "../../Component/itemTabs/ItemTabs";

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
          {tabs.items && <ItemTabs />}
        </BottomCover>
      </Section>
      <Footer />
    </Container>
  );
};

export default Collection;
