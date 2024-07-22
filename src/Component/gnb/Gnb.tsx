/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useEffect, useState } from "react";
import {
  StyledGnb,
  LogoContainer,
  GnbInput,
  GnbSearch,
  InputWrap,
  Gnbctrl,
  MenuWrap,
  Links,
  Inner,
} from "./StyleGnb";
import { tabsState, toggleState } from "../../atom/atom";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { searchTermState } from "../../atom/atom";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Gnb: React.FC = () => {
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

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useRecoilState(searchTermState);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    handleTabClick("items");
  };
  const IntrouctionClick = () => {
    handleTabClick("introduction");
  };
  const SkillStackClick = () => {
    handleTabClick("skillstack");
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleTabClick("items");
  };

  const [clickedToggle, setClickedToggle] = useRecoilState(toggleState);
  const handleClick = () => {
    setClickedToggle(!clickedToggle);
  };
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "/") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <StyledGnb>
      <LogoContainer>
        <Link to="/">MOLT</Link>
      </LogoContainer>
      <Inner>
        <InputWrap>
          <GnbSearch />
          <form onSubmit={handleSubmit}>
            <GnbInput
              className="text"
              type="text"
              placeholder='Search Projects ( press " / " )'
              ref={inputRef}
              onChange={handleSearch}
            />
          </form>
          <Gnbctrl>/</Gnbctrl>
        </InputWrap>
        <MenuWrap>
          <Links to="/">MainHome</Links>
          <Links to="/collection/7">Detail</Links>
          <Links to="/directory">Directory</Links>
          <Links to="/directory"></Links>
          <Links to="/collection" onClick={IntrouctionClick}></Links>
          <Links to="/collection" onClick={SkillStackClick}></Links>
          <Links to="#" onClick={handleClick} isClick={clickedToggle}></Links>
        </MenuWrap>
      </Inner>
    </StyledGnb>
  );
};

export default Gnb;
