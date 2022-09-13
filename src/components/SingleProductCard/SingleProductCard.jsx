import React, { useState } from 'react'
import {FaRegHeart, FaShoppingCart  } from 'react-icons/fa'
import { MdDelete, MdEdit  } from 'react-icons/md'
import { delAmazonProducts } from '../../Api/productsApi'
import { CartState } from '../../Context/ProductState'
import SellerEditModal from '../Modal/SellerEditModal'
import './singleProductCard.css'

const SingleProductCard = ({prod, showIcon}) => {
  const {cart, dispatch} = CartState()
  const [showEditModal, setShowEditModal] = useState(false)
  const [selectedProd, setSelectedProd] = useState({})

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

  const goToAmazon = ()=>{
    window.open(prod.productUrl)
  }

  const handleDeleteProduct = async(id)=>{
    const res = await delAmazonProducts(prod._id)
    const {status} = res;
    if(status === 202){
      console.log(status);
    }
    delAmazonProducts()
}

  const handleShowEditModal = ()=>{
    setSelectedProd({...prod})
    setShowEditModal(true)
  }

  return (
    <div className='product_container'>
              <SellerEditModal
              showEditModal={showEditModal} 
              setShowEditModal={setShowEditModal} 
                prod={prod}
                selectedProd={selectedProd}
                setSelectedProd={setSelectedProd}
              />
        <div className="product_card">
          <div>
            <div className="product_image" >
            {showIcon?(
              <>
              <span className='img_icon'>
              <MdEdit onClick={handleShowEditModal}/>
              </span>
            <span className='img_icon' >
            <MdDelete onClick={()=>handleDeleteProduct(prod._id)}/>
            </span>
            </>
            ):('')}
                <img src={prod?.imgUrl} alt="" onClick={goToAmazon}/>
            </div>
            </div>
            <div className="product_name">
              <FaRegHeart className='fav_icon text-danger fw-bolder'/>
              <div onClick={goToAmazon}>
                <h6 className='title'>{prod?.title}</h6>
              </div>
                {cart.some((p)=>p._id===prod._id)?(
                  <button className='remove_cart_btn' 
                  onClick={()=>removeFromCart()}>
                  <MdDelete className='mx-2 mb-1'/>
                  Remove From Cart</button>
                ):(
                  <button className='cart_btn btn-sm' 
                  onClick={()=>addToCart()}>
                  <FaShoppingCart className='mx-2 mb-1'/>
                  Add To Cart</button>
                )}
                <button className="btn btn-dark btn-sm mx-2" 
                onClick={goToAmazon}>Buy at Amazon</button>
            </div>
        </div>
    </div>
  )
}

export default SingleProductCard