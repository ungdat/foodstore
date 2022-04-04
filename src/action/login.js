import {GET_TT, LOGIN, LOGOUT} from '../const/index'

export const actLogin = () =>{
    return {type: LOGIN , TT:true}    
}
export const actLogut = () =>{
    return {type: LOGOUT, TT:false}
}
export const actGET_TT = (tt) =>{
    return {type: GET_TT, tt}
}