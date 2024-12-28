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

class Bands extends Component {
  state = { favBooksData: [] };

  renderSlider = () => {
    const images = [
      'https://res.cloudinary.com/student7/image/upload/v1735033216/watch-case-46-aluminum-jetblack-nc-s10_VW_PF_watch-face-46-aluminum-jetblack-s10_VW_PF_jmn8k2.png',
      'https://res.cloudinary.com/student7/image/upload/v1735033216/watch-case-46-aluminum-jetblack-nc-s10_VW_PF_watch-face-46-aluminum-jetblack-s10_VW_PF_jmn8k2.png',
      'https://res.cloudinary.com/student7/image/upload/v1735033216/watch-case-46-aluminum-jetblack-nc-s10_VW_PF_watch-face-46-aluminum-jetblack-s10_VW_PF_jmn8k2.png',
      'https://res.cloudinary.com/student7/image/upload/v1735033216/watch-case-46-aluminum-jetblack-nc-s10_VW_PF_watch-face-46-aluminum-jetblack-s10_VW_PF_jmn8k2.png',
      'https://res.cloudinary.com/student7/image/upload/v1735033216/watch-case-46-aluminum-jetblack-nc-s10_VW_PF_watch-face-46-aluminum-jetblack-s10_VW_PF_jmn8k2.png',
    ];

    return (
      <Slider {...settings} className="watch-bg-slide">
        {images.map((src, index) => (
          <div key={index} className="slide-wrapper">
            <img
              src={src}
              alt={`watch ${index + 1}`}
              className="home-watch-img"
            />
          </div>
        ))}
      </Slider>
    );
  };

  render() {
    return (
      <div className="main-container">
        <h1>Top rated Books</h1>
        <div>{this.renderSlider()}</div>
      </div>
    );
  }
}

export default Bands;
