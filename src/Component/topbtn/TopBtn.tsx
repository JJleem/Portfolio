import React, { useState, useEffect } from "react";
import styled from "styled-components";
import more from "../../assets/img/icon/expand_more.png";
const TopBtn = () => {
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
  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <StyleTopBtn type="button" onClick={handleGoToTop} scroll={scrollY}>
      <More />
      TOP
    </StyleTopBtn>
  );
};

export default TopBtn;

type Props = {
  scroll: number;
};
const More = styled.div`
  width: 30px;
  height: 20px;
  background-image: url(${more});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transform: rotate(180deg);
`;
const StyleTopBtn = styled.button<Props>`
  position: fixed;
  bottom: 105px;
  right: 35px;
  border-radius: 100%;
  width: 60px;
  height: 60px;
  background: ${({ theme }) => theme.colors.primary_V};
  transition: all 0.5s;
  opacity: ${({ scroll }) => (scroll > 1400 ? 1 : 0)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
  font-weight: 700;
  &:hover {
    background: ${({ theme }) => theme.colors.secondary_V};
    color: #000;
    div {
      display: none;
    }
  }
`;
