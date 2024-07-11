import React from "react";
import styled from "styled-components";
import theme from "./assets/theme/theme";
import Btn from "./Component/btn/Btn";
import Gnb from "./Component/gnb/Gnb";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./assets/theme/global-style";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import MainHome from "./pages/mainhome/MainHome";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <RecoilRoot>
          <Routes>
            <Route path="/" element={<MainHome />} />
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
