import React, { Component } from "react";
import Slider from "react-slick";

import Card from '../Card';

export default class CenterMode extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      speed: 500
    };
    return (
      <div>
        <h2>Center Mode</h2>
        <Slider {...settings}>
          <div>
            <Card/>
          </div>
          <div>
            <Card/>
          </div>
          <div>
            <Card/>
          </div>
          <div>
            <Card/>
          </div>
        </Slider>
      </div>
    );
  }
}