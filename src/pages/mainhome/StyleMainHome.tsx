import styled from "styled-components";
import bg from "../../assets/img/bg/testbg.png";
import mainlogo from "../../assets/img/bg/mainlogo.png";
export const HomeWrapper = styled.div`
  width: 100vw;
  height: 150vh;
  color: ${({ theme }) => theme.colors.White};
  position: relative;
`;
export const BgWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: url(${bg});
  background-position: top;
  background-size: center;
  background-repeat: no-repeat;
`;
export const HomeGrid = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 58px;
  flex-direction: column;
`;
export const MainLogo = styled.div`
  width: 200px;
  height: 200px;
  background: url(${mainlogo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
export const MainTitle = styled.div`
  font-size: 80px;

  font-weight: 100;

  span {
    font-weight: 700;
  }
`;
export const SubTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.p11};
  letter-spacing: 10px;
  font-weight: 500;
  margin-bottom: 40px;
`;
export const MainDesc = styled.div`
  font-size: ${({ theme }) => theme.fontSize.p25};
  text-align: center;
  font-weight: 500;
  line-height: 40px;
`;

export const MainInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`;
export const ItemWrapper = styled.div`
  display: flex;
  gap: 7px;
`;
export const MainItem = styled.div`
  width: 238px;
  height: 328px;
  border-radius: 10px;
  background: rgba(10, 6, 33, 0.8);
`;
