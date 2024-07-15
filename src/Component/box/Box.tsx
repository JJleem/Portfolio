/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import {
  DescWrap,
  Github,
  Hr,
  ImgWrap,
  Info,
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
import { useNavigate } from "react-router-dom";
type ItemProps = {
  itemImg: string;
  transition: string;
  skill: string;
  title: string;
  sub: string;
  linkto?: string | any;
  github?: string | any;
  go: number;
};
const Box = ({
  itemImg,
  transition,
  skill,
  title,
  sub,
  linkto,
  github,
  go,
}: ItemProps) => {
  const [filter, setFilter] = useRecoilState(filterState);
  const navigate = useNavigate();
  const goItem = (itemId: number) => {
    navigate(`/collection/${itemId}`);
  };

  return (
    <StyleBox isFilter={filter}>
      <ImgWrap
        isFilter={filter}
        itemImg={itemImg}
        transition={transition}
        onClick={() => goItem(go)}
      />
      <DescWrap className="Desc" isFilter={filter}>
        <TextWrap isFilter={filter}>
          {title}
          <TextSkill skill={skill} />
        </TextWrap>
        <SubText isFilter={filter}>{sub}</SubText>

        <InfoBtn className="Info" isFilter={filter}>
          <InfoItem>
            <Info onClick={() => goItem(go)}>Detail</Info>
          </InfoItem>
          <Hr />
          <InfoItem>
            <InfoLink to={github} target="_blank">
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
