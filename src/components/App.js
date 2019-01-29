import React, { Component } from 'react'
import {handleInitialData} from "../actions/shared";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import Menu from "./Menu";
import TweetDetails from "./TweetDetails";

class App extends Component {

    componentDidMount() {
      this.props.dispatch(handleInitialData())
        console.info(this.props);
    }
    // '6h5ims9iks66d4m7kqizmv' '3km0v4hf1ps92ajf4z2ytg'
    render() {
        return (
          <div>
              <div><Menu /></div>
              <LoadingBar/>
              { this.props.loading === true
                  ? null
                  : <TweetDetails match={{params: { id: '3km0v4hf1ps92ajf4z2ytg'}}}/>}
          </div>
        )
     }


}

export default connect()(App)