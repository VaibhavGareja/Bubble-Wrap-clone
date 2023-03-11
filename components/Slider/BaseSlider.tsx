import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface IProps {
  dots?: boolean;
  slidesToShow?: number;
  arrows?: boolean;

  [key: string]: any;
  infinite: boolean;
}
export default function CustomSlider(props: IProps) {
  const {} = props;
  return (
    <Slider
    className="flex"
      {...props}
      variableWidth
      autoplay
    >
      {props.children}
    </Slider>
  );
}
