
import { actShowId } from "../action/actProduct";
import {ADD_PRO,EDIT_PRO,DELT_PRO,ADD_LISTPRO_STORE, SHOW_DATA_ID} from "../const/index";
export const proReducer = (state = [], action) => {
  switch (action.type) {    
    case ADD_LISTPRO_STORE : 
      action.lit.forEach(e => {
        state = [...state,e]
      });
      return state;
    default:
      return state;
  }
};
export const proById = (state = {}, action) => {
  switch (action.type) {    
    case SHOW_DATA_ID : 
      return {...state,...action.product}
    default:
      return state;
  }
};

