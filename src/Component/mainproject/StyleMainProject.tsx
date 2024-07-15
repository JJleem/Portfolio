import styled from "styled-components";

type LogoProps = {
  skill?: string;
  img?: string;
};
export const ProjectWrap = styled.div`
  width: 1220px;
  height: 570px;
  border-radius: 20px;
  padding: 50px 50px 50px 50px;
  background: ${({ theme }) => theme.colors.BG_MainBox};
  @media ${({ theme }) => theme.mediaSize.xl} {
    width: 1060px;
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    width: 804px;
    height: 430px;
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    padding: 30px;
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    width: 544px;
    height: 1007px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    width: 372px;
    height: 1052px;
  }
`;
export const Inner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  @media ${({ theme }) => theme.mediaSize.sm} {
    flex-direction: column-reverse;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    gap: 10px;
  }
`;
export const DescWrap = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;

  gap: 30px;
  @media ${({ theme }) => theme.mediaSize.md} {
    gap: 17px;
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    width: 100%;
  }
`;
export const ImgWrap = styled.div<LogoProps>`
  width: 100%;
  height: 100%;
  background: url(${({ img }) => `${img}`});
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
`;
export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize.p28};
  span {
    font-size: ${({ theme }) => theme.fontSize.p14};
    color: ${({ theme }) => theme.colors.Text_Gray};
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    font-size: ${({ theme }) => theme.fontSize.p24};
    span {
      font-size: ${({ theme }) => theme.fontSize.p12};
    }
  }

  @media ${({ theme }) => theme.mediaSize.xs} {
    display: none;
  }
`;
export const HidTitleWrap = styled.div`
  display: none;
  @media ${({ theme }) => theme.mediaSize.xs} {
    display: flex;
    flex-direction: column;
    text-align: left;
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.p32};
    span {
      font-size: ${({ theme }) => theme.fontSize.p18};
      color: ${({ theme }) => theme.colors.Text_Gray};
    }
  }
`;

export const ImageSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-direction: column;

  border-radius: 20px;
  @media ${({ theme }) => theme.mediaSize.xs} {
    gap: 22px;
    width: 100%;
    height: 50%;
    justify-content: space-between;
    align-items: start;
    flex-direction: column;
  }
`;
export const ItemWrap = styled.div`
  width: 100%;
  height: 100%;

  gap: 22px;
  display: flex;
  flex-direction: column;
  @media ${({ theme }) => theme.mediaSize.md} {
    gap: 14px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    gap: 22px;
  }
`;
export const ItemList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;
export const Item = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mainLine};
  padding: 12px 0;
  span {
    font-weight: 200;
  }
  &:nth-of-type(1) {
    span {
      font-weight: 700;
    }
  }
  &:nth-of-type(2) {
    span {
      font-weight: 700;
    }
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    padding: 9px 0;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 5px;
  }
`;
export const ItemTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.p18};
  color: ${({ theme }) => theme.colors.secondary_V};
  @media ${({ theme }) => theme.mediaSize.md} {
    font-size: ${({ theme }) => theme.fontSize.p14};
  }
`;
export const ItemDesc = styled.span`
  word-spacing: -2px;
  font-size: ${({ theme }) => theme.fontSize.p14};
  @media ${({ theme }) => theme.mediaSize.md} {
    font-size: ${({ theme }) => theme.fontSize.p14};
  }
`;
export const LogoList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
export const Logo = styled.div<LogoProps>`
  display: flex;
  width: 25px;
  height: 25px;
  background: url(${({ skill }) => `${skill}`});

  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;
