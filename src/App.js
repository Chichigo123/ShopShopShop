import React, {Component} from 'react';
import Home from './Home';
import About from './About';
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

const navigationBar = () => {
  return (
      <nav className="navbar navbar-expand-md  fixed-top navbar-dark bg-dark" id="navBarTop">
          <a className="navbar-brand" href="#" id="headerFont">Learn by Doing</a>
        
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
  constructor(props) {
    super(props);
    this.state = { 
      pokemons: [],
    };
}



componentDidMount() {
  console.log("Component Mount Printing SQL DB");
  fetch('api/SQL')
        .then(res => res.json())
        .then(pokemonList => {
          this.setState({ pokemons: pokemonList });
      });
}


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

          <div className="Users">
          <h1>Users</h1>
          {this.state.pokemons.map((pokemons) => (
                    <li key={pokemons.id}>{pokemons.Name}</li>
                ))}
        </div>
      </div>
);
  }
}

export default App;

