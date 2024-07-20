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
  align-items: center;
  flex-direction: column;
  height: 100vh;

  padding-top: 200px;
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
  transform: rotate(-30deg) skewX(20deg);
  cursor: pointer;

  &:hover {
    box-shadow: -50px 100px 60px rgba(0, 0, 0, 0.3);
    & div:nth-child(1) {
      transform: translate(0px, 0px);
    }
    & div:nth-child(2) {
      transform: translate(50px, -50px);
      opacity: 0.4;
    }
    & div:nth-child(3) {
      transform: translate(80px, -80px);
      opacity: 0.6;
    }
    & div:nth-child(4) {
      transform: translate(110px, -110px);
      opacity: 0.8;
    }
    & div:nth-child(5) {
      transform: translate(140px, -140px);
      opacity: 0.8;
    }
    & div:nth-child(6) {
      transform: translate(170px, -170px);
      opacity: 0.8;
    }
    & div:nth-child(7) {
      transform: translate(200px, -200px);
      opacity: 0.8;
    }
    & div:nth-child(8) {
      transform: translate(230px, -230px);
      opacity: 0.8;
    }
    & div:nth-child(9) {
      transform: translate(260px, -260px);
      opacity: 0.9;
    }
    & div:nth-child(10) {
      transform: translate(290px, -290px);
      opacity: 0.9;
    }
    & div:nth-child(11) {
      transform: translate(320px, -320px);
      opacity: 0.9;
    }
    & div:nth-child(12) {
      transform: translate(350px, -350px);
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
`;
export const SkillSectionlayout = styled(motion.div)<logoProps>`
  width: 100%;
  height: 200vh;
  display: flex;

  transition-property: transform;
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
  transition-delay: 1s;
  flex-direction: column;
`;
export const SkillItemlayout = styled(motion.div)<logoProps>`
  background-image: url(${({ logo }) => logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 100px;
  height: 100px;
  z-index: 2;
  border-radius: 15px;

  padding: 10px;
`;

export const ModalSkill = styled.div<ClickedProps>`
  position: absolute;
  top: 80%;
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
    top: 80%;
  }
`;
export const Logo = styled(motion.div)`
  border: 1px solid ${({ theme }) => theme.colors.secondary_V};
  background: rgba(167, 150, 255, 0.2);
  width: 150px;
  min-height: 150px;
  max-height: 999px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
