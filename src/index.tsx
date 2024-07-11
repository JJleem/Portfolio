import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./assets/theme/global-style";
import App from "./App";
import { ThemeProvider } from "styled-components";
import theme from "./assets/theme/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  </ThemeProvider>
);
