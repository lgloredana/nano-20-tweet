import React, { Component } from 'react'
import {handleInitialData} from "../actions/shared";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading";
import Menu from "./Menu";
import NewTweet from "./NewTweet";

class App extends Component {

    componentDidMount() {
      this.props.dispatch(handleInitialData())
        console.info(this.props);
    }

    render() {
        return (
          <div>
              <div><Menu /></div>
              <LoadingBar/>
              Loading value = {this.props.loading}
              { (this.props.loading === true) ? <div> Loading </div> : <NewTweet/>}
          </div>
        )
     }


}

function mapStateToProps({authedUser}) {
    return {
        loading : authedUser === null
    }
}
export default connect(mapStateToProps)(App)