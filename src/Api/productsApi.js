import axios from "axios"
const BASE_URL = process.env.REACT_APP_BASE_URL
// const BASE_URL2 = process.env.REACT_APP_BASE_URL2

export const getProducts = async()=>{
    const getUrl = `${BASE_URL}/products`
    return await axios.get(getUrl)
}

export const getAmazonProducts = async()=>{
    const getUrl = `http://localhost:5001/products`
    return await axios.get(getUrl)
}

export const addAmazonProducts = async(data)=>{
    const getUrl = `http://localhost:5001/products/create-products`
    return await axios.post(getUrl, data)
}


export const delAmazonProducts = async(id)=>{
    const delUrl = `http://localhost:5001/products/${id}`
    return await axios.delete(delUrl, id)
}

export const editAmazonProducts = async(id, data)=>{
    const putUrl = `http://localhost:5001/products/${id}`
    return await axios.put(putUrl, id, data)
}