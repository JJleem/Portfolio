import styled from "styled-components";

export const StyleFooter = styled.div`
  width: 100%;
  height: 106px;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.transparent};
  @media ${({ theme }) => theme.mediaSize.sm} {
    height: 180px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    height: 130px;
  }
`;
export const Top = styled.div`
  width: 100%;
  height: 50%;
  max-height: 1%;

  opacity: 0.15;
  z-index: -1;
`;
export const Bottom = styled.div`
  width: 100%;
  height: 50%;
  padding: 0 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  border-top: 1px solid ${({ theme }) => theme.colors.footer_line};
  color: ${({ theme }) => theme.colors.White};
  padding-top: 30px;
  @media ${({ theme }) => theme.mediaSize.sm} {
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    gap: 10px;
  }
`;
export const ListWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 56px;

  @media ${({ theme }) => theme.mediaSize.sm} {
    div {
      display: none;
    }
  }
`;
export const ItemWrap = styled.ul`
  font-size: ${({ theme }) => theme.fontSize.p12};
  display: flex;
  gap: 25px;
  justify-content: center;
  align-items: center;
  li {
    &:last-child {
      color: ${({ theme }) => theme.colors.secondary_V};
    }
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    font-size: ${({ theme }) => theme.fontSize.p15};
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    font-size: ${({ theme }) => theme.fontSize.p16};
    flex-wrap: wrap;
    gap: 10px;

    li {
      margin-right: 15px;
      &:last-child {
        display: block;
      }
    }
  }
`;
export const Copyright = styled.div`
  color: ${({ theme }) => theme.colors.line};
  font-size: ${({ theme }) => theme.fontSize.p11};
  @media ${({ theme }) => theme.mediaSize.sm} {
    font-size: ${({ theme }) => theme.fontSize.p13};
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    font-size: ${({ theme }) => theme.fontSize.p14};
  }
`;
