import { SET_ALL_USERS } from "../actions/login-actions";

export function loginReducer(state: any ={}, action:{ type:string, data: any}){
    switch(action.type){
        case SET_ALL_USERS :
            console.log(action.data);
            return {
                ...state,
                allUsers: action.data
            };
        default:
            console.log('empty');
    }
}

