import React from "react";

import theme from "./assets/theme/theme";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./assets/theme/global-style";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot, useRecoilState } from "recoil";
import MainHome from "./pages/mainhome/MainHome";
import { useEffect } from "react";
import Collection from "./pages/collection/Collection";
import ExploreGnb from "./Component/gnb/ExploreGnb";
import Gaside from "./Component/aside/Gaside";
import Footer from "./Component/footer/Footer";
import { useLocation } from "react-router-dom";
import Gnb from "./Component/gnb/Gnb";
import { locationState } from "./atom/atom";
import WhichGnb from "./Component/gnb/WhichGnb";
function App() {
  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Tab") {
        event.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <RecoilRoot>
          <WhichGnb />
          <Gaside />
          <Routes>
            <Route path="/" element={<MainHome />} />
            <Route path="/collection" element={<Collection />} />
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
