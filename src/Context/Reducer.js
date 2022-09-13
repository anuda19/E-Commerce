export const apiReducer = (state, action)=>{
    switch (action.type) {
            case "GET_AMAZON_DATA":
            return {
                ...state, amazonProducts: action.payload.amazonProducts
            }
            case "ADD":
            return {
                ...state, cart:[...state.cart, {...action.payload}] 
            }
            case "REMOVE":
            return {
                ...state, cart:state.cart.filter((p)=>p.id!==action.payload.id)
            }
            case "REMOVE_PRODUCT":
            return {
                ...state, amazonProducts:state.amazonProducts.filter((p)=>p._id!==action.payload._id)
            }
            case "SORT":
            return {
                ...state, sort: action.payload
            }
        default:
            return state;
    }
}

