export const apiReducer = (state, action)=>{
    switch (action.type) {
        case "GET_DATA":
            return {
                ...state, products: action.payload.products
            }
            case "ADD":
            return {
                ...state, cart:[...state.cart, {...action.payload}] 
            }
            case "REMOVE":
            return {
                ...state, cart:state.cart.filter((p)=>p.id!==action.payload.id)
            }
            case "SORT":
            return {
                ...state, sort: action.payload
            }
        default:
            return state;
    }
}

