import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
 import { BrowserRouter as Router } from "react-router-dom";
 
//CSS

import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js'
import './css/index.css';
import './css/App.css';
import './css/Home.css'
import './css/About.css';
import './css/Pokemon.css'
import './css/Icons.css'
import './css/Common.css'
import 'mdbreact/dist/css/mdb.css';
import './css/Media.css'
import history from './History';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
