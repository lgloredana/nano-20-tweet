import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import {createStore} from "redux";
import rootReducer from './reducers/index'
import rootMiddleware from './middleware/index'
import {Provider} from "react-redux";

const store = createStore(rootReducer, rootMiddleware);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);