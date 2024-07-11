import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { toggleState } from "../../atom/atom";
import {
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
const Gaside = () => {
  const [clickedToggle, setClickedToggle] = useRecoilState(toggleState);
  const is1280 = useMediaQuery({ maxWidth: 1280 });

  useEffect(() => {
    if (is1280) {
      if (clickedToggle) {
        setClickedToggle(!clickedToggle);
      } else {
        setClickedToggle(clickedToggle);
      }
    }
  }, [is1280]);

  const handleClick = () => {
    setClickedToggle(!clickedToggle);
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
          <Item>
            <Icon name="explore" />
            <Name>Explore</Name>
          </Item>
          <Item>
            <Icon name="account" />
            <Name>Account</Name>
          </Item>
          <Item>
            <Icon name="wallet" />
            <Name>My Wallet</Name>
          </Item>
          <BtnWrap>
            <Btn bgColor={theme.colors.primary_V} size="p15" text="Github" />
            <Btn bgColor={theme.colors.primary_V} size="p15" text="Instagram" />
          </BtnWrap>
        </Inner>
      </StyleGaside>
    </>
  );
};

export default Gaside;
