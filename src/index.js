import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from "react-redux";
import { createStore} from "redux";
import reducers from "./redux/reducers";


ReactDOM.render(
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>,
    document.getElementById('root')
    );


