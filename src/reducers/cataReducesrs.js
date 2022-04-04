import {ADD_CATA_STORE} from "../const/index";
export const cataReducesrs = (state = [], action)=>{
    switch (action.type) {
        case ADD_CATA_STORE:
            action.caT.forEach(e => {
                state = [...state,e]
            });
            return state;
        default:
            return state;
    }
}