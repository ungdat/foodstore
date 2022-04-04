import {ADDTOCART, DELETE_CART, TANGSL, GIAMSL, GETNUMBER_CART} from "../const/index"

export const addToCart = (rt) =>{
    return{
        type: ADDTOCART,
        rt
    }
}
export const getNBC = () =>{
    return{
        type: GETNUMBER_CART
    }
}
export const tangSL =(rt)=>{
    return{
        type: TANGSL,
        rt
    }
}
export const giamSL = (rt)=>{
    return{
        type:GIAMSL,
        rt
    }
}
export const xoa = (rt)=>{
    return{
        type: DELETE_CART,
        rt
    }
}