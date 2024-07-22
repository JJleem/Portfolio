import styled, { css, keyframes } from "styled-components";
import more from "../../assets/img/icon/expand_more.png";
import theme from "../../assets/theme/theme";
import filter from "../../assets/img/icon/filter_list.png";
import close from "../../assets/img/icon/close.png";
import column from "../../assets/img/icon/column.png";
import row from "../../assets/img/icon/row.png";
import JJ from "../../assets/img/bg/jjMain8.png";
import check from "../../assets/img/icon/check.png";
type Props = {
  isClick?: boolean;
  isFilter?: boolean;
  isModal?: boolean;
};
type logoProps = {
  logo?: string;
};
export const Opacity = keyframes`
0% {
  opacity:0;
}
100% {
  opacity:1;
}
`;
export const Container = styled.div`
  overflow-x: hidden;
  width: 100vw;
  height: 100%;
  position: relative;
  padding-bottom: 100px;
  background: ${({ theme }) => theme.colors.BG_V};
`;
export const Section = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const TopCover = styled.div`
  width: 100%;
  height: 330px;
  background: ${({ theme }) => theme.colors.login_BOXline};
  @media ${({ theme }) => theme.mediaSize.sm} {
    height: 310px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    height: 310px;
  }
`;
export const BottomCover = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 35px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
export const Profile = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 15px;
  border: 3px solid ${({ theme }) => theme.colors.BG_MainBox};
  position: absolute;
  background-image: url(${JJ});
  /* background-color: ${({ theme }) => theme.colors.line}; */
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  top: -157px;
  @media ${({ theme }) => theme.mediaSize.sm} {
    width: 124px;
    height: 124px;
    top: -97px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    width: 140px;
    height: 140px;
    top: -107px;
  }
`;
export const BottomSection = styled.div<Props>`
  width: 100%;
  color: ${({ theme }) => theme.colors.White};
  padding: 45px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  transition: all 0.8s 0.3s;
  @media ${({ theme }) => theme.mediaSize.sm} {
    padding-bottom: ${({ isModal }) => (isModal ? "20px" : "")};
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    padding-bottom: 0;
  }
`;
export const TitleName = styled.div`
  font-size: ${({ theme }) => theme.fontSize.p30};
`;
export const SubName = styled.div`
  font-size: ${({ theme }) => theme.fontSize.p16};
`;
export const Desc = styled.div`
  font-size: ${({ theme }) => theme.fontSize.p17};
`;
export const Fold = styled.div<Props>`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.p17};
  color: ${({ theme }) => theme.colors.secondary_V};
`;
export const More = styled.div<Props>`
  display: block;
  background-image: url(${more});
  background-position: center;
  background-repeat: no-repeat;
  background-size: center;
  width: 24px;
  height: 24px;
  transform: rotate(180);
  cursor: pointer;
  transition: all 0.5s;
  transform: ${({ isClick }) => (isClick ? "rotate(0deg)" : "rotate(180deg)")};
`;
export const DataList = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  @media ${({ theme }) => theme.mediaSize.sm} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;
export const Data = styled.div`
  padding-right: 25px;
  border-right: 1px solid ${({ theme }) => theme.colors.popup_B01};
  text-align: center;
  span {
    font-size: ${({ theme }) => theme.fontSize.p15};
    color: ${({ theme }) => theme.colors.datatitle};
  }
  p {
    font-size: ${({ theme }) => theme.fontSize.p22};
    text-align: center;
  }
`;
export const TabList = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.popup_B01};
  display: flex;
  align-items: center;
  gap: 50px;
  position: relative;
  transition: all 0.5s;
  @media ${({ theme }) => theme.mediaSize.sm} {
    justify-content: space-around;

    gap: 0;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    overflow-x: auto;
    transition: all 0.5s;
    gap: 30px;
  }
`;
export const Modaldetail = styled.div<Props>`
  transition: all 0.5s;

  ${({ isModal }) =>
    isModal
      ? css`
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.3s, transform 0.3s, visibility 0.3s;
          visibility: visible;
        `
      : css`
          opacity: 0;
          transform: translateY(-10px);
          transition: opacity 0.3s, transform 0.3s, visibility 0.3s;
          visibility: hidden;
          transition-delay: 0.2s;
        `}
  position: absolute;
  padding: 12px 14px;
  padding-right: 18px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.White};
  background: ${({ theme }) => theme.colors.primary_V};
  font-size: ${({ theme }) => theme.fontSize.p11};
  white-space: nowrap;
  left: 660px;
  top: -36px;
  transform-origin: center center;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
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
    left: 520px;
    top: -45px;
    padding: 10px 15px;
    padding-right: 15px;
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    transform: scaleX(-1);
    left: 0px;
    top: -45px;
  }
`;
export const TabListContainer = styled.div`
  position: relative;
  @media ${({ theme }) => theme.mediaSize.xs} {
    display: flex;
    overflow-x: auto;
    height: 100%;
    width: 100%;

    transition: all 0.5s;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
export const ModalContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  i {
    width: 12px;
    height: 12px;
    background-image: url(${close});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: -7px;
    right: -13px;
    cursor: pointer;
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    transform: scaleX(-1);
    position: relative;
    width: 100%;
    height: 100%;

    i {
      transform: scaleX(-1);
      width: 12px;
      height: 12px;
      background-image: url(${close});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
      top: -8px;
      right: -14px;
      cursor: pointer;
    }
  }
`;
export const Tab = styled.div<Props>`
  padding-bottom: 13px;

  color: ${({ isClick }) =>
    isClick ? `${theme.colors.White}` : `${theme.colors.datatitle}`};
  border-bottom: ${({ isClick }) =>
    isClick ? ` 3px solid ${theme.colors.line}` : ``};
  font-size: ${({ theme }) => theme.fontSize.p22};

  cursor: pointer;
  @media ${({ theme }) => theme.mediaSize.md} {
    font-size: ${({ theme }) => theme.fontSize.p17};
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    font-size: ${({ theme }) => theme.fontSize.p15};
  }
`;
export const InputWrap = styled.div`
  display: flex;
  width: 100%;
  animation: ${Opacity} 1.5s ease-in-out;
  height: 53px;
  gap: 12px;
  margin-top: -20px;
  align-items: center;
  justify-content: space-between;
`;
export const LogoContainer = styled.div<Props>`
  transition: all 0.5s;
  width: 48px;
  height: 48px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.popup_B01};
  background: ${({ isFilter }) =>
    isFilter ? `${theme.colors.popup_B01}` : `${theme.colors.transparent}`};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  cursor: pointer;
`;
export const Logo = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${filter});
  background-position: center;
  background-repeat: no-repeat;
  background-size: center;
`;
export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.popup_B01};
  background-color: ${({ theme }) => theme.colors.transparent};
  color: ${({ theme }) => theme.colors.White};
  padding: 10px 10px 10px 20px;
  font-size: ${({ theme }) => theme.fontSize.p15};
  @media ${({ theme }) => theme.mediaSize.md} {
    font-size: ${({ theme }) => theme.fontSize.p11};
  }
`;
export const BtnContainer = styled.div`
  width: 103px;
  height: 50px;
  border: 2px solid ${({ theme }) => theme.colors.popup_B01};
  border-radius: 8px;
  display: flex;
  @media ${({ theme }) => theme.mediaSize.sm} {
    width: 120px;
  }
`;
export const Column = styled.button<Props>`
  transition: all 0.5s;
  width: 50%;
  height: 100%;
  position: relative;
  border-radius: 6px 0px 0px 6px;
  background: ${({ isFilter }) =>
    isFilter ? `${theme.colors.popup_B01}` : `${theme.colors.transparent}`};

  cursor: pointer;
  z-index: 5;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-image: url(${column});
    background-position: center;
    background-repeat: no-repeat;
    background-size: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    z-index: -1;
  }
`;
export const Row = styled.button<Props>`
  transition: all 0.5s;
  width: 50%;
  height: 100%;
  position: relative;
  border-radius: 0px 6px 6px 0px;
  cursor: pointer;
  z-index: 5;
  background: ${({ isFilter }) =>
    isFilter ? `${theme.colors.transparent}` : `${theme.colors.popup_B01}`};
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-image: url(${row});
    background-position: center;
    background-repeat: no-repeat;
    background-size: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    z-index: -1;
  }
`;
export const ItemWrap = styled.ul<Props>`
  display: grid;
  width: 100%;
  height: fit-content;
  overflow: hidden;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 25px;
  justify-content: center;
  align-items: center;
  @media ${({ theme }) => theme.mediaSize.xl} {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
  }
  @media ${({ theme }) => theme.mediaSize.lg} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
    gap: 20px;
  }
  ${({ isFilter }) =>
    isFilter &&
    css`
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(1, 1fr);
      grid-gap: 20px;
      @media ${({ theme }) => theme.mediaSize.xl} {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(1, 1fr);
      }
    `}
`;
export const ItemList = styled.div<Props>`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const SkillTitle = styled.div<Props>`
  width: 100%;

  font-size: ${({ theme }) => theme.fontSize.p32};
  color: ${({ theme }) => theme.colors.White};
  font-weight: 700;
  display: flex;
  gap: 20px;
  align-items: center;
  background: ${({ theme }) => theme.colors.input_BOXbg};
  padding: 15px 15px;
  border-radius: 8px;

  @media ${({ theme }) => theme.mediaSize.sm} {
    font-size: ${({ theme }) => theme.fontSize.p25};
  }
`;

export const LogoSpan = styled.span<logoProps>`
  background-image: url(${({ logo }) => logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 48px;
  height: 48px;
  @media ${({ theme }) => theme.mediaSize.sm} {
    width: 30px;
    height: 30px;
  }
`;
export const ItemContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  animation: ${Opacity} 1.5s ease-in-out;
  padding-bottom: 50px;

  @media ${({ theme }) => theme.mediaSize.xs} {
    padding-bottom: 50px;
  }
`;
export const ItemSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
export const FilterSection = styled.div<Props>`
  width: 100%;
  margin-top: -25px;
  color: ${({ theme }) => theme.colors.White};
  font-size: ${({ theme }) => theme.fontSize.p14};
  padding: 20px 0px;
  display: ${({ isFilter }) => (isFilter ? "block" : "none")};
`;
export const FilterList = styled.div<Props>`
  display: flex;
  align-items: center;
  gap: 30px;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  @media ${({ theme }) => theme.mediaSize.sm} {
    justify-content: space-between;
    gap: 8px;
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    flex-direction: column;
    justify-content: space-between;
    font-size: ${({ theme }) => theme.fontSize.p16};
  }
`;
export const FilterItem = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  @media ${({ theme }) => theme.mediaSize.sm} {
    justify-content: flex-start;
    align-items: center;
  }
`;
export const FilterLogo = styled.div<logoProps>`
  width: 14px;
  height: 14px;
  margin-right: -2px;
  background-image: url(${({ logo }) => logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const FilterTitle = styled.div``;
export const FilterCheckBox = styled.div<Props>`
  width: 14px;
  height: 14px;
  border: 1px solid ${({ theme }) => theme.colors.popup_B01};
  cursor: pointer;

  background-image: url(${({ isClick }) => (isClick ? `${check}` : "")});
  background-position: center;
  background-repeat: no-repeat;
  background-size: center;
`;
export const FoldText = styled.div<Props>`
  margin-bottom: 10px;
  height: 100%;
  height: ${({ isClick }) => (isClick ? "0" : "100%")};
  text-indent: ${({ isClick }) => (isClick ? "-99999px" : "0")};
`;
