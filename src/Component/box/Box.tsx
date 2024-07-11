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
  TextSkill,
  TextWrap,
} from "./StyleBox";
import { Link } from "react-router-dom";

type ItemProps = {
  itemImg: string;
  transition?: string;
  skill: string;
};
const Box = ({ itemImg, transition, skill }: ItemProps) => {
  return (
    <StyleBox>
      <ImgWrap itemImg={itemImg} transition={transition} />
      <DescWrap>
        <TextWrap>
          <TextSkill skill={skill} />
          비디오 플랫폼
        </TextWrap>
        <InfoBtn className="Info">
          <InfoItem>
            <InfoLink to="/">Detail</InfoLink>
          </InfoItem>
          <Hr />
          <InfoItem>
            <InfoLink to="/">
              <Github />
              Github
            </InfoLink>
          </InfoItem>
        </InfoBtn>
      </DescWrap>
    </StyleBox>
  );
};

export default Box;
