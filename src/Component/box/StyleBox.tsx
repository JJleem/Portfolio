import styled from "styled-components";
import vidieoplatform from "../../assets/img/item/videoplatform.png";
import github from "../../assets/img/skill/Github.png";
import { Link } from "react-router-dom";

type ItemProps = {
  itemImg?: string;
  transition?: string;
  skill?: string;
};

export const StyleBox = styled.li`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transition: all 0.5s;
  z-index: 2;

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
  transition: all ${({ transition }) => transition && `${transition}`}s;
  cursor: pointer;
  &:hover {
    background-position: bottom;
  }
`;
export const DescWrap = styled.div`
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
  &:hover {
    .Info {
      bottom: 0px;
    }
  }
`;
export const TextWrap = styled.div<ItemProps>`
  width: 100%;
  height: fit-content;

  color: ${({ theme }) => theme.colors.White};
  font-size: ${({ theme }) => theme.fontSize.p19};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: start;
  position: relative;
  gap: 10px;
`;
export const SubText = styled.div<ItemProps>`
  font-size: ${({ theme }) => theme.fontSize.p13};
  color: ${({ theme }) => theme.colors.secondary_V};
`;
export const TextSkill = styled.div<ItemProps>`
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-image: url(${({ skill }) => (skill ? `"${skill}"` : "")});
  width: 19px;
  height: 19px;
`;
export const InfoBtn = styled.div`
  width: 100%;
  height: 38px;
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
