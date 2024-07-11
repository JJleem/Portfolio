import React from "react";
import StyledBtn from "./StlyeBtn";
import a from "../../assets/img/icon/arrow_forward.png";

type Size = "p15" | "p14" | "p15t" | "p15c" | "p20t" | "2xl";
export type Props = {
  size?: Size;
  bgColor: string;
  text: string;
};

const Btn = ({ size, bgColor, text }: Props) => {
  return (
    <StyledBtn size={size} bgColor={bgColor}>
      {text}
    </StyledBtn>
  );
};

export default Btn;
