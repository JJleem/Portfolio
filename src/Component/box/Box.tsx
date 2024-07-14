import React from "react";
import {
  DescWrap,
  FilterText,
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
import { useRecoilState } from "recoil";
import { filterState } from "../../atom/atom";
type ItemProps = {
  itemImg: string;
  transition: string;
  skill: string;
  title: string;
  sub: string;
};
const Box = ({ itemImg, transition, skill, title, sub }: ItemProps) => {
  const [filter, setFilter] = useRecoilState(filterState);
  return (
    <StyleBox isFilter={filter}>
      <ImgWrap isFilter={filter} itemImg={itemImg} transition={transition} />
      <DescWrap className="Desc" isFilter={filter}>
        <TextWrap isFilter={filter}>
          {title}
          <TextSkill skill={skill} />
        </TextWrap>
        <SubText isFilter={filter}>{sub}</SubText>
        <FilterText isFilter={filter}>dassssssssas</FilterText>
        <InfoBtn className="Info" isFilter={filter}>
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
