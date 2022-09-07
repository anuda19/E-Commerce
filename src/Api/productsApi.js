import axios from "axios"
const BASE_URL = process.env.REACT_APP_BASE_URL

export const getProducts = async()=>{
    const getUrl = `${BASE_URL}/products`
    return await axios.get(getUrl)
}