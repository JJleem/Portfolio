import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./assets/theme/global-style";
import App from "./App";
import { ThemeProvider } from "styled-components";
import theme from "./assets/theme/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
