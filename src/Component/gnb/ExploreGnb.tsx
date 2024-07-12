import React from "react";
import { StyledGnb, LogoContainer, MenuWrap, Links } from "./StyledExploreGnb";
import { useRecoilState } from "recoil";
import Btn from "../btn/Btn";
import theme from "../../assets/theme/theme";
import { toggleState } from "../../atom/atom";
import { Link } from "react-router-dom";

const ExploreGnb: React.FC = () => {
  const [clickedToggle, setClickedToggle] = useRecoilState(toggleState);
  const handleClick = () => {
    setClickedToggle(!clickedToggle);
  };
  return (
    <StyledGnb>
      <LogoContainer>
        <Link to="/">MOLT</Link>
      </LogoContainer>
      <MenuWrap>
        <Links to="/">Explore</Links>
        <Links to="/">My</Links>
        <Btn bgColor={theme.colors.primary_V} size="p14" text="Connect" />
        <Links to="/"></Links>
        <Links to="/" onClick={handleClick} isClick={clickedToggle}></Links>
      </MenuWrap>
    </StyledGnb>
  );
};

export default ExploreGnb;
