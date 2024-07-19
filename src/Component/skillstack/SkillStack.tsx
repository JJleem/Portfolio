import React from "react";
import {
  ItemContainer,
  ItemSection,
} from "../../pages/collection/StyleCollection";
import {
  SkillInner,
  SkillItem,
  SkillItemlayout,
  SkillSectionlayout,
  SkillStackBox,
  SkillStackContainer,
  SkillStackSection,
} from "./StyleSkillStack";
import ts from "../../assets/img/skill/Typescript.png";
import js from "../../assets/img/skill/JavaScript.png";
import react from "../../assets/img/skill/React.png";
import recoil from "../../assets/img/skill/recoil.png";
import html from "../../assets/img/skill/Html.png";
import css from "../../assets/img/skill/Css.png";
import redux from "../../assets/img/skill/Redux.png";
import hook from "../../assets/img/skill/hookform.png";
import scss from "../../assets/img/skill/Scss.png";
import stylecomponent from "../../assets/img/skill/Styledcomponents.png";
import router from "../../assets/img/skill/Router.png";
import query from "../../assets/img/skill/query.png";
import { useState } from "react";
import { motion } from "framer-motion";
const SkillStack = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleisClicked = () => {
    setIsClicked(!isClicked);
  };
  return (
    <ItemContainer>
      <ItemSection>
        <SkillStackBox isClick={isClicked} onClick={handleisClicked}>
          <SkillStackContainer isClick={isClicked}>
            <SkillStackSection
              animate={{
                backgroundColor: [
                  "rgba(56, 0, 188, 0.5)",
                  "rgba(76, 0, 138, 0.5)",
                  "rgba(0, 0, 0, 0.1)",
                  "rgba(0, 0, 0, 0.3)",
                  "rgba(76, 0, 138, 0.5)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              isClick={isClicked}
            >
              <SkillInner>
                <SkillItem logo={html}></SkillItem>
              </SkillInner>
              <SkillInner>
                <SkillItem logo={css}></SkillItem>
              </SkillInner>
              <SkillInner>
                <SkillItem logo={redux}></SkillItem>
              </SkillInner>
              <SkillInner>
                <SkillItem logo={recoil}></SkillItem>
              </SkillInner>
              <SkillInner>
                <SkillItem logo={hook}></SkillItem>
              </SkillInner>
              <SkillInner>
                <SkillItem logo={scss}></SkillItem>
              </SkillInner>
              <SkillInner>
                <SkillItem logo={stylecomponent}></SkillItem>
              </SkillInner>
              <SkillInner>
                <SkillItem logo={router}></SkillItem>
              </SkillInner>
              <SkillInner>
                <SkillItem logo={query} layoutId="query"></SkillItem>
              </SkillInner>
              <SkillInner>
                <SkillItem logo={react} layoutId="react"></SkillItem>
              </SkillInner>
              <SkillInner>
                <SkillItem logo={js} layoutId="js"></SkillItem>
              </SkillInner>
              <SkillInner>
                <SkillItem
                  logo={ts}
                  layoutId="ts"
                  transition={{
                    type: "tween",
                    duration: 1,
                    delay: 0.5, // 0.5초 지연
                  }}
                ></SkillItem>
              </SkillInner>
            </SkillStackSection>
          </SkillStackContainer>
        </SkillStackBox>
        {isClicked && (
          <SkillSectionlayout layout isClick={isClicked}>
            <SkillItemlayout
              logo={ts}
              layoutId="ts"
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0, // 0.5초 지연
              }}
            ></SkillItemlayout>
            <SkillItemlayout
              logo={js}
              layoutId="js"
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.2, // 0.5초 지연
              }}
            ></SkillItemlayout>
            <SkillItemlayout logo={react} layoutId="react"></SkillItemlayout>
          </SkillSectionlayout>
        )}
      </ItemSection>
    </ItemContainer>
  );
};

export default SkillStack;
