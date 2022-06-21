import React from 'react'
import { Link } from "react-router-dom";
import Navbar from '../Navbar/Navbar';

function Checkout() {
  return (
    <>
    <Navbar />
    <div></div>
    <Link to={'/home'}><button className='btn btn-danger'>Checkout</button> </Link>
    </>
  )
}

export default Checkout