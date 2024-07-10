import React from "react";
import styled from "styled-components";
import theme from "./assets/theme/theme";
import Btn from "./Component/btn/Btn";
import Gnb from "./Component/gnb/Gnb";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "300vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#999",
        gap: "30px",
      }}
    >
      <Gnb />
      <Btn bgColor={theme.colors.primary_V} size="p15" text="Button" />
      <Btn bgColor={theme.colors.primary_V} size="p14" text="Connect" />
      <Btn bgColor={theme.colors.transparent} size="p15t" text="Button" />
      <Btn bgColor={theme.colors.primary_V} size="p15c" text="CONNECT WALLET" />
      <Btn bgColor={theme.colors.transparent} size="p20t" text="COMMING SOON" />
    </div>
  );
}

export default App;
