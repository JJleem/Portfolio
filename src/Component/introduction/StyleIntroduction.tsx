import styled from "styled-components";
import pdf from "../../assets/img/icon/pdf.png";
import download from "../../assets/img/icon/download.png";
import { Link } from "react-router-dom";
type Props = {
  logo?: string;
};
export const LinkSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  width: 40%;
  min-width: 580px;
  flex-direction: column;
  @media ${({ theme }) => theme.mediaSize.sm} {
    min-width: 400px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    min-width: 300px;
  }
`;
export const LinkTitle = styled.div`
  color: ${({ theme }) => theme.colors.White};
  font-size: ${({ theme }) => theme.fontSize.p25};
`;
export const IntroductionInner = styled.div`
  width: 100%;
  height: 100%;

  padding: 40px 0 40px 0px;
  display: flex;
  gap: 20px;
  justify-content: space-around;
  align-items: center;

  @media ${({ theme }) => theme.mediaSize.lg} {
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    padding: 30px 0 40px 0px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    padding: 0px 0 0px 0px;
  }
`;
export const PdfSection = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.secondary_V};
  border-radius: 8px;
  width: 100%;
  height: 100%;
  padding: 20px 30px;
  background: ${({ theme }) => theme.colors.popup_B01};
  color: White;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  @media ${({ theme }) => theme.mediaSize.sm} {
    padding: 10px 20px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    padding: 15px 10px;
  }
`;
export const PdfLogo = styled.div<Props>`
  width: 80px;
  height: 100px;
  background-image: url(${({ logo }) => logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  @media ${({ theme }) => theme.mediaSize.sm} {
    width: 60px;
    height: 80px;
  }
`;
export const PdfText = styled.div`
  @media ${({ theme }) => theme.mediaSize.sm} {
    font-size: ${({ theme }) => theme.fontSize.p12};
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    display: none;
  }
`;
export const PdfDownload = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  transition: all 0.5s;
  padding: 8px;
  &:hover {
    background: ${({ theme }) => theme.colors.primary_V};
    border-radius: 6px;
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    font-size: ${({ theme }) => theme.fontSize.p12};
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    font-size: ${({ theme }) => theme.fontSize.p16};
  }
`;
export const PdfDownloadLogo = styled.div`
  width: 24px;
  height: 20px;
  background-image: url(${download});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  @media ${({ theme }) => theme.mediaSize.sm} {
    width: 20px;
    height: 16px;
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    width: 30px;
    height: 24px;
  }
`;
export const PdfLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  gap: 30px;
  @media ${({ theme }) => theme.mediaSize.sm} {
    gap: 10px;
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    justify-content: space-around;
  }
`;
