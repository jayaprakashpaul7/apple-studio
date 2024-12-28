import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import Cases from './components/Cases';
import Bands from './components/Bands';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/product" element={<Product />} />
      <Route exact path="/product/cases" element={<Cases />} />
      <Route exact path="/product/bands" element={<Bands />} />
    </Routes>
  </BrowserRouter>
);

export default App;
