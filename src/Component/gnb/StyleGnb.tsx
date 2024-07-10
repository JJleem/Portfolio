import React from "react";
import styled from "styled-components";
import Logo from "../../assets/img/logo/logotest.png";
export const StyledGnb = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1900px;
  padding: 0 35px;
  height: 68px;
  background-color: ${({ theme }) => theme.colors.transparent};
  border: 1px solid #f00;
  color: #fff;
  background-color: rgba(21, 18, 37, 0.7);
  backdrop-filter: blur(10px);
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100%;
  &::before {
    content: "";
    width: 50px;
    height: 50px;
    margin-right: 11px;
    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-position: center;
    background-size: center;
  }
`;

export const GnbInput = styled.input``;
