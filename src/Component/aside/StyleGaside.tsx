import styled, { css } from "styled-components";
import account from "../../assets/img/icon/account.png";
import explore from "../../assets/img/icon/explore.png";
import wallet from "../../assets/img/icon/wallet.png";
import list from "../../assets/img/icon/list.png";
import detail from "../../assets/img/icon/detail.png";
import contact from "../../assets/img/icon/contact.png";
import arrow from "../../assets/img/icon/arrow.png";
type GasideProps = {
  isClick: boolean;
  isResponsive: boolean;
};
type NameProps = {
  name?: string;
};

export const GasideWrap = styled.div<GasideProps>`
  display: none;
  @media ${({ theme }) => theme.mediaSize.lg} {
    position: fixed !important;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 73px;
    right: 0;
    z-index: 6;
    display: ${({ isClick }) => (isClick ? "block" : "none")};
  }
`;

export const StyleGaside = styled.div<GasideProps>`
  display: none;
  @media ${({ theme }) => theme.mediaSize.lg} {
    display: block;
    transition: all 0.5s;
    width: 420px;
    height: 100vh;
    background: ${({ theme }) => theme.colors.nav_BG};
    position: fixed;
    top: 73px;
    right: -420px;
    z-index: 11;
    transform: ${({ isClick }) =>
      isClick ? "translate(-420px, 0)" : "translate(0, 0)"};
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    width: 100%;
    transition: all 0.5s;
  }
`;

export const Inner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 8;
`;
export const Item = styled.div`
  width: 100%;
  height: 76px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.popup_B01};
  padding: 30px 20px 30px 20px;
  font-size: ${({ theme }) => theme.fontSize.p16};
  color: ${({ theme }) => theme.colors.White};
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: ${({ theme }) => theme.colors.input_BOXbg};
  }
`;
export const Name = styled.div``;
export const Icon = styled.div<NameProps>`
  width: 30px;
  height: 30px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: center;
  ${({ name }) => {
    switch (name) {
      case "explore":
        return css`
          background-image: url(${explore});
        `;
      case "account":
        return css`
          background-image: url(${account});
        `;
      case "wallet":
        return css`
          background-image: url(${wallet});
        `;
      case "directory":
        return css`
          background-image: url(${list});
        `;
      case "detail":
        return css`
          background-image: url(${detail});
        `;
      case "contact":
        return css`
          background-image: url(${contact});
        `;
    }
  }};
`;
export const BtnWrap = styled.div`
  position: absolute;
  bottom: 100px;
  left: 50%;
  width: 100%;
  justify-content: center;
  transform: translate(-50%);

  display: flex;
  gap: 20px;
  align-items: center;
`;
export const BtnAside = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary_V};
  border-radius: 6px;
  font-weight: 700;
  transition: all 0.5s linear;
  color: ${({ theme }) => theme.colors.White};
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary_V};
  }
  width: 208px;
  height: 48px;
  font-size: ${({ theme }) => theme.fontSize.p15};
  &::before {
    content: "";
    width: 24px;
    height: 24px;
    margin-right: 30px;
    background-image: url(${arrow});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: ${({ theme }) => theme.colors.White};
  }
`;
