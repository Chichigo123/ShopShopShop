import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './TicTacToe'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> This is a game imported from a tutorial in 
            <a href="https://reactjs.org/docs/create-a-new-react-app.html">reactjs.org</a>
        </h1>
        <Game />
      </div>
);
  }
}
export default App;
