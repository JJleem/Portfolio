import styled from "styled-components";
import emptyheart from "../../assets/img/icon/emptyheart.png";
import fillheart from "../../assets/img/icon/filledheart.png";
type Props = {
  isClick?: boolean;
  img?: string;
};
export const StyleDetail = styled.div`
  width: 100vw;
  height: 100vh;
`;
export const DetailWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
export const TopSection = styled.div`
  width: 100%;
  height: 128px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.nav_BG};
`;
export const BottomSection = styled.div`
  width: 100%;
  height: 100%;

  padding: 0 35px;
  display: flex;
  gap: 20px;
`;
export const ImgWrap = styled.div`
  border: 1px solid #f00;
  width: 45%;
  height: 100%;
`;
export const ImgHeader = styled.div`
  width: 100%;
  height: 45px;
  background: ${({ theme }) => theme.colors.nav_BG};
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 10px;
`;
export const HeartLogo = styled.div<Props>`
  transition: all 0.5s;
  background-image: url(${(props) => (props.isClick ? fillheart : emptyheart)});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 24px;
  height: 24px;

  cursor: pointer;
  display: block;
`;

export const ImgSection = styled.div<Props>``;
export const DescWrap = styled.div`
  width: 55%;
  height: 100%;
  border: 1px solid #f0f;
`;
