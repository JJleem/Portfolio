import { css } from "styled-components";

/** 자주 사용하는 색상들 */
// const colors = {
//   slate50: "#f8fafc",
//   slate100: "#f1f5f9",
//   slate200: "#e2e8f0",
//   slate300: "#cbd5e1",
//   slate400: "#94a3b8",
//   slate500: "#64748b",
//   slate600: "#475569",
//   slate700: "#334155",
//   slate800: "#1e293b",
//   slate900: "#0f172a",
//   /* 나머지 색상들 생략 ( https://tailwindcss.com/docs/customizing-colors ) */

//   main50: "#eef2ff",
//   main100: "#e0e7ff",
//   main200: "#c7d2fe",
//   main300: "#a5b4fc",
//   main400: "#818cf8",
//   main500: "#6366f1",
//   main600: "#4f46e5",
//   main700: "#4338ca",
//   main800: "#3730a3",
//   main900: "#312e81",

//   /* 아래 부분을 비워둔 이유는 타입때문 ( "<ThemeProvider>"에서 조건에 따라 다르게 값을 채움 ) */
//   color: "",
//   bgColor: "",
//   gray: "",
// };

/** 검정 배경 */
export const darkTheme = {
  color: "#000000",
  bgColor: "#FFFFFF",
  gray: "#343434",
};
/** 흰색 배경 */
export const lightTheme = {
  color: "#FFFFFF",
  bgColor: "#000000",
  gray: "#D9D9D9",
};

/** 반응형 사이즈 */
const mediaSize = {
  xs: "screen and (max-width: 428px)",
  sm: "screen and (max-width: 744px)",
  md: "screen and (max-width: 1024px)",
  lg: "screen and (max-width: 1280px)",
  xl: "screen and (max-width: 1440px)",
  "2xl": "screen and (max-width: 1536px)",
};

/** 폰트 크기 */
const fontSize = {
  p15: "15px",
  p14: "14px",
  p19: "19px",
  p20: "20px",
  p22: "22px",
  "2xl": "1.5rem",
};

/** 그 외의 크기 */
const size = {
  xs: "0.2em",
  sm: "0.4em",
  md: "0.6em",
  lg: "1em",
  xl: "1.4em",
  "2xl": "1.6em",
};

const colors = {
  White: "#FFFFFF",
  Text_Gray: "#c4c4d3",
  secondary_V: "#a796ff",
  primary_V: "#6F36FF",
  Point_Red: "#E0002B",
  Black: "#0A0212",
  BG_V: "#141225",
  BG_MainBox: "#2D2A5C",
  login_BGBOX: "#19182F",
  input_BOXbg: "#2C273F",
  login_BOXline: "#4F4B67",
  mocup_bg: "#ECECEC",
  mocup_line: "#D1D1D1",
  mocup_text: "#929292",
  transparent: "transparent",
  popup_B01: "#4F4B67",
};

const theme = {
  colors,
  mediaSize,
  fontSize,
  size,
};

export default theme;

/** 타입 재정의를 위함 ( "styled-components" 변수 타입 추론을 위함( 자동완성 ) ) */
export type Theme = typeof theme;
