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
  SubText,
  TextSkill,
  TextWrap,
} from "./StyleBox";

type ItemProps = {
  itemImg: string;
  transition: string;
  skill: string;
  title: string;
  sub: string;
};
const Box = ({ itemImg, transition, skill, title, sub }: ItemProps) => {
  return (
    <StyleBox>
      <ImgWrap itemImg={itemImg} transition={transition} />
      <DescWrap>
        <TextWrap>
          {title}
          <TextSkill skill={skill} />
        </TextWrap>
        <SubText>{sub}</SubText>
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
