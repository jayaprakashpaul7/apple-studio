import { Component } from 'react';
import Header from '../Header';
import { Link } from 'react-router-dom';
import './index.css';

class Home extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header />
        <div className="home-bg">
          <div className="text-container">
            <h1 className="main-heading">Apple Watch Studio</h1>
            <h1 className="title">
              Choose a case.
              <br /> Pick a band.
              <br />
              Create your own style.
            </h1>
            <Link to="/product">
              <button className="get-started-btn">Get Started</button>
            </Link>
          </div>
          <div className="watch-bg">
            <img
              src="https://res.cloudinary.com/student7/image/upload/v1735033216/watch-case-46-aluminum-jetblack-nc-s10_VW_PF_watch-face-46-aluminum-jetblack-s10_VW_PF_jmn8k2.png"
              alt="watch"
              className="home-watch-img"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
