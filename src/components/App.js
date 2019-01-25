import React, { Component } from 'react'
import {handleInitialData} from "../actions/shared";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading";

class App extends Component {

    componentDidMount() {
      this.props.dispatch(handleInitialData())
        console.info(this.props);
    }

    render() {
        return (
          <div>
              <div> Menu</div>
              <LoadingBar/>
              Loading value = {this.props.loading}
              { (this.props.loading === true) ? <div> Loading </div> : <Dashboard/>}
          </div>
        )
     }


}

function mapStateToProps({authUser}) {
    return {
        loading : authUser === null
    }
}
export default connect(mapStateToProps)(App)