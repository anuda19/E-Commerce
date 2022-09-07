import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import SingleProductCard from '../../components/SingleProductCard/SingleProductCard'
import { CartState } from '../../Context/ProductState'
import './cart.css'

const Cart = () => {
    const {cart} = CartState()
    const [total, setTotal] = useState('price')
    useEffect(() => {
        setTotal(cart.reduce((a,b)=> a+Number(b.price), 0))
    }, [cart])
    
  return (
    <div>
    <Navbar />
    <h3 className='my-5'>Total Price: ${total}</h3>
    <h2>{cart.length === 0? "Your Cart is Empty":
    <div className="cart_product">
        {cart?.map((prod)=>{
            return (
                <SingleProductCard prod={prod} key={prod.id}/>
            )
        })}
        </div>
    }</h2>
    </div>
  )
}

export default Cart