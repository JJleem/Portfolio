import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

  @font-face {
  font-family: "Pretendard GOV";
  font-weight: 400;
  font-style: normal;
  src:  url("../fonts/PretendardGOV-Regular.subset.woff")
    format("woff");
}

/* Medium */
@font-face {
  font-family: "Pretendard GOV";
  font-weight: 500;
  font-style: normal;
  src:  url("../fonts/PretendardGOV-Medium.subset.woff")
    format("woff");
}

/* Bold */
@font-face {
  font-family: "Pretendard GOV";
  font-weight: 700;
  font-style: normal;
  src:  url("../fonts/PretendardGOV-Bold.subset.woff")
    format("woff");
}

  * {
  font-family: "Pretendard GOV", sans-serif ;
  }
  body,
div,
p,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
li,
dl,
dt,
dd,
table,
th,
td,
form,
fieldset,
legend,
input,
textarea,
a,
button,
select,
ul,
li,
span,
em,
label,
:before,
:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-text-size-adjust: none;
    font-family: inherit;
    line-height: 1.5;
    letter-spacing: inherit;
}
input[type='text'],
input[type='tel'],
input[type='password'],
input[type='file'],
input[type='number'],
input[type='email'],
input[type='date'],
input[type='search'],
textarea {
    -webkit-box-shadow: none;
    box-shadow: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -webkit-tap-highlight-color: transparent;
}
button {
    cursor: pointer;
    border: none;
    outline:none;
    color:${({ theme }) => theme.colors.White}
    
}
&::-webkit-scrollbar {
      /** 스크롤바의 너비 */
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      /** 스크롤바 길이 */
      height: 25%;
      /** 스크롤바의 색상 */
      border:  1px solid ${({ theme }) => theme.colors.White};
      background: transparent;
      border-radius: 10px;
  
    }
    &::-webkit-scrollbar-track {
      /** 스크롤바 뒷 배경 색상 */
      background: transparent;
    }
`;
