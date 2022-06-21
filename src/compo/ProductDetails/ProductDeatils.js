import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

function ProductDeatils() {
  return (
    <div>
    <Navbar />
        <h2>ProductDeatils</h2>
        <Link to='/addtocart'><button className='bn btn-warning btn-lg'>Add To Cart</button></Link>
    </div>
  )
}

export default ProductDeatils