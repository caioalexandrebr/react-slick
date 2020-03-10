import React, { Component } from "react";
import Slider from "react-slick";

import Circle from '../Circle';

export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 4,
      arrows: false,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      },
      responsive: [
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    };
    return (
      <div>
        <h2>Swipe To Slide</h2>
        <Slider {...settings}>
          <div>
            <Circle>
              Lorem ipsum
            </Circle>
          </div>
          <div>
            <Circle>
              Lorem ipsum
            </Circle>
          </div>
          <div>
            <Circle>
              Lorem ipsum
            </Circle>
          </div>
          <div>
            <Circle>
              Lorem ipsum
            </Circle>
          </div>
          <div>
            <Circle>
              Lorem ipsum
            </Circle>
          </div>
          <div>
            <Circle>
              Lorem ipsum
            </Circle>
          </div>
          <div>
            <Circle>
              Lorem ipsum
            </Circle>
          </div>
        </Slider>
      </div>
    );
  }
}