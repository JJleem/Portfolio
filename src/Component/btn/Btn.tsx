import React from "react";
import StyledBtn from "./StlyeBtn";

type Size = "p15" | "p14" | "p15t" | "p15c" | "p20t" | "p15l";
export type Props = {
  size?: Size;
  bgColor: string;
  text: string;
  onClick?: () => void;
};

const Btn = ({ size, bgColor, text, onClick }: Props) => {
  return (
    <StyledBtn size={size} bgColor={bgColor} onClick={onClick}>
      {text}
    </StyledBtn>
  );
};

export default Btn;
