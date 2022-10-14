import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { getAmazonProducts } from '../Api/productsApi'
import {apiReducer} from './Reducer'


const Cart = createContext()

const ProductState = ({children}) => {
    
    const [state, dispatch] = useReducer(apiReducer, {
      cart:[],
      amazonProducts:[]
    })


    useEffect(() => {
      getAmazonProduct()
    }, [])
    
    const getAmazonProduct = ()=>{
      getAmazonProducts().then(res=>{
        const {data, status} = res;
        if(status === 200){
          console.log(data);
          dispatch({
            type: "GET_AMAZON_DATA",
            payload:{
              amazonProducts: data,
            }
          })
        }
      }).catch(err=>{
        console.log(err);
      })
    }
    

  return (
    <Cart.Provider value={{...state, dispatch}}>
        {children}
    </Cart.Provider>
  )
}

export default ProductState

export const CartState = () => {
  return useContext(Cart);
};