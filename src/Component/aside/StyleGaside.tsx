import styled, { css } from "styled-components";
import account from "../../assets/img/icon/account.png";
import explore from "../../assets/img/icon/explore.png";
import wallet from "../../assets/img/icon/wallet.png";
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
    z-index: 7;
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
