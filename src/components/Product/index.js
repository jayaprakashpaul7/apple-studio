import Header from '../Header';
import './index.css';

const Product = () => (
  <div>
    <Header />
    <div className="product-bg">
      Collections
      <select>
        <option>Apple watch </option>
        <option>apple new series</option>
        <option>Apple hermes series</option>
      </select>
      <div className="watch-bg">
        <img
          src="https://res.cloudinary.com/student7/image/upload/v1735033216/watch-case-46-aluminum-jetblack-nc-s10_VW_PF_watch-face-46-aluminum-jetblack-s10_VW_PF_jmn8k2.png"
          alt="watch"
          className="home-watch-img"
        />
      </div>
      <ul>
        <li>
          <button>size</button>
        </li>
      </ul>
    </div>
  </div>
);
export default Product;
