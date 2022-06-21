import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const ProductList = () => {
    return (
        <div>
        <Navbar />
            <h1>Here You can access all the products</h1>
            <Link to={'/productdetails'}> <button className='btn btn-warning'>Product Details</button></Link>
        </div>
    );
}


export default ProductList;