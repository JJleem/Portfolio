import React from "react";
import ExploreGnb from "./ExploreGnb";
import Gnb from "./Gnb";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { locationState } from "../../atom/atom";
import { useLocation } from "react-router-dom";
const WhichGnb = () => {
  const location = useLocation();
  const [locationGnb, setLocationGnb] = useRecoilState(locationState);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === "/") {
      setLocationGnb(!locationGnb);
    } else if (location.pathname === "/collection") setLocationGnb(locationGnb);
  }, [location.pathname]);
  return <>{location.pathname === "/" ? <ExploreGnb /> : <Gnb />}</>;
};

export default WhichGnb;
