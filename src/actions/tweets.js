import {saveLikeToggle} from "../utils/api";


export const GET_TWEETS = 'GET-TWEETS';
export const TOGGLE_LIKED_TWEET = 'TOGGLE_LIKED_TWEET';

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