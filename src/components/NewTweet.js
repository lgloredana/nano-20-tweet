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
        const { text } = this.state;
        const { dispatch, id } = this.props;
        dispatch(handleSaveTweet({text: text, replyingTo: id}));

        this.setState( () => ({
            text: ''
        }));

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

function mapStateToProps(state, {id}) {
    return {
        ...state,
        id
    }

}

export default connect(mapStateToProps)(NewTweet);

