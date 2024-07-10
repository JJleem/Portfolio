import React from "react";
import { StyledGnb, LogoContainer } from "./StyleGnb";

//type

const Gnb = () => {
  return (
    <StyledGnb>
      <LogoContainer>LOGO</LogoContainer>
      <div>
        <input type="text" />
      </div>
      <div>logo</div>
      <div>logo</div>
    </StyledGnb>
  );
};

export default Gnb;
