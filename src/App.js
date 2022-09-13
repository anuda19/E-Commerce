import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProductState from './Context/ProductState';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import AllProducts from './pages/AllProducts/AllProducts';
import ProductDeatils from './pages/ProductDetails/ProductDeatils';
import Seller from './pages/Sellers/Seller';


function App() {

  return (
    <ProductState>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/all-products/:categories' element={<AllProducts />} />
        <Route path='/products-details/:productName/:productId' element={<ProductDeatils />} />
        <Route path='/seller' element={<Seller />} />
      </Routes>
    </ProductState>
  );
}

export default App;
