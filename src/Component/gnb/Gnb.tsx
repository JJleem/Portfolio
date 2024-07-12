import React, { useRef, useEffect } from "react";
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
import { toggleState } from "../../atom/atom";
import { useRecoilState } from "recoil";
const Gnb: React.FC = () => {
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
      <LogoContainer>MOLT</LogoContainer>
      <Inner>
        <InputWrap>
          <GnbSearch />
          <GnbInput
            className="text"
            type="text"
            placeholder='Search Projects ( press " / " )'
            ref={inputRef}
          />
          <Gnbctrl>/</Gnbctrl>
        </InputWrap>
        <MenuWrap>
          <Links to="/">Explore</Links>
          <Links to="/">Drops</Links>
          <Links to="/">Resources</Links>
          <Links to="/"></Links>
          <Links to="/"></Links>
          <Links to="/"></Links>
          <Links to="/" onClick={handleClick} isClick={clickedToggle}></Links>
        </MenuWrap>
      </Inner>
    </StyledGnb>
  );
};

export default Gnb;
