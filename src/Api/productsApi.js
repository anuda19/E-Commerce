import axios from "axios"
// const BASE_URL = process.env.REACT_APP_BASE_URL2
// const BASE_URL2 = process.env.REACT_APP_BASE_URL2

// export const getProducts = async()=>{
//     const getUrl = `${BASE_URL}/products`
//     return await axios.get(getUrl)
// }

export const getAmazonProducts = async()=>{
    const getUrl = `https://instacart-in.herokuapp.com/products`
    return await axios.get(getUrl)
}

export const addAmazonProducts = async(data)=>{
    const getUrl = `https://instacart-in.herokuapp.com/products/create-products`
    return await axios.post(getUrl, data)
}


export const delAmazonProducts = async(id)=>{
    const delUrl = `https://instacart-in.herokuapp.com/products/${id}`
    return await axios.delete(delUrl, id)
}

export const editAmazonProducts = async(id, data)=>{
    const putUrl = `https://instacart-in.herokuapp.com/products/${id}`
    return await axios.put(putUrl, id, data)
}