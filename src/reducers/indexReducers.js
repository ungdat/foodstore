
import {combineReducers} from 'redux' 
import { proReducer, proById } from './proReducer';
import { cartReducesrs} from "../reducers/cartReducesrs"
import { cataReducesrs } from './cataReducesrs';
import { loginReuducers, TTReducers } from './loginReducers';
export default combineReducers({      
    pro: proReducer, 
    proId : proById,
    akak : cartReducesrs,
    caT : cataReducesrs,
    TrangThai : loginReuducers,
    ThongTin : TTReducers
})
