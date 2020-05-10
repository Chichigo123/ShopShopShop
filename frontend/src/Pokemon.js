import React, {Component} from 'react';

import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardTitle, MDBCardText, MDBCardHeader} from 'mdbreact';
import Copyright from './Common';
import About from './About';
import { render } from '@testing-library/react';

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      pokemons: [],
      name: '',
      description: '',
      msg: ''
    }

    // this.handleSubmit = this.handleSubmit.bind(this)
    // this.logChange = this.logChange.bind(this)
  }
  
  refreshPage(){
    fetch('api/')
    .then(res => res.json())
    .then(pokemonList => {
      this.setState({ pokemons: pokemonList });
    });
  }
 

  handleSubmit = (event, action, pokemon_name) => {
    event.preventDefault(); 
    var data = {
        name: this.state.name,
        description: this.state.description
    }
    let url_path = "/api/"+action+"pokemon";
    fetch(url_path, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then((response) =>  {
        if (response.status >= 400) {
          alert('There was a problem with the action. Please try again')
          throw new Error("Bad response from server");
        }
        return response.json()
    })
    .then((data) => {
        
        let res = data
        console.log(typeof data + JSON.stringify(data));
        if (data.affectedRows == 1) {
          console.log('Edited Flag!') 
          if (action == 'new') {
            alert('Successfully Added')
          } else if (action == 'delete') {
            alert('Successfully Deleted')
          }
          this.refreshPage()
        }
    })
    .catch((err) => {
        console.log(err)
    });
  }

  logChange = (e) =>
   {
     console.log(e.target.name)
    this.setState({[e.target.name]: e.target.value});  
  }


  componentDidMount(){
    this.refreshPage()
  }

  newPokemon(){
      return(
        <div className="modal fade" id="newPokemon" role="dialog">
          <div className="modal-dialog">
          
            {/* <!-- Modal content--> */}
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Enter New Pokemon Details</h4>
              </div>
              <div className="modal-body">
              <form onSubmit={e => this.handleSubmit(e, 'new')}>
                    <label>Name</label>
                    <input onChange={this.logChange} className="form-control" value={this.state.name} placeholder='Pikachu' name='name'  validations={['required']}/>
                    <label>Description</label>
                    <textarea onChange={this.logChange} className="form-control"  value={this.state.description} placeholder='Pikachu are a species of Pokémon, fictional creatures that appear in an assortment of video games, animated television shows and movies, trading card games, and comic books licensed by The Pokémon Company, a Japanese corporation. They are yellow rodent-like creatures with powerful electrical abilities.' 
                      name='description'/>
                    <div className="modal-footer">
                      <button type="submit" className="btn btn-uth-submit">Submit</button>
                      <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </form>
              </div>
             
            </div>
          </div>
        </div>
      );
  }

  deletePokemon = (event) => {
    this.setState({[event.target.name]: event.target.value});
    console.log(event.target )
    {this.handleSubmit(event, 'delete')};
  }
  

  render() {
    return (       
      <MDBContainer>
        <MDBRow>
          {this.newPokemon()}
        <h1>Pokemon Database</h1>
        <table className="pokemon-table">
          <tbody>
          <tr className='table-header'>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
          {/* iterate all objects in the pokemons object */}

          {this.state.pokemons.map(pokemons =>  <React.Fragment key={pokemons.id}>    
            <tr>
                  <td className='table-name-narrow'>
                    {pokemons.name}
                  </td>
                  <td>
                      {pokemons.description}
                  </td>
                  <td className='table-name-narrow'>
                  <button className="btn btn-danger rounded-0 delete" type="button" data-toggle="tooltip" data-placement="top" title="Delete" 
                          name="name" value={pokemons.name} onClick={e => this.deletePokemon(e)}>
                    <i className="fa fa-trash" name="name" value={pokemons.name} onClick={e => this.deletePokemon(e)}></i>
                  </button>                         
                  </td>
            </tr>
            </React.Fragment>     
           )}
          </tbody>
        </table>
        <button type="button" className="btn btn-info btn-lg add" data-toggle="modal" 
                data-target="#newPokemon">Add
        </button>
        </MDBRow>
      </MDBContainer>        
    
  );
  }
}


export default Pokemon