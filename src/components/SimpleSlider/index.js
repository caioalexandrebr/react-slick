import React, { Component } from "react";
import Slider from "react-slick";
import "./style.scss";
import Product from '../Product';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 375,
          settings: {
            arrows: false,
          }
        }
      ]
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <Product/>
          </div>
          <div>
            <Product/>
          </div>
          <div>
            <Product/>
          </div>
          <div>
            <Product/>
          </div>
        </Slider>
      </div>
    );
  }
}