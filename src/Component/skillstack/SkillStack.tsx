import React from "react";
import {
  ItemContainer,
  ItemSection,
} from "../../pages/collection/StyleCollection";
import {
  Logo,
  LogoDesc,
  ModalSkill,
  SkillInner,
  SkillItem,
  SkillItemlayout,
  SkillSectionlayout,
  SkillStackBox,
  SkillStackContainer,
  SkillStackSection,
  StackInner,
  StackSection,
} from "./StyleSkillStack";
import ts from "../../assets/img/skill/Typescript.png";
import js from "../../assets/img/skill/JavaScript.png";
import react from "../../assets/img/skill/React.png";
import recoil from "../../assets/img/skill/recoilll.png";
import html from "../../assets/img/skill/Html.png";
import css from "../../assets/img/skill/Css.png";
import redux from "../../assets/img/skill/Redux.png";
import hook from "../../assets/img/skill/hookform.png";
import scss from "../../assets/img/skill/Scss.png";
import stylecomponent from "../../assets/img/skill/Styledcomponents.png";
import router from "../../assets/img/skill/Router.png";
import query from "../../assets/img/skill/query.png";
import leaflet from "../../assets/img/skill/Leaflet.png";
import bootstrap from "../../assets/img/skill/bootstrap.png";
import node from "../../assets/img/skill/Node.png";
import swiper from "../../assets/img/skill/swiper.png";
import yup from "../../assets/img/skill/yup.jpg";
import axios from "../../assets/img/skill/axios.png";
import email from "../../assets/img/skill/emailjs.png";
import framer from "../../assets/img/skill/framer.png";
import github from "../../assets/img/skill/Github.png";
import slack from "../../assets/img/skill/Slack.png";
import pug from "../../assets/img/skill/pug.png";
import babel from "../../assets/img/skill/babel.png";
import figma from "../../assets/img/skill/figma.png";
import firebase from "../../assets/img/skill/Firebase.png";

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
        <SkillStackBox isClick={isClicked}>
          <ModalSkill>Skill을 Hover & Click 해 보세요.</ModalSkill>
          <SkillStackContainer isClick={isClicked}>
            <SkillStackSection
              onClick={handleisClicked}
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
                <SkillItem logo={html} layoutId="html"></SkillItem>
              </SkillInner>
              <SkillInner>
                <SkillItem logo={css} layoutId="css"></SkillItem>
              </SkillInner>
              <SkillInner>
                <SkillItem logo={redux} layoutId="redux"></SkillItem>
              </SkillInner>
              <SkillInner>
                <SkillItem logo={recoil} layoutId="recoil"></SkillItem>
              </SkillInner>
              <SkillInner>
                <SkillItem logo={hook} layoutId="hook"></SkillItem>
              </SkillInner>
              <SkillInner>
                <SkillItem logo={scss} layoutId="scss"></SkillItem>
              </SkillInner>
              <SkillInner>
                <SkillItem logo={bootstrap} layoutId="bootstrap"></SkillItem>
              </SkillInner>
              <SkillInner>
                <SkillItem logo={framer} layoutId="framer"></SkillItem>
              </SkillInner>
              <SkillInner>
                <SkillItem logo={email} layoutId="email"></SkillItem>
              </SkillInner>
              <SkillInner>
                <SkillItem logo={axios} layoutId="axios"></SkillItem>
              </SkillInner>
              <SkillInner>
                <SkillItem logo={swiper} layoutId="swiper"></SkillItem>
              </SkillInner>
              <SkillInner>
                <SkillItem logo={yup} layoutId="yup"></SkillItem>
              </SkillInner>
              <SkillInner>
                <SkillItem logo={node} layoutId="node"></SkillItem>
              </SkillInner>
              <SkillInner>
                <SkillItem logo={leaflet} layoutId="leaflet"></SkillItem>
              </SkillInner>
              <SkillInner>
                <SkillItem logo={figma} layoutId="figma"></SkillItem>
              </SkillInner>
              <SkillInner>
                <SkillItem logo={babel} layoutId="babel"></SkillItem>
              </SkillInner>
              <SkillInner>
                <SkillItem logo={pug} layoutId="pug"></SkillItem>
              </SkillInner>
              <SkillInner>
                <SkillItem logo={slack} layoutId="slack"></SkillItem>
              </SkillInner>
              <SkillInner>
                <SkillItem logo={github} layoutId="github"></SkillItem>
              </SkillInner>
              <SkillInner>
                <SkillItem logo={firebase} layoutId="firebase"></SkillItem>
              </SkillInner>
              <SkillInner>
                <SkillItem
                  logo={stylecomponent}
                  layoutId="stylecomponent"
                ></SkillItem>
              </SkillInner>
              <SkillInner>
                <SkillItem logo={router} layoutId="router"></SkillItem>
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
                <SkillItem logo={ts} layoutId="ts"></SkillItem>
              </SkillInner>
            </SkillStackSection>
          </SkillStackContainer>
        </SkillStackBox>
        {isClicked && (
          <SkillSectionlayout layout isClick={isClicked}>
            <StackSection>
              <h1>많이사용해봤어요</h1>
              <StackInner>
                <Logo>
                  <SkillItemlayout
                    logo={ts}
                    layoutId="ts"
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: 0,
                    }}
                  ></SkillItemlayout>
                  <LogoDesc>Typescript</LogoDesc>
                </Logo>

                <Logo>
                  <SkillItemlayout
                    logo={js}
                    layoutId="js"
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: 0.1,
                    }}
                  ></SkillItemlayout>
                  <LogoDesc>Javascript</LogoDesc>
                </Logo>
                <Logo>
                  <SkillItemlayout
                    logo={react}
                    layoutId="react"
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: 0.2,
                    }}
                  ></SkillItemlayout>
                  <LogoDesc>React</LogoDesc>
                </Logo>
                <Logo>
                  <SkillItemlayout
                    logo={router}
                    layoutId="router"
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: 0.3,
                    }}
                  ></SkillItemlayout>
                  <LogoDesc>Router-dom</LogoDesc>
                </Logo>
                <Logo>
                  <SkillItemlayout
                    logo={css}
                    layoutId="css"
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: 0.4,
                    }}
                  ></SkillItemlayout>
                  <LogoDesc>CSS</LogoDesc>
                </Logo>
                <Logo>
                  <SkillItemlayout
                    logo={scss}
                    layoutId="scss"
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: 0.5,
                    }}
                  ></SkillItemlayout>
                  <LogoDesc>SCSS</LogoDesc>
                </Logo>
                <Logo>
                  <SkillItemlayout
                    logo={html}
                    layoutId="html"
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: 0.6,
                    }}
                  ></SkillItemlayout>
                  <LogoDesc>HTML</LogoDesc>
                </Logo>

                <Logo>
                  <SkillItemlayout
                    logo={stylecomponent}
                    layoutId="stylecomponent"
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: 0.7,
                    }}
                  ></SkillItemlayout>
                  <LogoDesc>Stylecomponents</LogoDesc>
                </Logo>
                <Logo>
                  <SkillItemlayout
                    logo={figma}
                    layoutId="figma"
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: 0.8,
                    }}
                  ></SkillItemlayout>
                  <LogoDesc>Figma</LogoDesc>
                </Logo>
                <Logo>
                  <SkillItemlayout
                    logo={github}
                    layoutId="github"
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: 0.9,
                    }}
                  ></SkillItemlayout>
                  <LogoDesc>GitHub</LogoDesc>
                </Logo>
                <Logo>
                  <SkillItemlayout
                    logo={slack}
                    layoutId="slack"
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: 1,
                    }}
                  ></SkillItemlayout>
                  <LogoDesc>SLACK</LogoDesc>
                </Logo>
                <Logo>
                  <SkillItemlayout
                    logo={firebase}
                    layoutId="firebase"
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: 1.1,
                    }}
                  ></SkillItemlayout>
                  <LogoDesc>Firebase</LogoDesc>
                </Logo>
              </StackInner>
            </StackSection>
            <StackSection>
              <h1>사용할줄 알아요</h1>
              <StackInner>
                <Logo>
                  <SkillItemlayout
                    logo={query}
                    layoutId="query"
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: 0,
                    }}
                  ></SkillItemlayout>
                  <LogoDesc>Query</LogoDesc>
                </Logo>

                <Logo>
                  <SkillItemlayout
                    logo={hook}
                    layoutId="hook"
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: 0.1,
                    }}
                  ></SkillItemlayout>
                  <LogoDesc>Hook-form</LogoDesc>
                </Logo>
                <Logo>
                  <SkillItemlayout
                    logo={recoil}
                    layoutId="recoil"
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: 0.2,
                    }}
                  ></SkillItemlayout>
                  <LogoDesc>Recoil</LogoDesc>
                </Logo>
                <Logo>
                  <SkillItemlayout
                    logo={framer}
                    layoutId="framer"
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: 0.3,
                    }}
                  ></SkillItemlayout>
                  <LogoDesc>Framer-Motion</LogoDesc>
                </Logo>
                <Logo>
                  <SkillItemlayout
                    logo={swiper}
                    layoutId="swiper"
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: 0.4,
                    }}
                  ></SkillItemlayout>
                  <LogoDesc>Swiper</LogoDesc>
                </Logo>
                <Logo>
                  <SkillItemlayout
                    logo={bootstrap}
                    layoutId="bootstrap"
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: 0.5,
                    }}
                  ></SkillItemlayout>
                  <LogoDesc>Bootstrap</LogoDesc>
                </Logo>
                <Logo>
                  <SkillItemlayout
                    logo={email}
                    layoutId="email"
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: 0.7,
                    }}
                  ></SkillItemlayout>
                  <LogoDesc>Eamiljs</LogoDesc>
                </Logo>
              </StackInner>
            </StackSection>
            <StackSection>
              <h1>사용해본적있어요</h1>
              <StackInner>
                <Logo>
                  <SkillItemlayout
                    logo={redux}
                    layoutId="redux"
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: 0,
                    }}
                  ></SkillItemlayout>
                  <LogoDesc>Redux</LogoDesc>
                </Logo>
                <Logo>
                  <SkillItemlayout
                    logo={axios}
                    layoutId="axios"
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: 0.1,
                    }}
                  ></SkillItemlayout>
                  <LogoDesc>Axios</LogoDesc>
                </Logo>
                <Logo>
                  <SkillItemlayout
                    logo={leaflet}
                    layoutId="leaflet"
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: 0.2,
                    }}
                  ></SkillItemlayout>
                  <LogoDesc>Leaflet</LogoDesc>
                </Logo>
                <Logo>
                  <SkillItemlayout
                    logo={yup}
                    layoutId="yup"
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: 0.3,
                    }}
                  ></SkillItemlayout>
                  <LogoDesc>YUP</LogoDesc>
                </Logo>
                <Logo>
                  <SkillItemlayout
                    logo={node}
                    layoutId="node"
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: 0.4,
                    }}
                  ></SkillItemlayout>
                  <LogoDesc>NODE</LogoDesc>
                </Logo>
                <Logo>
                  <SkillItemlayout
                    logo={pug}
                    layoutId="pug"
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: 0.5,
                    }}
                  ></SkillItemlayout>
                  <LogoDesc>PUG</LogoDesc>
                </Logo>
                <Logo>
                  <SkillItemlayout
                    logo={babel}
                    layoutId="babel"
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: 0.6,
                    }}
                  ></SkillItemlayout>
                  <LogoDesc>BABEL</LogoDesc>
                </Logo>
              </StackInner>
            </StackSection>
          </SkillSectionlayout>
        )}
      </ItemSection>
    </ItemContainer>
  );
};

export default SkillStack;
