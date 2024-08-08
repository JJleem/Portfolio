import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  NodeImgSection,
  SliderContainer,
  SliderContent,
  SliderSub,
} from "./StyleNodeSlider";
import Db from "../../data/db.json";
import { useParams } from "react-router-dom";

const NodeSlider = () => {
  const projects = Db.items;
  const { id } = useParams() as { id?: string };
  const ChooseData = projects.find((item) => item.id.toString() === id);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  console.log(ChooseData);
  return (
    <SliderContainer className="slider-container">
      <Slider {...settings}>
        <SliderContent>
          <NodeImgSection imgs={ChooseData?.img}></NodeImgSection>
          <SliderSub>{ChooseData?.imgsub}</SliderSub>
        </SliderContent>
        <SliderContent>
          <NodeImgSection imgs={ChooseData?.imgtwo}></NodeImgSection>
          <SliderSub>{ChooseData?.imgsubtwo}</SliderSub>
        </SliderContent>
        <SliderContent>
          <NodeImgSection imgs={ChooseData?.imgthree}></NodeImgSection>
          <SliderSub>{ChooseData?.imgsubthree}</SliderSub>
        </SliderContent>
        <SliderContent>
          <NodeImgSection imgs={ChooseData?.imgfour}></NodeImgSection>
          <SliderSub>{ChooseData?.imgsubfour}</SliderSub>
        </SliderContent>
        <SliderContent>
          <NodeImgSection imgs={ChooseData?.imgfive}></NodeImgSection>
          <SliderSub>{ChooseData?.imgsubfive}</SliderSub>
        </SliderContent>
        <SliderContent>
          <NodeImgSection imgs={ChooseData?.imgsix}></NodeImgSection>
          <SliderSub>{ChooseData?.imgsubsix}</SliderSub>
        </SliderContent>
      </Slider>
    </SliderContainer>
  );
};

export default NodeSlider;
