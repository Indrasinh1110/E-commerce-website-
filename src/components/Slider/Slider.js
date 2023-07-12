import React from 'react';
import "./Slider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider_img from '../../assets/images/slide-img-2.jpg';

const Slider = () => {
  return (
    <div className = "hero-slider">
      <div className='hero-slider-item'>
        <img src = {slider_img} alt = "Shopping_banner" />
      </div>
    </div>
  )
}

export default Slider