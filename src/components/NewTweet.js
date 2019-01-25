import React, { Compoenent } from 'react'
import connect from "react-redux/es/connect/connect";

class NewTweet extends Component {
    render() {
        return (
            <div>New Tweet</div>
        )
    }
}

export default connect()(NewTweet);