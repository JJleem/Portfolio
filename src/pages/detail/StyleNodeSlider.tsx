import styled from "styled-components";
type Props = {
  imgs?: string;
};
export const SliderContainer = styled.div`
  width: 50%;
  height: 750px;
  div {
    height: 100%;
    width: 100%;
  }
  .slick-dots {
    bottom: 0px;
  }

  .slick-dots li {
    margin: 0 5px;
  }

  .slick-dots li button {
    border: none;
    background: transparent;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.popup_B01};
    transition: background-color 0.3s; /* 색상 변경 시 애니메이션 효과 */
    &::before {
      content: "";
    }
  }

  /* 활성화된 dot 스타일 */
  .slick-dots li.slick-active button {
    background-color: ${({ theme }) =>
      theme.colors.primary_V}; /* 활성화된 dot 색상 */
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    width: 100%;
    height: 400px;
    .slick-dots {
      bottom: 3px;
    }
    .slick-dots li {
      width: 10px;
      height: 10px;
      margin: 0 5px;
    }
    .slick-dots li button {
      border: none;
      background: transparent;
      width: 3px;
      height: 3px;
      border-radius: 50%;

      background-color: ${({ theme }) => theme.colors.popup_B01};
      transition: background-color 0.3s; /* 색상 변경 시 애니메이션 효과 */
      &::before {
        content: "";

        width: 8px;
      }
    }
  }
`;
export const SliderContent = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
export const NodeImgSection = styled.div<Props>`
  width: 100%;
  height: 650px !important;
  background: url(${({ imgs }) => imgs});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border: 1px solid ${({ theme }) => theme.colors.popup_B01};
  @media ${({ theme }) => theme.mediaSize.xs} {
    background-size: contain;
    height: 300px;
  }
`;
export const SliderSub = styled.div`
  width: 100%;
  height: 100px !important;
  font-size: ${({ theme }) => theme.fontSize.p19};
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.inputFill};
  color: White;
  border: 1px solid ${({ theme }) => theme.colors.popup_B01};
  padding-bottom: 10px;
  border-radius: 0px 0px 8px 8px;
  @media ${({ theme }) => theme.mediaSize.md} {
    font-size: ${({ theme }) => theme.fontSize.p15};
  }
`;
