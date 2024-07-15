/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { Link } from "react-router-dom";
import { searchTermState } from "../../atom/atom";
import { useNavigate } from "react-router-dom";

const Gnb: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useRecoilState(searchTermState);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/collection");
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
          <Links to="/">Explore</Links>
          <Links to="/">Drops</Links>
          <Links to="/">Resources</Links>
          <Links to="/"></Links>
          <Links to="/"></Links>
          <Links to="/"></Links>
          <Links to="#" onClick={handleClick} isClick={clickedToggle}></Links>
        </MenuWrap>
      </Inner>
    </StyledGnb>
  );
};

export default Gnb;
