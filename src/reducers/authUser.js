import {GET_AUTH_USER} from "../actions/authUser";


export default function authUser( prevStoreState = null, action){
    switch (action.type) {
        case GET_AUTH_USER :
            return {
                ...prevStoreState,
                ...action.authUser
            };
        default:
            return prevStoreState;
    }
}