import React from "react";
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
const Footer = () => {
  return (
    <StyleFooter>
      <Top></Top>
      <Bottom>
        <ListWrap>
          <LogoContainer>LOGO</LogoContainer>
          <ItemWrap>
            <li>
              <Link to="/">Terms</Link>
            </li>
            <li>
              <Link to="/">Privacy policy</Link>
            </li>
            <li>
              <Link to="/">Built in</Link>
            </li>
            <li>
              <Link to="/">Docs</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
          </ItemWrap>
        </ListWrap>
        <Copyright>Copyright © 2024 JaeJunLeem</Copyright>
      </Bottom>
    </StyleFooter>
  );
};

export default Footer;
