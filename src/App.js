import React from 'react';
import NavBar from './components/NavBar';
import PokeContainer from './components/PokeContainer'
import './App.css';
let data = require('./originalNine.json');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: data.pokemon
    }
    // We would need to bind the `this` keyword if handleSearch was a regular function declaration, not an arrow function
    // this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch = (e) => {
    let pokemon = data.pokemon;

    if (e.target.value) {
      pokemon = pokemon.filter(p => {
        return p.name.includes(e.target.value)
      });
    }

    this.setState({ pokemon })
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <h1>Pokedex</h1>
        <PokeContainer 
          pokemon={ this.state.pokemon }
          handleSearch={ this.handleSearch }
        />
      </div>
    );
  }
}

export default App;
