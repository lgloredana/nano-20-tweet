import React, { Component } from 'react'
import connect from "react-redux/es/connect/connect";
import Tweet from "./Tweet";
import NewTweet from "./NewTweet";

class TweetDetails extends Component {
    render() {
        const { replies } = this.props;
        return (
            <div>
                <Tweet id={this.props.id}/>
                <NewTweet id={this.props.id}/>
                {replies.length > 0 &&  <h3 className='center'>Replies</h3>}
                {replies.map( (replyItem) => (
                    <li  key={replyItem}>
                        <Tweet id={replyItem}/>
                    </li>
                ))}
            </div>
        )
    }
}

function mapStateToProps({authedUser, tweets, users} , props) {
    const { id } = props.match.params;
    return {
        id,
        replies: !tweets[id]
            ? []
            : tweets[id].replies.sort((a,b) => tweets[b].timestamp - tweets[a].timestamp)
    }
}

export default connect(mapStateToProps)(TweetDetails);