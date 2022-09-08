import React, { createContext, useContext, useEffect, useReducer } from 'react'
// import {faker} from '@faker-js/faker'
import { getProducts } from '../Api/productsApi'
import {apiReducer} from './Reducer'


const Cart = createContext()

const ProductState = ({children}) => {

    // const data= [...Array(30)].map(()=>({
    //     id: faker.datatype.uuid(),
    //     productName: faker.commerce.productName(),
    //     price: faker.commerce.price(),
    //     images: faker.image.food(1234, 2345, true),
    //     fastDelivery: faker.datatype.boolean(),
    // }))
    
    const [state, dispatch] = useReducer(apiReducer, {
      products:[],
      cart:[]
    })

    useEffect(() => {
      getAllProducts()
    }, [])
    
    const getAllProducts = ()=>{
      getProducts().then(res=>{
        const {data, status} = res;
        if(status === 200){
          // console.log(data);
          dispatch({
            type: "GET_DATA",
            payload:{
              products: data,
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