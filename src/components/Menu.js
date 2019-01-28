import React, { Component } from 'react'
import connect from "react-redux/es/connect/connect";

class Menu extends Component {

    openNewTweet = (e) => {
        e.preventDefault();

    };
    render() {
        return (
            <div>
                <button>Home</button>
                <button onClick={(e) => this.openNewTweet(e)}>New tweet</button>
            </div>
        )
    }
}

export default connect()(Menu);