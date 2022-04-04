import { ADDTOCART, DELETE_CART, GETNUMBER_CART, GIAMSL, TANGSL } from "../const";
const product = {numberCart:0, cart:[]}
export const cartReducesrs = (state=product, action) =>{
    switch (action.type) {
        case ADDTOCART:
            if(state.numberCart==0){
                let cart = {
                    id:action.rt.id, 
                    tensach: action.rt.tensach, 
                    gia: action.rt.gia, 
                    urlHinh: action.rt.urlHinh, 
                    soluong:1}
                state.cart.push(cart)
            } else{
                let check = false
                state.cart.map((a,b)=>{
                    if(a.id==action.rt.id){
                        state.cart[b].soluong ++
                        check = true
                    }
                })
                if(!check){
                    let _cart = {id:action.rt.id, tensach: action.rt.tensach, gia: action.rt.gia, urlHinh: action.rt.urlHinh, soluong:1}
                    state.cart.push(_cart)
                }
            }
            console.log({
                ...state,numberCart:state.numberCart+1
            });
            return{
                ...state,numberCart:state.numberCart+1
            }
        case GETNUMBER_CART:
            return{...state}
        case TANGSL:
            state.numberCart++
            state.cart[action.rt].soluong ++
            return{...state}
        case GIAMSL:
            let soluong = state.cart[action.rt].soluong 
            if( soluong > 1){
                state.numberCart -- 
                state.cart[action.rt].soluong --
            }
            return{...state}
        case DELETE_CART:
            let solg = state.cart[action.rt].soluong
            return{...state, numberCart: state.numberCart-solg, cart: state.cart.filter(item=>{
                return item.id != state.cart[action.rt].id
            })}
        default:
            return {...state}
    }
}

