import React, { Component, Fragment } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {handleInitialData} from "../actions/shared";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import Menu from "./Menu";
import TweetDetails from "./TweetDetails";
import Dashboard from "./Dashboard";
import NewTweet from "./NewTweet";

class App extends Component {

    componentDidMount() {
      this.props.dispatch(handleInitialData())
        console.info(this.props);
    }
    // '6h5ims9iks66d4m7kqizmv' '3km0v4hf1ps92ajf4z2ytg'
    render() {
        return (
         <BrowserRouter>
             <Fragment>
                 <LoadingBar/>
                 <div className='container'>
                    <Menu/>
                    {this.props.loading === true
                     ? null
                     : <div>
                         <Route path='/' exact component={Dashboard}/>
                         <Route path='/new' component={NewTweet}/>
                         <Route path='/details/:id' component={TweetDetails}/>
                     </div>}
                 </div>
             </Fragment>
         </BrowserRouter>
        )
     }


}

export default connect()(App)