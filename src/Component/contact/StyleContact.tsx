import styled from "styled-components";
import check from "../../assets/img/icon/check_circle.png";
import checkred from "../../assets/img/icon/checkred.png";
import { Opacity } from "../../pages/collection/StyleCollection";
import JJ from "../../assets/img/bg/JJ.png";
type errorProps = {
  errors?: any | undefined;
};
export const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  span {
    color: ${({ theme }) => theme.colors.Point_Red};
  }
`;
export const Button = styled.button`
  width: 100px;
  border-radius: 8px;
  padding: 10px;
  background: ${({ theme }) => theme.colors.primary_V};
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #fff;
  gap: 20px;

  span {
    height: 30px;
  }
`;
export const Name = styled.div<errorProps>`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;
  label {
    width: 100%;

    display: flex;
    gap: 5px;
    span {
      width: 24px;
      height: 24px;
      background-image: url(${({ errors }) => (errors ? checkred : check)});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
`;
export const Email = styled.div<errorProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  label {
    width: 100%;

    display: flex;
    gap: 5px;
    span {
      width: 24px;
      height: 24px;
      background-image: url(${({ errors }) => (errors ? checkred : check)});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
`;
export const NameEmail = styled.input`
  width: 100%;

  padding: 10px;
  background: ${({ theme }) => theme.colors.inputFill};
  border: 1px solid ${({ theme }) => theme.colors.login_BOXline};
  color: ${({ theme }) => theme.colors.White};
  border-radius: 8px;
`;
export const Message = styled.div<errorProps>`
  display: flex;
  flex-direction: column;
  height: 100%;
  label {
    height: fit-content;
    height: 40px;
  }
  span {
    color: ${({ theme }) => theme.colors.Point_Red};
  }
  label {
    width: 100%;

    display: flex;
    align-items: center;
    gap: 5px;
    span {
      width: 24px;
      height: 24px;
      background-image: url(${({ errors }) => (errors ? checkred : check)});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
`;
export const Textarea = styled.textarea`
  width: 100%;
  border-radius: 8px;
  padding: 10px;
  height: 200px;
  margin-bottom: 15px;
  background: ${({ theme }) => theme.colors.inputFill};
  border: 1px solid ${({ theme }) => theme.colors.login_BOXline};
  color: ${({ theme }) => theme.colors.White};
`;
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.p17};
  padding-bottom: 100px;

  position: relative;
`;
export const ProfileContact = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 15px;
  border: 3px solid #000;
  background-image: url(${JJ});
  background-color: ${({ theme }) => theme.colors.nav_BG};
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;

  @media ${({ theme }) => theme.mediaSize.sm} {
    width: 124px;
    height: 124px;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    width: 88px;
    height: 88px;
  }
`;
export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.p45};
  span {
    font-size: ${({ theme }) => theme.fontSize.p20};
    color: ${({ theme }) => theme.colors.line};
  }
`;
export const FormWrapper = styled.div`
  width: 660px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalContent = styled.div`
  font-size: ${({ theme }) => theme.fontSize.p17};
  color: ${({ theme }) => theme.colors.White};
  background: ${({ theme }) => theme.colors.nav_BG};
  border-radius: 8px;
  position: absolute;
  bottom: 30px;
  right: 30px;
  padding: 10px 12px;
  animation: ${Opacity} 1.5s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  span {
    width: 24px;
    height: 24px;
    background-image: url(${check});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media ${({ theme }) => theme.mediaSize.xs} {
    font-size: ${({ theme }) => theme.fontSize.p12};
  }
`;
