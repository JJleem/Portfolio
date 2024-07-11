import theme from "./assets/theme/theme";
import Btn from "./Component/btn/Btn";

import ExploreGnb from "./Component/gnb/ExploreGnb";
import Gaside from "./Component/aside/Gaside";
import Gnb from "./Component/gnb/Gnb";
import Box from "./Component/box/Box";
import vidieoplatform from "./assets/img/item/videoplatform.png";
import login from "./assets/img/item/login.png";
function App() {
  return (
    <>
      <Gaside />
      <div
        style={{
          width: "100%",
          height: "200vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          background: "#141225",
          gap: "30px",
          padding: "0 35px",
        }}
      >
        <Gnb />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            gap: "30px",
          }}
        >
          <Box itemImg={vidieoplatform} transition="3" />
          <Box itemImg={login} transition="1" />
        </div>

        <div
          style={{ width: "100%", height: "300px", background: "#f00" }}
        ></div>
        <Btn bgColor={theme.colors.primary_V} size="p15" text="Button" />
        <Btn bgColor={theme.colors.primary_V} size="p14" text="Connect" />
        <Btn bgColor={theme.colors.transparent} size="p15t" text="Button" />
        <Btn
          bgColor={theme.colors.primary_V}
          size="p15c"
          text="CONNECT WALLET"
        />
        <Btn
          bgColor={theme.colors.transparent}
          size="p20t"
          text="COMMING SOON"
        />
      </div>
    </>
  );
}

export default App;
