// actions san pham
import { ADD_CATA_STORE, ADD_LISTPRO_STORE,SHOW_DATA_ID} from "../const/index"
//action dua sp vao store
export const actAddStore = (array) =>{
    return {type: ADD_LISTPRO_STORE, lit : array};
}

export const actShowId = (product) =>{
    return {type: SHOW_DATA_ID, product }
}

export const actLoai = (array) =>{
    return {type: ADD_CATA_STORE, caT : array}
}