import {GET_TWEETS, TOGGLE_LIKED_TWEET} from "../actions/tweets";


export default function tweets(state = {}, action){
    switch (action.type) {
        case GET_TWEETS:
            return {
                ...state,
                ...action.tweets
            };
        case TOGGLE_LIKED_TWEET:{
            return {
            ...state,
                    [action.id]: {
                ...state[action.id],
                        likes: action.hasLiked === true
                        ? state[action.id].likes.filter((uid) => uid !== action.authedUser)
                        : state[action.id].likes.concat([action.authedUser])
                }
            }
        }
        default:
            return state;
    }
}