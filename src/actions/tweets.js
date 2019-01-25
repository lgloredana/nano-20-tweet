

export const GET_TWEETS = 'GET-TWEETS';


export default function getTweets(tweets){
    return {
        type: GET_TWEETS,
        tweets
    }
}