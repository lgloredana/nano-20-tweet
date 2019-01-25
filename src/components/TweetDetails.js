import React, { Compoenent } from 'react'
import connect from "react-redux/es/connect/connect";

class TweetDetails extends Component {
    render() {
        return (
            <div>Tweet Details</div>
        )
    }
}

export default connect()(TweetDetails);