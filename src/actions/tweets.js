import {saveLikeToggle, saveTweet} from "../utils/api";
import {hideLoading, showLoading} from "react-redux-loading";


export const GET_TWEETS = 'GET-TWEETS';
export const TOGGLE_LIKED_TWEET = 'TOGGLE_LIKED_TWEET';
export const SAVE_TWEET = 'SAVE_TWEET';

export default function getTweets(tweets){
    return {
        type: GET_TWEETS,
        tweets
    }
}

function toggleLikedTweet(likedInfo){
    return{
       type: TOGGLE_LIKED_TWEET,
        id: likedInfo.id,
        authedUser: likedInfo.authedUser,
        hasLiked: likedInfo.hasLiked
    }
}

export function handleToggleLikedTweet(likedInfo) {
    return (dispatch) => {
        dispatch(toggleLikedTweet(likedInfo));
        saveLikeToggle(likedInfo)
            .catch(
                (e) => {
                    console.warn('Error in handling toggle tweet', e);
                    dispatch(toggleLikedTweet(likedInfo));
                    alert('There was an error liking the tweet. Try again.');
                }
            )
    }
}

function saveNewTweet(tweet){
    return {
        type: SAVE_TWEET,
        tweet
    }
}

export function handleSaveTweet({text, replyingTo}) {

    return (dispatch, getState) => {
        const { authedUser } =  getState();
        const info = {text, author: authedUser.id, replyingTo};
        dispatch(showLoading());
        saveTweet(info)
            .then(
                (tweet) => {
                    dispatch(saveNewTweet(tweet));
                })
            .then(
                () => {
                    dispatch(hideLoading());
                }
            )
    }
}