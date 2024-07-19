import styled from "styled-components";
import Logo from "../../assets/img/logo/logotest.png";
import search from "../../assets/img/icon/search.png";
import { Link } from "react-router-dom";
import account from "../../assets/img/icon/account.png";
import info from "../../assets/img/icon/info.png";
import toggle from "../../assets/img/icon/toggle.png";
import close from "../../assets/img/icon/close.png";

type GasideProps = {
  isClick?: boolean;
};

export const StyledGnb = styled.div`
  transition: all 0.5s linear;
  position: fixed;
  top: 0;
  display: flex;
  gap: 58px;
  align-items: center;
  width: 100%;
  padding: 0 35px;
  height: 73px;
  background-color: ${({ theme }) => theme.colors.transparent};
  z-index: 10;
  color: #fff;
  background-color: rgba(21, 18, 37, 0.7);
  backdrop-filter: blur(10px);
  @media ${({ theme }) => theme.mediaSize.xl} {
    gap: 25px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    justify-content: space-between;
  }
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
    background-size: contain;
  }
`;
export const Inner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 58px;
  @media ${({ theme }) => theme.mediaSize.xl} {
    gap: 25px;
  }
  @media ${({ theme }) => theme.mediaSize.lg} {
    gap: 30px;
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    gap: 34px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    justify-content: end;
  }
`;
export const InputWrap = styled.div`
  transition: all 0.5s linear;
  position: relative;
  width: 100%;
  height: 40px;
  @media ${({ theme }) => theme.mediaSize.xs} {
    display: none;
  }
`;
export const GnbInput = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.popup_B01};
  background-color: ${({ theme }) => theme.colors.transparent};
  color: ${({ theme }) => theme.colors.White};
  padding: 10px 10px 10px 40px;
  font-size: ${({ theme }) => theme.fontSize.p15};
`;
export const GnbSearch = styled.span`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translate(0, -50%) scale(0.7);
  width: 26px;
  height: 26px;
  opacity: 0.8;
  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: center;
  background-size: center;
`;
export const Gnbctrl = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(0, -50%) scale(0.7);
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.popup_B01};
  font-size: ${({ theme }) => theme.fontSize.p15};
  font-weight: lighter;
  text-align: center;
  line-height: 2;
`;

export const MenuWrap = styled.div`
  width: fit-content;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.p15};
  gap: 40px;
  @media ${({ theme }) => theme.mediaSize.xl} {
    gap: 30px;
  }
  @media ${({ theme }) => theme.mediaSize.lg} {
    gap: 25px;
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    gap: 32px;
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    gap: 25px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    gap: 20px;
    justify-content: space-between;
  }
`;

export const Links = styled(Link)<GasideProps>`
  &:nth-child(1) {
    @media ${({ theme }) => theme.mediaSize.lg} {
      display: none;
    }
  }
  &:nth-child(2) {
    @media ${({ theme }) => theme.mediaSize.lg} {
      display: none;
    }
  }
  &:nth-child(3) {
    @media ${({ theme }) => theme.mediaSize.lg} {
      display: none;
    }
  }
  &:nth-child(4) {
    display: none;
    @media ${({ theme }) => theme.mediaSize.xs} {
      display: block;
      width: 28px;
      height: 28px;
      background-image: url(${search});
      background-repeat: no-repeat;
      background-position: center;
      background-size: center;
    }
  }
  &:nth-child(5) {
    width: 28px;
    height: 28px;
    background-image: url(${account});
    background-repeat: no-repeat;
    background-position: center;
    background-size: center;
  }
  &:nth-child(6) {
    width: 28px;
    height: 28px;
    background-image: url(${info});
    background-repeat: no-repeat;
    background-position: center;
    background-size: center;
    @media ${({ theme }) => theme.mediaSize.sm} {
      display: none;
    }
  }
  &:last-child {
    display: none;
    @media ${({ theme }) => theme.mediaSize.lg} {
      transition: all 0.5s;
      display: block;
      width: 28px;
      height: 28px;
      background-image: ${({ isClick }) =>
        isClick ? `url(${close})` : `url(${toggle})`};
      background-repeat: no-repeat;
      background-position: center;
      background-size: center;
    }
  }
`;
