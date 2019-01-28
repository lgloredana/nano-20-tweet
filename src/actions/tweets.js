import {saveLikeToggle, saveTweet} from "../utils/api";


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

function saveNewTweet(tweetInfo){
    return {
        type: SAVE_TWEET,
        text: tweetInfo.text,
        author: tweetInfo.author,
        replyingTo: tweetInfo.replyingTo
    }
}

export function handleSaveTweet(tweetInfo) {
    return (dispatch) => {
        saveTweet(tweetInfo)
            .then(
                () => {
                    dispatch(saveNewTweet(tweetInfo));
                })
            .catch(
                (e) => {
                    console.warn('Error in saving tweet', e);
                    alert('There was an error saving the tweet. Try again.');
                }
            )
    }
}