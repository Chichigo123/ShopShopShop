import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './TicTacToe'
import Layout from './Layout'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout />
        
        {/* <Game /> comment this out when game is ready*/}
      </div>
);
  }
}
export default App;

