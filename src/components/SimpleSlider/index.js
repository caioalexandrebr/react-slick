import React, { Component } from "react";
import Slider from "react-slick";
import styled from 'styled-components';
import "./style.scss";
import Product from '../Product';

const ContentArrow = styled.div`
  width: 150px;
  display: flex;
  margin-left: 200px;
  justify-content: space-between;
`;

const ArrowSlide = styled.button`
  width: 64px;
  height: 64px;
  display: flex;
  color: #652CDB;
  font-size: 30px;
  background: white;
  align-items: center;
  border-radius: 500px;
  box-sizing: border-box;
  justify-content: center;
  border: 1px solid #D3D3E2;
`;

export default class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
  }

  prev() {
    this.slider.slickPrev();
  }

  next() {
    this.slider.slickNext();
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
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
        <Slider ref={slider => (this.slider = slider)} {...settings}>
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
        <ContentArrow>
          <ArrowSlide onClick={this.prev}>
            &lsaquo;
          </ArrowSlide>
          <ArrowSlide onClick={this.next}>
            &rsaquo;
          </ArrowSlide>
        </ContentArrow>
      </div>
    );
  }
}