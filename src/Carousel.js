import React from "react";
//import Slider from "infinite-react-carousel";
import Slider from "react-slick";
//import "~slick-carousel/slick/slick.css";
//import "~slick-carousel/slick/slick-theme.css";
import { moda1, moda2, moda3, moda4, moda5 } from "./assets/";
/* 
const SimpleSlider = () => (
  <Slider dots>
    <div>
      <h3>
        <img src={moda1} alt="" />
      </h3>
    </div>
    <div>
      <h3>
        <img src={moda2} alt="" />
      </h3>
    </div>
    <div>
      <h3>
        <img src={moda3} alt="" />
      </h3>
    </div>
    <div>
      <h3>
        <img src={moda4} alt="" />
      </h3>
    </div>
    <div>
      <h3>
        <img src={moda5} alt="" />
      </h3>
    </div>
  </Slider>
);

export default SimpleSlider; */

export default class CustomSlider extends React.Component {
  render() {
    const settings = {
      autoplay: true,
      dots: true,
      fade: true,
      arrows: true,
      inifinite: true,
      duration: 500,
      slidesToShow: 2,
    };
    return (
      <div>
        <span>Slider</span>
        <Slider {...settings}>
          <div>
            <div>
              <img src={moda1} alt="" width="100%" />
            </div>
          </div>
          <div>
            <h3>
              <img src={moda2} alt="" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={moda3} alt="" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={moda4} alt="" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={moda5} alt="" />
            </h3>
          </div>
        </Slider>
      </div>
    );
  }
}
