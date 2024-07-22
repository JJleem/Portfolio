import styled, { css } from "styled-components";
import github from "../../assets/img/skill/Github.png";
import { Link } from "react-router-dom";
import theme from "../../assets/theme/theme";

type ItemProps = {
  itemImg?: string;
  transition?: string;
  skill?: string;
  isFilter?: boolean;
};

export const StyleBox = styled.li<ItemProps>`
  width: 100%;
  height: 100%;
  border-radius: 10px;

  z-index: 2;

  ${({ isFilter }) =>
    isFilter &&
    css`
      display: flex;
    `}

  @media ${({ theme }) => theme.mediaSize.xl} {
    width: 100%;
    height: 100%;
  }
  @media ${({ theme }) => theme.mediaSize.lg} {
    width: 100%;
    height: 100%;
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    width: 100%;
    height: 100%;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    width: 100%;
    height: 100%;
  }
`;
export const ImgWrap = styled.div<ItemProps>`
  background: url(${({ itemImg }) => (itemImg ? `"${itemImg}"` : "")});
  width: 100%;
  height: 290px;
  border-radius: 10px 10px 0px 0px;
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  transition: background-position
    ${({ transition }) => transition && `${transition}`}s;
  ${({ isFilter }) =>
    isFilter &&
    css`
      width: 50%;
      border-radius: 10px 0px 0px 10px;
    `}
  cursor: pointer;
  &:hover {
    background-position: bottom;
    + .Desc {
      .Info {
        bottom: 0;
      }
    }
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    &:hover {
      background-position: top;
    }
  }
`;
export const DescWrap = styled.div<ItemProps>`
  width: 100%;
  height: 120px;
  border-radius: 0px 0px 10px 10px;
  background: ${({ theme }) => theme.colors.input_BOXbg};
  padding: 15px 15px 40px 15px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 5px;
  ${({ isFilter }) =>
    isFilter &&
    css`
      height: 100%;
      border-radius: 0px 10px 10px 10px;
    `}
  &:hover {
    .Info {
      bottom: 0px;
    }
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    .Info {
      bottom: 0px;
    }
  }
`;
export const TextWrap = styled.div<ItemProps>`
  width: 100%;
  height: fit-content;
  font-size: ${({ isFilter }) =>
    isFilter ? `${theme.fontSize.p30}` : `${theme.fontSize.p19}`};
  color: ${({ theme }) => theme.colors.White};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: start;
  position: relative;
  gap: 10px;
  @media ${({ theme }) => theme.mediaSize.sm} {
    font-size: ${({ isFilter }) =>
      isFilter ? `${theme.fontSize.p22}` : `${theme.fontSize.p19}`};
  }
`;
export const SubText = styled.div<ItemProps>`
  ${({ isFilter }) =>
    isFilter &&
    css`
      font-size: ${({ theme }) => theme.fontSize.p30};
    `}
  font-size: ${({ isFilter }) =>
    isFilter ? `${theme.fontSize.p20}` : `${theme.fontSize.p12}`};
  color: ${({ theme }) => theme.colors.secondary_V};
  @media ${({ theme }) => theme.mediaSize.sm} {
    font-size: ${({ isFilter }) =>
      isFilter ? `${theme.fontSize.p12}` : `${theme.fontSize.p12}`};
  }
`;
export const TextSkill = styled.div<ItemProps>`
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-image: url(${({ skill }) => (skill ? `"${skill}"` : "")});
  width: 19px;
  height: 19px;
`;
export const FilterText = styled.div<ItemProps>`
  display: ${({ isFilter }) => (isFilter ? "block" : "none")};
  color: ${({ theme }) => theme.colors.secondary_V};
  font-size: ${({ theme }) => theme.fontSize.p17};
  @media ${({ theme }) => theme.mediaSize.sm} {
    font-size: ${({ theme }) => theme.fontSize.p14};
  }
`;
export const InfoBtn = styled.div<ItemProps>`
  width: 100%;
  height: 30px;
  ${({ isFilter }) =>
    isFilter &&
    css`
      height: 40px;
    `}
  border-radius: 0px 0px 10px 10px;
  background: ${({ theme }) => theme.colors.primary_V};
  position: absolute;
  left: 0;
  bottom: -40px;
  transition: all 0.5s;
  display: flex;
  align-items: center;
`;
export const Hr = styled.div`
  width: 1px;
  height: 100%;
  background: ${({ theme }) => theme.colors.line};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
export const InfoItem = styled.div`
  width: 50%;

  color: ${({ theme }) => theme.colors.White};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.p15};
`;
export const Github = styled.span`
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-image: url(${github});
  width: 18px;
  height: 18px;
`;
export const InfoLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;
