import React from "react";
import {
  StyledGnb,
  LogoContainer,
  MenuWrap,
  Links,
  ToggleBtn,
} from "./StyledExploreGnb";
import { useRecoilState } from "recoil";
import Btn from "../btn/Btn";
import theme from "../../assets/theme/theme";
import { toggleState } from "../../atom/atom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ExploreGnb: React.FC = () => {
  const [clickedToggle, setClickedToggle] = useRecoilState(toggleState);
  const handleClick = () => {
    setClickedToggle(!clickedToggle);
  };
  const navigate = useNavigate();
  const goConnect = () => {
    navigate("/collection");
  };
  return (
    <StyledGnb>
      <LogoContainer>
        <Link to="/">MOLT</Link>
      </LogoContainer>
      <MenuWrap>
        <Links to="/">Explore</Links>
        <Links to="/">My</Links>
        <Btn
          bgColor={theme.colors.primary_V}
          size="p14"
          text="Connect"
          onClick={goConnect}
          linkto={"/collection"}
        />
        <Links to="/"></Links>
        <ToggleBtn onClick={handleClick} isClick={clickedToggle}></ToggleBtn>
      </MenuWrap>
    </StyledGnb>
  );
};

export default ExploreGnb;
