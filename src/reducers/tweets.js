import {GET_TWEETS, SAVE_TWEET, TOGGLE_LIKED_TWEET} from "../actions/tweets";


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
        case SAVE_TWEET:{
            const { tweet } = action;

            let replyingTo = {};

            console.log('-----');
            console.dir(tweet.replyingTo);

            if( tweet.replyingTo !== null ){
                replyingTo = {
                    [tweet.replyingTo]:{
                        ...state[tweet.replyingTo],
                        replies: state[tweet.replyingTo].replies.concat([tweet.id])
                    }
                }
            }
            return {
                ...state,
                [action.tweet.id]: action.tweet,
                ...replyingTo
            }
        }
        default:
            return state;
    }
}