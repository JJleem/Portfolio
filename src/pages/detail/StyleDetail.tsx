import styled from "styled-components";
import emptyheart from "../../assets/img/icon/emptyheart.png";
import fillheart from "../../assets/img/icon/filledheart.png";
import ts from "../../assets/img/skill/Typescript.png";
import arrowdown from "../../assets/img/icon/arrowdown.png";
type Props = {
  isClick?: boolean;
  img?: string;
  transition?: string;
  index?: number;
  onClick?: () => void | undefined;
  isHover?: boolean;
  logo?: string;
};
export const StyleDetail = styled.div`
  width: 100vw;
  position: relative;
  padding-bottom: 97px;
`;
export const DetailWrapper = styled.div`
  width: 100%;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  @media ${({ theme }) => theme.mediaSize.sm} {
    padding-bottom: 50px;
  }
`;
export const TopSection = styled.div`
  width: 100%;
  height: 78px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.nav_BG};
`;
export const BottomSection = styled.div`
  width: 100%;
  height: 100%;

  padding: 0 35px;
  display: flex;
  gap: 30px;
  @media ${({ theme }) => theme.mediaSize.md} {
    flex-direction: column;
    gap: 8px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    padding: 0 30px;
  }
`;
export const ImgWrap = styled.div`
  width: 45%;
  height: 100%;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.nav_BG};
  background: ${({ theme }) => theme.colors.detail_BG};
  overflow: hidden;
  cursor: pointer;
  @media ${({ theme }) => theme.mediaSize.md} {
    width: 100%;
    height: 100%;
  }
`;
export const ImgHeader = styled.div`
  width: 100%;
  height: 45px;
  background: ${({ theme }) => theme.colors.nav_BG};
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 10px;
  border-radius: 8px 8px 0px 0px;
  border: 1px solid ${({ theme }) => theme.colors.nav_BG};
`;
export const HeartLogo = styled.div<Props>`
  transition: all 0.3s;
  background-image: url(${(props) => (props.isClick ? fillheart : emptyheart)});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 24px;
  height: 24px;

  cursor: pointer;
  display: block;
`;

export const ImgSection = styled.div<Props>`
  background: url(${({ img }) => img});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: calc(100vh - 160px);
  border-radius: 0px 0px 8px 8px;
  transition: background-position ${({ transition }) => transition}s;
  &:hover {
    background-position: bottom;
  }
  position: relative;
  @media ${({ theme }) => theme.mediaSize.md} {
    height: 50vh;
  }
`;
export const ModalCursor = styled.div<Props>`
  position: fixed;

  display: ${({ isHover }) => (isHover ? "block" : "none")};
  padding: 8px 12px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.White};
  background: ${({ theme }) => theme.colors.primary_V};
  font-size: ${({ theme }) => theme.fontSize.p11};
  white-space: nowrap;
  &:before {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 2px;
    transform: translateX(-50%) rotate(45deg);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 15px solid ${({ theme }) => theme.colors.primary_V};
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    font-size: ${({ theme }) => theme.fontSize.p9};
    padding: 4px 8px;
  }
`;
export const HideTitle = styled.div`
  display: none;
  @media ${({ theme }) => theme.mediaSize.md} {
    display: block;
    color: ${({ theme }) => theme.colors.White};
    font-size: ${({ theme }) => theme.fontSize.p30};
    span {
      font-size: ${({ theme }) => theme.fontSize.p15};
      color: ${({ theme }) => theme.colors.secondary_V};
      margin-bottom: 10px;
    }
  }
`;
export const DescWrap = styled.div`
  width: 55%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  gap: 27px;
  @media ${({ theme }) => theme.mediaSize.md} {
    width: 100%;
    height: 100%;
  }
`;
export const Title = styled.div`
  color: ${({ theme }) => theme.colors.White};
  font-size: ${({ theme }) => theme.fontSize.p30};
  span {
    font-size: ${({ theme }) => theme.fontSize.p15};
    color: ${({ theme }) => theme.colors.secondary_V};
    margin-bottom: 10px;
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    display: none;
  }
`;
export const DescSection = styled.div`
  width: 100%;
  padding: 0px 0px;
  border: 1px solid ${({ theme }) => theme.colors.nav_BG};
  background: ${({ theme }) => theme.colors.input_BOXbg};
  border-radius: 8px;
`;
export const Description = styled.div<Props>`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.nav_BG};
  padding: 10px;
  position: relative;
  display: flex;
  align-items: center;

  gap: 10px;
  color: ${({ theme }) => theme.colors.White};
  font-size: ${({ theme }) => theme.fontSize.p17};

  span {
    width: 24px;
    height: 24px;
    background: url(${({ logo }) => logo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: center;
  }
  div {
    height: 24px;
  }
`;
export const ArrowDown = styled.i<Props>`
  width: 24px;
  height: 24px;
  background: url(${arrowdown});
  background-position: center;
  background-repeat: no-repeat;
  background-size: center;
  position: absolute;
  right: 10px;
  cursor: pointer;
  transition: all 0.5s;
  transform: ${({ isClick }) => (isClick ? "scaleY(-1)" : "")};
`;
export const DescriptionSection = styled.div<Props>`
  padding: 30px 25px;
  color: ${({ theme }) => theme.colors.White};
  border-bottom: 1px solid ${({ theme }) => theme.colors.nav_BG};
  transition: max-height 1s, padding 0s;
  max-height: 999px;
  overflow: hidden;
  ${({ isClick }) =>
    isClick &&
    `
    max-height: 0;
    padding: 0;
  `}
`;
export const DescriptionInner = styled.div<Props>`
  display: flex;
  flex-direction: column;
  gap: 19px;
  ${({ isClick }) =>
    isClick &&
    `
   display:none;
  `};
  @media ${({ theme }) => theme.mediaSize.md} {
    font-size: ${({ theme }) => theme.fontSize.p17};
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    font-size: ${({ theme }) => theme.fontSize.p15};
  }
`;
export const DescriptionGridInner = styled.div<Props>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 20px;
  @media ${({ theme }) => theme.mediaSize.md} {
    grid-template-columns: repeat(1, 1fr);
  }
  ${({ isClick }) =>
    isClick &&
    `
   display:none;
  `}
`;
export const SkillContainer = styled.div<Props>`
  width: 100%;
  height: 100%;
  display: flex;

  gap: 12px;
  ${({ isClick }) =>
    isClick &&
    `
   display:none;
  `}
`;
export const Skill = styled.div<Props>`
  border: 1px solid ${({ theme }) => theme.colors.secondary_V};
  background: rgba(167, 150, 255, 0.2);
  width: 100px;
  min-height: 110px;
  max-height: 999px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SkillLogo = styled.div<Props>`
  background: url(${({ logo }) => logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 100%;
`;
export const SkillText = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px 15px;
  background: rgba(167, 150, 255, 0.2);
  border: 1px solid ${({ theme }) => theme.colors.secondary_V};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SkillUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const SkillLi = styled.li`
  list-style: inside;
  font-size: ${({ theme }) => theme.fontSize.p12};
  @media ${({ theme }) => theme.mediaSize.md} {
    font-size: ${({ theme }) => theme.fontSize.p11};
  }
`;
export const SkillWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100%;
  span {
    font-size: ${({ theme }) => theme.fontSize.p11};
    color: ${({ theme }) => theme.colors.White};
    border: 1px solid ${({ theme }) => theme.colors.secondary_V};
    background: rgba(167, 150, 255, 0.2);
    width: 100%;

    text-align: center;
    letter-spacing: -0.5px;
  }
`;
export const DetailsItems = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.p16};
  span {
    font-size: ${({ theme }) => theme.fontSize.p14};
    color: ${({ theme }) => theme.colors.secondary_V};

    display: flex;
    i {
      width: 24px;
      height: 24px;
      background: url(${({ logo }) => logo});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      cursor: pointer;
    }
  }
`;
