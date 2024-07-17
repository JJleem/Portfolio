import styled from "styled-components";

type Props = {
  logo?: string;
};

export const ActivityWrapper = styled.div`
  display: flex;
  @media ${({ theme }) => theme.mediaSize.lg} {
    flex-direction: column;
  }
`;
export const ActivityInner = styled.div`
  width: 100%;
  height: 100%;

  padding: 0px 0 40px 0px;
  display: flex;
  flex-direction: column;
  /* gap: 20px; */

  @media ${({ theme }) => theme.mediaSize.lg} {
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
  }
`;
export const ActivityTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.p16};
  color: ${({ theme }) => theme.colors.White};
  border-bottom: 1px solid ${({ theme }) => theme.colors.login_BOXline};
  border-top: 1px solid ${({ theme }) => theme.colors.login_BOXline};
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 30px;
  transition: color 0.5s;
  background: ${({ theme }) => theme.colors.input_BOXbg};
  &:hover {
    color: ${({ theme }) => theme.colors.primary_V};
  }
`;
export const ActivitySection = styled.div`
  width: 100%;
  padding: 20px 30px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.login_BOXline};
  transition: background 0.5s;
  &:hover {
    background: ${({ theme }) => theme.colors.input_BOXbg};
  }
`;
export const ActivityType = styled.div`
  font-size: ${({ theme }) => theme.fontSize.p25};
  color: ${({ theme }) => theme.colors.White};
  transition: color 0.5s;
  &:hover {
    color: ${({ theme }) => theme.colors.primary_V};
  }
  &.firstType {
    padding-top: 40px;
  }
`;
export const ActivityText = styled.div<Props>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.White};
  gap: 5px;
  span {
    width: 24px;
    height: 24px;
    background-image: url(${({ logo }) => logo});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  @media ${({ theme }) => theme.mediaSize.lg} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media ${({ theme }) => theme.mediaSize.sm} {
    justify-content: start;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    &.study {
      font-size: ${({ theme }) => theme.fontSize.p12};
      letter-spacing: -1px;
    }
  }
`;
export const ActivityItemSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media ${({ theme }) => theme.mediaSize.lg} {
    flex-direction: column;
  }
`;
export const ActivityItemWraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
