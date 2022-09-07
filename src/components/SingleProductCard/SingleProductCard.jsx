import React from 'react'
import {FaRegHeart, FaShoppingCart  } from 'react-icons/fa'
import { MdDelete  } from 'react-icons/md'
import { AiFillStar  } from 'react-icons/ai'
import { CartState } from '../../Context/ProductState'
import './singleProductCard.css'
import { Link } from 'react-router-dom'

const SingleProductCard = ({prod}) => {
  const {cart, dispatch} = CartState()
  const addToCart =()=>{
    dispatch({
      type: "ADD",
      payload: prod,
    })
  }
  const removeFromCart =()=>{
    dispatch({
      type: "REMOVE",
      payload: prod,
    })
  }
  return (
    <div className='product_container'>
        <div className="product_card">
          <Link to={`/products-details/${prod.title}/${prod.id}`}>
            <div className="product_image">
                <img src={prod?.image} alt="" />
            </div>
            </Link>
            <div className="product_name">
              <FaRegHeart className='fav_icon text-danger fw-bolder'/>
              <Link to={`/products-details/${prod.title}/${prod.id}`}>
                <h6 className='title'>{prod?.title}</h6>
                </Link>
                  <h6><span className='rating'>{prod?.rating?.rate}<AiFillStar/></span> ({prod?.rating?.count})</h6>
                <h5 className='text-success'>${prod?.price}</h5>
                {cart.some((p)=>p.id===prod.id)?(
                  <button className='remove_cart_btn' onClick={()=>removeFromCart()}><MdDelete className='mx-2 mb-1'/>Remove From Cart</button>
                ):(
                  <button className='cart_btn' onClick={()=>addToCart()}><FaShoppingCart className='mx-2 mb-1' />Add To Cart</button>
                )}
            </div>
        </div>
    </div>
  )
}

export default SingleProductCard