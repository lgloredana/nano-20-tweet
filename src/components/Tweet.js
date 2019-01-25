import React, { Component } from 'react'
import {connect} from "react-redux";
import {formatDate, formatTweet} from "../utils/helpers";
import { TiArrowBackOutline , TiHeartOutline, TiHeartFullOutline } from 'react-icons/ti/index.js'

class Tweet extends Component {
    toParent = (e, id) => {
        e.preventDefault();
        // todo: add functionality for redirecting to the parent tweet details page
    };

    handleLike = (e) => {
        e.preventDefault();

        // Todo: handle like tweet
    }

    render() {
        const { tweet } = this.props;
        if ( tweet === null ) {
            return <p> This Tweet doesn't exists </p>
        }
        const { name, avatar, timestamp, text, hasLiked, likes, replies, parent } = tweet;
        return (
            <div className='tweet'>

                <img
                    src={avatar}
                    alt={`Avatar of ${name}`}
                    className='avatar'
                />
               <div>
                   <div className='tweet-info'>
                       <div>
                           <span>{name}</span>
                           <div>{formatDate(timestamp)}</div>
                           { parent &&  (
                               <button className='replying-to' onClick={(e) => this.toParent(e, parent)}>
                                   Replay to @{parent.author}
                               </button>
                           )}
                           <p>{text}</p>
                       </div>
                   </div>
                   <div className='tweet-icons'>
                       <TiArrowBackOutline className='tweet-icon'/>
                       <span>{ replies !== 0  && replies}</span>
                       <button className='heart-button' onClick={this.handleLike}>
                           { hasLiked === true
                               ? <TiHeartFullOutline className='tweet-icon' color='#e0245e'/>
                               : <TiHeartOutline className='tweet-icon'/>
                           }
                       </button>
                       <span>{ likes !== 0  && likes}</span>
                   </div>
               </div>
            </div>
        )
    }
}

function mapStateToProps({tweets, users, authUser}, {id}) {
    const tweet = tweets[id];
    const parentTweet = tweet
        ? tweets[tweet.replyingTo]
        : null;

    return {
        tweet: tweet
            ? formatTweet(tweet, users[tweet.author], authUser, parentTweet)
            : null,
        authUser
    }
}


export default connect(mapStateToProps)(Tweet);