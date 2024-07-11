import theme from "./assets/theme/theme";
import Btn from "./Component/btn/Btn";
import ExploreGnb from "./Component/gnb/ExploreGnb";
import Gaside from "./Component/aside/Gaside";
import Gnb from "./Component/gnb/Gnb";
import Box from "./Component/box/Box";
import vidieoplatform from "./assets/img/item/videoplatform.png";
import login from "./assets/img/item/login.png";
import Typescript from "./assets/img/skill/Typescript.png";
import Footer from "./Component/footer/Footer";
function App() {
  return (
    <>
      <Gaside />
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          background: "#141225",
          gap: "30px",
          padding: "0 35px",
          position: "relative",
        }}
      >
        <Gnb />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            height: "100%",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <Box itemImg={vidieoplatform} transition="10" skill={Typescript} />
          <Box itemImg={login} transition="5" skill={Typescript} />
        </div>

        {/* <div
          style={{ width: "100%", height: "300px", background: "#f00" }}
        ></div> */}
        {/* <Btn bgColor={theme.colors.primary_V} size="p15" text="Button" />
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
        /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
