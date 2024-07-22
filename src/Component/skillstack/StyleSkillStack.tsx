import { motion } from "framer-motion";
import styled from "styled-components";
import blackhole from "../../assets/img/bg/blackhole.png";

type logoProps = {
  logo?: string;
  isClick?: boolean;
};
type ClickedProps = {
  isClick?: boolean;
};
export const SkillStackContainer = styled.div<ClickedProps>`
  width: 100%;
  padding: 0 35px;
  position: absolute;
  top: 0;
  left: 0;

  transition: all 0.5s 1s;
  display: ${({ isClick }) => (isClick ? "none" : "flex")};
  justify-content: center;
  align-items: end;

  height: 87%;

  padding-top: 200px;
  @media ${({ theme }) => theme.mediaSize.md} {
    height: 93%;
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    height: 91%;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    height: 91%;
  }
`;
export const SkillStackBox = styled.div<ClickedProps>`
  position: relative;
  width: 100%;
  transition: all 0.5s 1s;

  height: 100vh;
  display: ${({ isClick }) => (isClick ? "none" : "flex")};

  padding-top: 200px;
`;
export const SkillStackSection = styled(motion.div)<ClickedProps>`
  position: relative;
  transition: all 0.5s 1s;
  display: ${({ isClick }) => (isClick ? "none" : "flex")};
  transition: all 0.8s;
  width: 300px;
  height: 300px;
  background-image: url(${blackhole});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 1);
  transition: background-color 0.5s ease-in-out;
  transform: rotate(-32deg) skewX(20deg);
  cursor: pointer;
  @media ${({ theme }) => theme.mediaSize.xs} {
    width: 200px;
    height: 200px;
    transform: rotate(-32deg) skewX(20deg);
  }
  &:hover {
    box-shadow: -50px 100px 60px rgba(0, 0, 0, 0.3);
    & div:nth-child(1) {
      transform: translate(0px, 0px);
    }
    & div:nth-child(2) {
      transform: translate(10px, -10px);
      opacity: 0.4;
    }
    & div:nth-child(3) {
      transform: translate(20px, -20px);
      opacity: 0.6;
    }
    & div:nth-child(4) {
      transform: translate(30px, -30px);
      opacity: 0.8;
    }
    & div:nth-child(5) {
      transform: translate(40px, -40px);
      opacity: 0.8;
    }
    & div:nth-child(6) {
      transform: translate(50px, -50px);
      opacity: 0.8;
    }
    & div:nth-child(7) {
      transform: translate(60px, -60px);
      opacity: 0.8;
    }
    & div:nth-child(8) {
      transform: translate(80px, -80px);
      opacity: 0.8;
    }
    & div:nth-child(9) {
      transform: translate(100px, -100px);
      opacity: 0.9;
    }
    & div:nth-child(10) {
      transform: translate(120px, -120px);
      opacity: 0.9;
    }
    & div:nth-child(11) {
      transform: translate(140px, -140px);
      opacity: 0.9;
    }
    & div:nth-child(12) {
      transform: translate(160px, -160px);
      opacity: 1;
    }
    & div:nth-child(13) {
      transform: translate(180px, -180px);
      opacity: 1;
    }
    & div:nth-child(14) {
      transform: translate(200px, -200px);
      opacity: 1;
    }
    & div:nth-child(15) {
      transform: translate(220px, -220px);
      opacity: 1;
    }
    & div:nth-child(16) {
      transform: translate(240px, -240px);
      opacity: 1;
    }
    & div:nth-child(17) {
      transform: translate(260px, -260px);
      opacity: 1;
    }
    & div:nth-child(18) {
      transform: translate(280px, -280px);
      opacity: 1;
    }
    & div:nth-child(19) {
      transform: translate(300px, -300px);
      opacity: 1;
    }
    & div:nth-child(20) {
      transform: translate(320px, -320px);
      opacity: 1;
    }
    & div:nth-child(21) {
      transform: translate(340px, -340px);
      opacity: 1;
    }
    & div:nth-child(22) {
      transform: translate(360px, -360px);
      opacity: 1;
    }
    & div:nth-child(23) {
      transform: translate(380px, -380px);
      opacity: 1;
    }
    & div:nth-child(24) {
      transform: translate(400px, -400px);
      opacity: 1;
    }
    & div:nth-child(25) {
      transform: translate(420px, -420px);
      opacity: 1;
    }
    & div:nth-child(26) {
      transform: translate(440px, -440px);
      opacity: 1;
    }
  }
`;
export const SkillItem = styled(motion.div)<logoProps>`
  background-image: url(${({ logo }) => logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  width: 100%;
  height: 100%;
  z-index: 2;
  border-radius: 15px;
`;
export const SkillInner = styled.div<logoProps>`
  width: 100px;
  height: 100px;
  transition: all 0.5s;
  position: absolute;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  top: 30%;
  left: 35%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  @media ${({ theme }) => theme.mediaSize.xs} {
    width: 75px;
    height: 75px;
  }
`;
export const SkillSectionlayout = styled(motion.div)<logoProps>`
  width: 100%;
  /* height: 200vh; */
  display: flex;
  transition-property: transform;
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
  transition-delay: 1s;
  flex-direction: column;
  gap: 50px;

  @media ${({ theme }) => theme.mediaSize.sm} {
    justify-content: center;
    align-items: center;
  }
`;
export const SkillItemlayout = styled(motion.div)<logoProps>`
  background-image: url(${({ logo }) => logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 50px;
  height: 50px;
  z-index: 2;

  padding: 10px;
  @media ${({ theme }) => theme.mediaSize.xl} {
    width: 40px;
    height: 40px;
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    width: 30px;
    min-height: 30px;
    max-height: 999px;
  }
`;

export const ModalSkill = styled.div<ClickedProps>`
  position: absolute;
  top: 88%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  display: block;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.White};
  background: ${({ theme }) => theme.colors.primary_V};
  font-size: ${({ theme }) => theme.fontSize.p14};
  white-space: nowrap;

  @media ${({ theme }) => theme.mediaSize.md} {
    font-size: ${({ theme }) => theme.fontSize.p14};
    top: 87%;
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    top: 85%;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    top: 50%;
    right: -50%;
    padding: 8px -5px;
    transform: rotate(-90deg);
    text-align: center;
  }
`;
export const Logo = styled(motion.div)`
  border: 1px solid ${({ theme }) => theme.colors.secondary_V};
  background: rgba(167, 150, 255, 0.2);
  width: 100px;
  min-height: 100px;
  max-height: 999px;
  padding: 10px;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media ${({ theme }) => theme.mediaSize.xl} {
    width: 90px;
    min-height: 90px;
    max-height: 999px;
  }
  @media ${({ theme }) => theme.mediaSize.lg} {
    width: 80px;
    min-height: 80px;
    max-height: 999px;
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    width: 80px;
    min-height: 80px;
    max-height: 999px;
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    width: 70px;
    height: 70px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    width: 75px;
    height: 75px;
  }
`;
export const LogoDesc = styled.span`
  font-size: ${({ theme }) => theme.fontSize.p10};

  width: calc(100% + 20px);

  padding: 2px;
  border-top: 1px solid ${({ theme }) => theme.colors.secondary_V};
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${({ theme }) => theme.mediaSize.lg} {
    font-size: ${({ theme }) => theme.fontSize.p9};
  }
  @media ${({ theme }) => theme.mediaSize.lg} {
    font-size: ${({ theme }) => theme.fontSize.p8};
  }
`;
export const StackSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  color: ${({ theme }) => theme.colors.White};
  transition: all 0.5s;
  &:hover {
    & h1 {
      transition: all 0.5s;
      color: ${({ theme }) => theme.colors.primary_V};
    }
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    justify-content: center;
    align-items: center;
  }
`;
export const StackInner = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  width: fit-content;

  @media ${({ theme }) => theme.mediaSize.md} {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 20px;
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
    gap: 10px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5px;
    gap: 5px;
    justify-content: center;
    align-items: center;
  }
`;
