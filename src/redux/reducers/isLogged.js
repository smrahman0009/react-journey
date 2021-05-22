import {LOGGED_IN} from "../constants";

export const isLogged=(state=false,action)=>{
    switch(action.type){
        case LOGGED_IN:
            return !state
        default:
            return false
    }
}
