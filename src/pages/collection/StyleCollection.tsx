import styled from "styled-components";
import more from "../../assets/img/icon/expand_more.png";
import theme from "../../assets/theme/theme";
type Props = {
  isClick?: boolean;
};

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
export const Section = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const TopCover = styled.div`
  width: 100%;
  height: 700px;
  background: ${({ theme }) => theme.colors.login_BOXline};
`;
export const BottomCover = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 35px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 58px;
`;
export const Profile = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 15px;
  border: 6px solid #000;
  position: absolute;
  background: ${({ theme }) => theme.colors.line};
  top: -157px;
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
`;
export const LogoContainer = styled.div``;
export const Logo = styled.div``;
export const SearchInput = styled.input``;
