import React from "react";

import theme from "./assets/theme/theme";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./assets/theme/global-style";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import MainHome from "./pages/mainhome/MainHome";
import { useEffect } from "react";
import Collection from "./pages/collection/Collection";

import Gaside from "./Component/aside/Gaside";

import WhichGnb from "./Component/gnb/WhichGnb";
import Detail from "./pages/detail/Detail";
import Directory from "./pages/directory/Directory";
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
            <Route path="/collection/:id" element={<Detail />} />
            <Route path="/directory" element={<Directory />} />
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
