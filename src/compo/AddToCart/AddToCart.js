import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

function AddToCart() {
  return (
    <>
    <Navbar />
     <div>AddToCart</div>
     <Link to={'/checkout'}> <button className='btn btn-dark'>Buy Now</button> </Link>
    </>
  )
}

export default AddToCart