import styled from "styled-components";
import videoplatform from "../../assets/img/item/videoplatform.png";
export const ProjectWrap = styled.div`
  width: 1220px;
  height: 570px;
  border-radius: 20px;
  padding: 50px 50px 50px 50px;
  background: ${({ theme }) => theme.colors.BG_MainBox};
`;
export const Inner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  gap: 50px;
`;
export const DescWrap = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const ImgWrap = styled.div`
  width: 50%;
  height: 100%;
  background: url(${videoplatform});
  background-position: top;
  background-size: center;
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
`;
export const ItemWrap = styled.div`
  width: 100%;
  height: 100%;

  gap: 22px;
  display: flex;
  flex-direction: column;
`;
export const ItemList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  flex: 1;
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
`;
export const ItemTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.p18};
  color: ${({ theme }) => theme.colors.secondary_V};
`;
export const ItemDesc = styled.span``;
export const LogoList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
export const Logo = styled.div`
  width: 25px;
  height: 25px;
  background: #000;
`;
