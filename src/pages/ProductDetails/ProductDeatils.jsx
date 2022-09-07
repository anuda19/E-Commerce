import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar';

const ProductDeatils = () => {
    const params = useParams()
    const {productName, productId} = params;
  return (
    <div>
        <Navbar />
        {productName}
        <hr />
        {productId}
    </div>
  )
}

export default ProductDeatils