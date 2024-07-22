import styled from "styled-components";
export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: fit-content;
  padding-bottom: 180px;
`;
export const DirectoryBox = styled.div`
  width: 100%;

  padding: 0 35px;
  padding-top: 73px;
`;
export const DirectorySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  color: ${({ theme }) => theme.colors.White};
`;
export const DirectoryWrap = styled.div`
  display: flex;
  gap: 22px;
  @media ${({ theme }) => theme.mediaSize.sm} {
    flex-direction: column-reverse;
  }
`;
export const DirectoryTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.secondary_V};
  padding: 40px 20px;
  width: 30%;
  background: ${({ theme }) => theme.colors.login_BGBOX};
  @media ${({ theme }) => theme.mediaSize.sm} {
    width: 100%;
  }
`;
export const DirectoryDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  border: 1px solid ${({ theme }) => theme.colors.secondary_V};
  padding: 40px 20px;
  width: 100%;
  height: fit-content;
  background: ${({ theme }) => theme.colors.login_BGBOX};
  @media ${({ theme }) => theme.mediaSize.sm} {
    width: 100%;
  }
`;
export const DirectoryDescSub = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  border: 1px dashed ${({ theme }) => theme.colors.secondary_V};
  padding: 20px 20px;
  width: 100%;
  height: fit-content;
  background: ${({ theme }) => theme.colors.nav_BG};
  @media ${({ theme }) => theme.mediaSize.sm} {
    width: 100%;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  li {
    list-style: inside number;
    font-size: ${({ theme }) => theme.fontSize.p14};
    span {
      font-weight: 900;
      font-size: ${({ theme }) => theme.fontSize.p17};
    }
  }
`;
export const DirectoryDescContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 22px;
  justify-content: start;
  align-items: center;
  @media ${({ theme }) => theme.mediaSize.sm} {
    width: 100%;
  }
`;
export const LogoContainer = styled.div`
  height: 100%;

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DirectoryTItle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.p30};
  font-weight: 700;
`;
export const DirectoryGoback = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.login_BOXline};
  padding: 8px 0px;
`;
export const DirectorySub = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  li {
    list-style: inside number;
    span {
      font-weight: 900;
      font-size: ${({ theme }) => theme.fontSize.p20};
    }
  }
`;
