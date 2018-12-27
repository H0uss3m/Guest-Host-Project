import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Reducer from './Reducers';
import './index.css';
import App from './components/App';
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const store=createStore(Reducer)



ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
