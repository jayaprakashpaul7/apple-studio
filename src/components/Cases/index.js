import { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/* Add css to your project */
import './index.css';

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

class Cases extends Component {
  renderSlider = () => {
    <Slider {...settings} className="slider-container">
      <div className="slick-item">
        <img
          className="watch-img"
          src="https://res.cloudinary.com/student7/image/upload/v1735033216/watch-case-46-aluminum-jetblack-nc-s10_VW_PF_watch-face-46-aluminum-jetblack-s10_VW_PF_jmn8k2.png"
          alt="company logo"
        />
      </div>
    </Slider>;
  };

  render() {
    return (
      <div className="main-container">
        <h1>Cases</h1>
        <div>{this.renderSlider()}</div>
      </div>
    );
  }
}

export default Cases;
