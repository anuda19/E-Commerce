import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, {Suspense} from 'react';
import Login from './compo/Login/Login';
// import Navbar from './compo/Navbar/Navbar';
import Footer from './compo/Footer/Footer';
import Home from './compo/Home/Home';
import AddToCart from './compo/AddToCart/AddToCart';
import ProductList from './compo/ProductList/ProductList';
import ProductDetails from './compo/ProductDetails/ProductDeatils'
import Checkout from './compo/Checkout/Checkout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={
          <Suspense fallback={<div className='loader'>Loading...</div>}>
            <Login />
          </Suspense>
        }/>
        <Route path='/home' element={
          <Suspense fallback={<div className='loader'>Loading...</div>}>
            <Home />
          </Suspense>
        }/>
        <Route path='/products' element={
          <Suspense fallback={<div className='loader'>Loading...</div>}>
            <ProductList />
          </Suspense>
        }/>
        <Route path='/productdetails' element={
          <Suspense fallback={<div className='loader'>Loading...</div>}>
            <ProductDetails />
          </Suspense>
        }/>
        <Route path='/addtocart' element={
          <Suspense fallback={<div className='loader'>Loading...</div>}>
            <AddToCart />
          </Suspense>
        }/>
         <Route path='/checkout' element={
          <Suspense fallback={<div className='loader'>Loading...</div>}>
            <Checkout />
          </Suspense>
        }/>
      </Routes> 
      </Router>
      <Footer />
      </>
  )
}


export default App;