/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { tabsState, toggleState } from "../../atom/atom";
import {
  BtnAside,
  BtnWrap,
  GasideWrap,
  Icon,
  Inner,
  Item,
  Name,
  StyleGaside,
} from "./StyleGaside";
import Btn from "../btn/Btn";
import theme from "../../assets/theme/theme";
import { useMediaQuery } from "react-responsive";
import { Link, useNavigate } from "react-router-dom";
const Gaside = () => {
  const [clickedToggle, setClickedToggle] = useRecoilState(toggleState);
  const is1280 = useMediaQuery({ maxWidth: 1280 });
  const navigate = useNavigate();
  useEffect(() => {
    if (is1280) {
      if (clickedToggle) {
        setClickedToggle(!clickedToggle);
      } else {
        setClickedToggle(clickedToggle);
      }
    }
  }, [is1280]);

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
        setIsScrolling(false);
      };

      window.addEventListener("scroll", scrollEndListener);
    };

    scrollToTab();
  };
  const memoizedHandleTabClick = useCallback(
    (tab: any) => handleTabClick(tab),
    [handleTabClick]
  );

  const handleClick = () => {
    setClickedToggle(!clickedToggle);
  };
  const handleHome = () => {
    setClickedToggle(!clickedToggle);
    navigate("/");
  };
  const handleCollection = () => {
    setClickedToggle(!clickedToggle);
    navigate("/collection");
    memoizedHandleTabClick("items");
  };
  const handleIntroduction = () => {
    setClickedToggle(!clickedToggle);
    navigate("/collection");
    memoizedHandleTabClick("introduction");
  };
  const handleDirectory = () => {
    setClickedToggle(!clickedToggle);
    navigate("/directory");
  };
  const handleDetail = () => {
    setClickedToggle(!clickedToggle);
    navigate("/collection/7");
  };

  const handleContact = () => {
    setClickedToggle(!clickedToggle);
    navigate("/collection");
    memoizedHandleTabClick("contact");
  };
  return (
    <>
      <GasideWrap
        isClick={clickedToggle}
        isResponsive={is1280}
        onClick={handleClick}
      ></GasideWrap>
      <StyleGaside isClick={clickedToggle} isResponsive={is1280}>
        <Inner>
          <Item onClick={handleHome}>
            <Icon name="explore" />
            <Name>MainHome</Name>
          </Item>
          <Item onClick={handleCollection}>
            <Icon name="wallet" />
            <Name>Collection</Name>
          </Item>
          <Item onClick={handleIntroduction}>
            <Icon name="account" />
            <Name>Introduction</Name>
          </Item>
          <Item onClick={handleDirectory}>
            <Icon name="directory" />
            <Name>Directory</Name>
          </Item>
          <Item onClick={handleDetail}>
            <Icon name="detail" />
            <Name>Detail</Name>
          </Item>
          <Item onClick={handleContact}>
            <Icon name="contact" />
            <Name>Contact</Name>
          </Item>
          <BtnWrap>
            <Link to={"https://github.com/JJleem"} target="_blank">
              <BtnAside>Github</BtnAside>
            </Link>
          </BtnWrap>
        </Inner>
      </StyleGaside>
    </>
  );
};

export default Gaside;
