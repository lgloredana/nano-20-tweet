import React, { Component } from 'react'
import connect from "react-redux/es/connect/connect";
import {handleSaveTweet} from "../actions/tweets";

class NewTweet extends Component {
    state = {
        text: ''
    };

    handleChangeText(e){
        e.preventDefault();
        const text = e.target.value;

        this.setState( (prevState) => ({
            text
        }))
    }

    SaveTweet(e){
        e.preventDefault();

        this.setState( () => ({
            text: ''
        }));

        const newTweetInfo = {};
        newTweetInfo.text = this.state.text;
        newTweetInfo.author = this.props.authedUser;
        newTweetInfo.replyingTo = '';

        console.log(newTweetInfo);

        // this.props.dispatch(handleSaveTweet(newTweetInfo));
    }

    render() {
        const {text} = this.state;
        const remainingChars = 280 - text.length;
        return (
            <div>
                <h4 className='center'>New Tweet</h4>
                <form className='new-tweet' onSubmit={(e) => this.SaveTweet(e)}>
                    <textarea
                        className='tweet'
                        onChange={ (e) => this.handleChangeText(e)}
                        placeholder="What's happening?"
                        value={text}
                        maxLength={280}
                    ></textarea>
                    {remainingChars <= 100 && (
                        <div className='tweet-length'>
                            {remainingChars}
                        </div>
                    )}
                    <button
                        className='btn'
                        type='submit'
                        disabled={text === ''}>
                        Save
                    </button>
                </form>
            </div>
        )
    }
}

function mapStateToProps({authedUser}) {
    return{
        authedUser
    }
}


export default connect(mapStateToProps)(NewTweet);

