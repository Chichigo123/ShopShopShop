import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardTitle, MDBCardText, MDBCardHeader} from 'mdbreact';


import Copyright from './Common'


class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      pokemons: []
    }
  }

  componentDidMount(){
    console.log("Component Mount Printing SQL DB");
    fetch('api/SQL')
          .then(res => res.json())
          .then(pokemonList => {
            this.setState({ pokemons: pokemonList });
        });
  }
  render() {
    return (       
      <MDBContainer>
        <MDBRow>
        <h1>Pokemon Database</h1>
        <table className="pokemon-table">
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
          {this.state.pokemons.map((pokemons) => (
            <tr>
                  <td>
                    {pokemons.name}
                  </td>
                  <td>
                      {pokemons.description}
                  </td>
            
            </tr>
           ))}
         
        </table>  

        </MDBRow>
         
        
      </MDBContainer>          
  );
  }
}


export default Pokemon