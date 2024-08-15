/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import {
  Bottom,
  Copyright,
  ItemWrap,
  ListWrap,
  StyleFooter,
  Top,
} from "./StlyeFooter";
import { LogoContainer } from "../gnb/StyleGnb";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useRecoilState } from "recoil";
import { tabsState } from "../../atom/atom";
const Footer = () => {
  const isSmall = useMediaQuery({ maxWidth: 744 });
  const isMobile = useMediaQuery({ maxWidth: 428 });
  const [isScrolling, setIsScrolling] = useState(false);
  const [tabs, setTabs] = useRecoilState(tabsState);
  const tabPositions: { [key: string]: number } = {
    items: isMobile ? 610 : isSmall ? 610 : 610,
    introduction: isMobile ? 390 : isSmall ? 410 : 610,
    activity: isMobile ? 670 : isSmall ? 670 : 610,
    skillstack: isMobile ? 610 : isSmall ? 620 : 642,
    contact: isMobile ? 650 : isSmall ? 600 : 630,
  };
  const handleTabClick = (tab: string) => {
    if (isScrolling) return;

    setIsScrolling(true);
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
  const ContactClick = () => {
    handleTabClick("contact");
  };
  return (
    <StyleFooter>
      <Top></Top>
      <Bottom>
        <ListWrap>
          <LogoContainer>MOLT</LogoContainer>
          <ItemWrap>
            <li>
              <Link to="/directory">Project Directory</Link>
            </li>

            <li>
              <Link to="/collection/8">Page Detail</Link>
            </li>
            <li>
              <Link to="/collection" onClick={ContactClick}>
                Contact
              </Link>
            </li>
          </ItemWrap>
        </ListWrap>
        <Copyright>Copyright © 2024 JaeJunLeem</Copyright>
      </Bottom>
    </StyleFooter>
  );
};

export default Footer;
