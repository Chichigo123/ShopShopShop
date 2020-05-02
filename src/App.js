import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import logo from './logo.svg';
import './css/App.css';
import './css/Media.css';
import Game from './TicTacToe'
import Home from './Home'
import About from './About'
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

const navigationBar = () => {
  return (
      <nav className="navbar navbar-expand-md  fixed-top navbar-dark bg-dark" id="navBarTop">
          <a class="navbar-brand" href="#" id="headerFont">Learn by Doing</a>
        
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">
                  <li className="nav-item"><NavLink className="nav-link " to="/Home">Home</NavLink></li>
                  <li className="nav-item "><NavLink className="nav-link " to="/About">About</NavLink></li>
                  <li className="nav-item "><NavLink className="nav-link "  to="#">Games</NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link "  to="#">Contact</NavLink></li>
              </ul>

              <div id="icons">
                  <a href="https://web.facebook.com/roseshane.palomo.92" className="fa fa-facebook"></a>
                  <a href="https://www.linkedin.com/in/rose-shane-palomo-30a403135" className="fa fa-linkedin"></a>
                  <a href="#" className="fa fa-skype"></a>
              </div>             
          </div>
      </nav>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
       
        {/* <Layout /> */}
        
        {/* <Game /> comment this out when game is ready*/}
        <Router>
        {navigationBar()}
          <Switch>
            <Route exact path="/" component={Home} /> 
            <Route path="/Home" component={Home} /> 
            <Route path="/About" component={About} /> 
          </Switch>
         
        </Router>
      </div>
);
  }
}

export default App;

