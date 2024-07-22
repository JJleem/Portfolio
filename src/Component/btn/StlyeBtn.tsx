import styled, { css } from "styled-components";
import arrow from "../../assets/img/icon/arrow_forward.png";

import type { Props } from "./Btn";

type StyledProps = Pick<Props, "size" | "bgColor">;

const StyledBtn = styled.div<StyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 6px;
  font-weight: 700;
  transition: all 0.5s linear;
  color: ${({ theme }) => theme.colors.White};
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary_V};
  }

  ${({ size }) => {
    switch (size) {
      case "p15":
        return css`
          width: 128px;
          height: 48px;
          font-size: ${({ theme }) => theme.fontSize.p15};
          &::before {
            content: "";
            width: 24px;
            height: 24px;
            margin-right: 11px;
            background-image: url(${arrow});
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            color: ${({ theme }) => theme.colors.White};
          }
        `;
      case "p14":
        return css`
          width: 138px;
          height: 40px;
          font-size: ${({ theme }) => theme.fontSize.p14};
          &::before {
            content: "";
            width: 24px;
            height: 24px;
            margin-right: 11px;
            background-image: url(${arrow});
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            color: ${({ theme }) => theme.colors.White};
          }
        `;
      case "p15t":
        return css`
          width: 93px;
          height: 48px;
          font-size: ${({ theme }) => theme.fontSize.p15};
          border: 1px solid ${({ theme }) => theme.colors.Text_Gray};
        `;
      case "p15c":
        return css`
          width: 216px;
          height: 42px;
          font-size: ${({ theme }) => theme.fontSize.p15};
          @media ${({ theme }) => theme.mediaSize.md} {
            width: 184px;
            height: 42px;
          }
          @media ${({ theme }) => theme.mediaSize.sm} {
            width: 238px;
            height: 59px;
            font-size: ${({ theme }) => theme.fontSize.p19};
          }
          @media ${({ theme }) => theme.mediaSize.xs} {
            width: 262px;
            height: 59px;
            font-size: ${({ theme }) => theme.fontSize.p19};
          }
        `;
      case "p20t":
        return css`
          width: 231px;
          height: 50px;
          font-size: ${({ theme }) => theme.fontSize.p20};
          color: ${({ theme }) => theme.colors.Text_Gray};
          border-radius: 0;
          border: 1px solid ${({ theme }) => theme.colors.Text_Gray};
          @media ${({ theme }) => theme.mediaSize.md} {
            width: 201px;
            height: 50px;
          }
          @media ${({ theme }) => theme.mediaSize.sm} {
            width: 244px;
            height: 60px;
          }
          @media ${({ theme }) => theme.mediaSize.xs} {
            font-size: ${({ theme }) => theme.fontSize.p22};
          }
        `;
      case "p15l":
        return css`
          width: 100%;
          height: 42px;
          font-size: ${({ theme }) => theme.fontSize.p15};
          color: ${({ theme }) => theme.colors.White};
          border-radius: 6;
          /* border: 1px solid ${({ theme }) => theme.colors.Text_Gray}; */
          @media ${({ theme }) => theme.mediaSize.md} {
          }
          @media ${({ theme }) => theme.mediaSize.sm} {
          }
          @media ${({ theme }) => theme.mediaSize.xs} {
            font-size: ${({ theme }) => theme.fontSize.p19};
          }
        `;
    }
  }}
`;
export default StyledBtn;
