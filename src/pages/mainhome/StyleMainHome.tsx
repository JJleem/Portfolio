import styled, { css, keyframes } from "styled-components";
import bg from "../../assets/img/bg/testbg.png";
// import mainlogo from "../../assets/img/bg/mainlogo.png";
import mainlogo from "../../assets/img/logo/logo.png";
import react from "../../assets/img/skill/React.png";
import ts from "../../assets/img/skill/Typescript.png";
import js from "../../assets/img/skill/JavaScript.png";
import githubWhite from "../../assets/img/skill/githubWhite.png";

import replace from "../../assets/img/icon/Refresh_2@2x.png";
import { Opacity } from "../collection/StyleCollection";
type Props = {
  type?: string;
  transition?: string;
  skill?: string;
  scrolly?: number | undefined;
};
const ImgZ = keyframes`
0% {
  transform: translateZ(250px);
}
100% {
  transform: translateZ(0px);
}
`;

export const HomeWrapper = styled.div`
  width: 100vw;
  height: 100%;
  perspective: 1200px;
  color: ${({ theme }) => theme.colors.White};
  position: relative;
  transition: all 0s;
  overflow: hidden;
`;
export const BgWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: url(${bg});
  background-position: top;
  background-size: center;
  background-repeat: no-repeat;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  animation-fill-mode: forwards;
  animation: ${ImgZ} 5s ease-in-out;
  position: absolute;
  z-index: -99999 !important;
`;
export const HomeGrid = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 35px;
  padding-bottom: 210px;
  padding-top: 123px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
  flex-direction: column;
  position: relative;
`;
export const MainLogo = styled.div`
  width: 150px;
  height: 150px;
  background: url(${mainlogo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  animation: ${Opacity} 1.5s ease-in-out;
  @media ${({ theme }) => theme.mediaSize.xs} {
    animation: none;
  }
`;
export const MainTitle = styled.div`
  font-size: 80px;
  animation: ${Opacity} 1.5s ease-in-out;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  font-weight: 100;
  opacity: 0;
  span {
    font-weight: 700;
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    font-size: 72px;
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    font-size: 80px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    font-size: 58px;
    animation: none;
  }
`;
export const SubTitle = styled.div`
  animation: ${Opacity} 1.5s ease-in-out;
  animation-delay: 0.1s;
  animation-fill-mode: forwards;
  opacity: 0;
  font-size: ${({ theme }) => theme.fontSize.p11};
  letter-spacing: 10px;
  font-weight: 500;
  margin-bottom: 40px;
  @media ${({ theme }) => theme.mediaSize.md} {
    font-size: ${({ theme }) => theme.fontSize.p9};
    letter-spacing: 8px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    font-size: ${({ theme }) => theme.fontSize.p8};
    letter-spacing: 6px;
    animation: none;
  }
`;
export const MainDesc = styled.div`
  animation: ${Opacity} 1.5s ease-in-out;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  opacity: 0;
  font-size: ${({ theme }) => theme.fontSize.p25};
  text-align: center;
  font-weight: 300;
  line-height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    font-weight: 900;
  }
  .molt {
    margin-left: 10px;
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    font-size: ${({ theme }) => theme.fontSize.p20};
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    font-size: ${({ theme }) => theme.fontSize.p16};
    white-space: nowrap;
    animation: none;
  }
`;
export const MainDescTitle = styled.div`
  display: flex;
  @media ${({ theme }) => theme.mediaSize.md} {
    flex-direction: column;
    font-size: ${({ theme }) => theme.fontSize.p20};
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    flex-direction: column;
    font-size: ${({ theme }) => theme.fontSize.p16};
    white-space: nowrap;
  }
`;
export const MainInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const ItemWrapper = styled.div`
  animation: ${Opacity} 1.5s ease-in-out;
  animation-delay: 1.2s;
  animation-fill-mode: forwards;
  opacity: 0;
  display: flex;
  gap: 7px;
  transition: all 0.5s;
  @media ${({ theme }) => theme.mediaSize.sm} {
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    animation: none;
  }
`;
export const MainItem = styled.div`
  transition: all 0.5s;
  width: 238px;
  height: 328px;
  border-radius: 10px;
  background: rgba(10, 6, 33, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 25px;
  @media ${({ theme }) => theme.mediaSize.xl} {
    width: 206px;
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    width: 160px;
    height: 262px;
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    width: 444px;
    height: 140px;
    flex-direction: row;
    padding: 20px 10px;
    gap: 10px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    width: 372px;
    height: 120px;
  }
`;
export const MainItemLogo = styled.div`
  transition: all 0.5s;
  width: 100%;
  height: 60%;
  @media ${({ theme }) => theme.mediaSize.md} {
    width: 100%;
    height: 45%;
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    width: 30%;
    height: 100%;
  }
`;
export const Logo = styled.div<Props>`
  width: 100%;
  height: 100%;

  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transform-origin: center center;

  ${({ type }) => {
    switch (type) {
      case "react":
        return css`
          background: url(${react});
          background-position: center;
          background-size: contain;
          background-repeat: no-repeat;
          &:hover {
            transition: all 3s;
            transform: rotate(360deg);
          }
        `;
      case "ts":
        return css`
          background: url(${ts});
          background-position: center;
          background-size: contain;
          background-repeat: no-repeat;
          &:hover {
            transition: all 3s;
            transform: rotateY(360deg);
          }
        `;
      case "js":
        return css`
          background: url(${js});
          background-position: center;
          background-size: contain;
          background-repeat: no-repeat;
          &:hover {
            transition: all 3s;
            transform: rotateY(360deg);
          }
        `;
      case "github":
        return css`
          background: url(${githubWhite});
          background-position: center;
          background-size: contain;
          background-repeat: no-repeat;
          opacity: 0.8;
          transform-origin: center;
          &:hover {
            transition: all 3s;
            transform: rotateY(360deg);
            opacity: 1;
          }
        `;
    }
  }}
`;
export const MainItemDesc = styled.div`
  transition: all 0.5s;
  width: 100%;
  height: 40%;
  padding-top: 40px;
  font-size: ${({ theme }) => theme.fontSize.p16};
  font-weight: 200;
  span {
    font-weight: 700;
  }
  @media ${({ theme }) => theme.mediaSize.xl} {
    padding-top: 30px;
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    display: flex;
    align-items: center;
    padding-top: 45px;
    font-size: ${({ theme }) => theme.fontSize.p14};
    height: 55%;
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    width: 60%;
    height: 100%;
    padding-top: 0px;
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.p16};
  }
`;
export const MainProjectWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
`;
export const FirstProjectWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 22px;
  animation: ${Opacity} 1.5s ease-in-out;
  animation-delay: 1.2s;
  animation-fill-mode: forwards;
  opacity: 0;
  @media ${({ theme }) => theme.mediaSize.xs} {
    animation: none;
  }
`;
export const ProjectTitle = styled.div<Props>`
  margin-top: 50px;
  font-size: ${({ theme }) => theme.fontSize.p45};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  opacity: 0;
  span {
    font-weight: 700;
  }
  ${({ scrolly = 0 }) =>
    scrolly >= 100
      ? css`
          animation: ${Opacity} 1.5s ease-in-out;

          animation-fill-mode: forwards;
        `
      : ""}

  @media ${({ theme }) => theme.mediaSize.md} {
    font-size: ${({ theme }) => theme.fontSize.p30};
    padding: 0 15px;
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    font-size: ${({ theme }) => theme.fontSize.p25};
    padding: 0 15px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    animation: none;
  }
`;
export const NewProjectWrap = styled.div`
  width: 100%;

  display: flex;
  justify-content: end;
  animation: ${Opacity} 1.5s ease-in-out;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  @media ${({ theme }) => theme.mediaSize.xs} {
    animation: none;
  }
`;
export const NewProject = styled.div`
  width: 48px;
  height: 48px;
  background: url(${replace});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;
export const MainSub = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.p27};
  span {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.secondary_V};
  }
  br {
    &:last-child {
      display: none;
    }
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    font-size: ${({ theme }) => theme.fontSize.p25};
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    font-size: ${({ theme }) => theme.fontSize.p20};
    br {
      &:last-child {
        display: block;
      }
    }
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    font-size: ${({ theme }) => theme.fontSize.p14};
  }
`;
export const MainSubWrap = styled.div<Props>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  margin-top: 32px;
  opacity: 0;
  ${({ scrolly = 0 }) =>
    scrolly >= 1350
      ? css`
          animation: ${Opacity} 1.5s ease-in-out;

          animation-fill-mode: forwards;
        `
      : ""}
  div {
    &:nth-of-type(2) {
      margin-bottom: 50px;
    }
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    animation: none;
  }
`;
