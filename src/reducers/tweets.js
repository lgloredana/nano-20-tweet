import {GET_TWEETS} from "../actions/tweets";


export default function tweets(prevStoreState = {}, action){
    switch (action.type) {
        case GET_TWEETS:
            return {
                ...prevStoreState,
                ...action.tweets
            };
        default:
            return prevStoreState
    }
}