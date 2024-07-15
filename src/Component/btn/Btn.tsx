import React from "react";
import StyledBtn from "./StlyeBtn";
import { Link } from "react-router-dom";

type Size = "p15" | "p14" | "p15t" | "p15c" | "p20t" | "p15l";
export type Props = {
  size?: Size;
  bgColor: string;
  text: string;
  onClick?: () => void | undefined;
  linkto?: string | any;
};

const Btn = ({ size, bgColor, text, onClick, linkto }: Props) => {
  return (
    <Link to={linkto} onClick={onClick}>
      <StyledBtn size={size} bgColor={bgColor}>
        {text}
      </StyledBtn>
    </Link>
  );
};

export default Btn;
