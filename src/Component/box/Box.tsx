import React from "react";
import {
  DescWrap,
  Github,
  Hr,
  ImgWrap,
  InfoBtn,
  InfoItem,
  InfoLink,
  StyleBox,
  TextWrap,
} from "./StyleBox";
import { Link } from "react-router-dom";

type ItemProps = {
  itemImg?: string;
  transition?: string;
};
const Box = ({ itemImg, transition }: ItemProps) => {
  return (
    <StyleBox>
      <ImgWrap itemImg={itemImg} transition={transition} />
      <DescWrap>
        <TextWrap>ads</TextWrap>
        <InfoBtn className="Info">
          <InfoItem>
            <InfoLink to="/">Detail</InfoLink>
          </InfoItem>
          <Hr />
          <InfoItem>
            <InfoLink to="/">
              <Github />
              Git hub
            </InfoLink>
          </InfoItem>
        </InfoBtn>
      </DescWrap>
    </StyleBox>
  );
};

export default Box;
