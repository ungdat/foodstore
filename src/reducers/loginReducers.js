import {LOGIN,GET_TT,LOGOUT} from "../const"

export const loginReuducers = (state = true, action) =>{
    switch (action.type) {
        case LOGIN:
            state = action.TT
            return state
        case LOGOUT:
            state = action.TT
            return state   
        default: return state
    }
}

export const TTReducers = (state =  {}, action) =>{
    switch (action.type) {
        case GET_TT: 
        let tt = action.tt
        console.log("da them vao store",tt);
        return {...state,tt}
        default: return state
    }
}