import styled, { css } from "styled-components";
import more from "../../assets/img/icon/expand_more.png";
import theme from "../../assets/theme/theme";
import filter from "../../assets/img/icon/filter_list.png";
import column from "../../assets/img/icon/column.png";
import row from "../../assets/img/icon/row.png";
import ts from "../../assets/img/skill/Typescript.png";
import check from "../../assets/img/icon/check.png";
type Props = {
  isClick?: boolean;
  isFilter?: boolean;
};
type logoProps = {
  logo?: string;
};

export const Container = styled.div`
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
  height: 430px;
  background: ${({ theme }) => theme.colors.login_BOXline};
  @media ${({ theme }) => theme.mediaSize.sm} {
    height: 284px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    height: 244px;
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
  border: 6px solid #000;
  position: absolute;
  background: ${({ theme }) => theme.colors.line};
  top: -157px;
  @media ${({ theme }) => theme.mediaSize.sm} {
    width: 124px;
    height: 124px;
    top: -97px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    width: 88px;
    height: 88px;
    top: -67px;
  }
`;
export const BottomSection = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.White};
  padding: 45px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  gap: 5px;
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
  margin-bottom: 20px;
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
  transform: ${({ isClick }) => (isClick ? "rotate(180deg)" : "rotate(0deg)")};
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
  span {
    font-size: ${({ theme }) => theme.fontSize.p15};
    color: ${({ theme }) => theme.colors.datatitle};
  }
  p {
    font-size: ${({ theme }) => theme.fontSize.p22};
  }
`;
export const TabList = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.popup_B01};
  display: flex;
  align-items: center;
  gap: 48px;
`;
export const Tab = styled.div<Props>`
  padding-bottom: 13px;

  color: ${({ isClick }) =>
    isClick ? `${theme.colors.White}` : `${theme.colors.datatitle}`};
  border-bottom: ${({ isClick }) =>
    isClick ? ` 3px solid ${theme.colors.line}` : ``};
  font-size: ${({ theme }) => theme.fontSize.p17};

  cursor: pointer;
`;
export const InputWrap = styled.div`
  display: flex;
  width: 100%;

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

  span {
    background-image: url(${ts});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 48px;
    height: 48px;
  }

  @media ${({ theme }) => theme.mediaSize.sm} {
    font-size: ${({ theme }) => theme.fontSize.p25};
    span {
      width: 30px;
      height: 30px;
    }
  }
`;
export const ItemContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
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
