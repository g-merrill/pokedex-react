import React from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import PokeContainer from './components/PokeContainer';
import './App.css';
let data = require('./originalNine.json');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: data.pokemon
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let pokemon = data.pokemon;

    if (e.target.value.length > 0) {
      pokemon = pokemon.filter(poke => poke.name.includes(e.target.value));
    }

    this.setState({
      pokemon
    })
  }

  render() {

    return (
      <div className="App">
        <Navbar />
        <SearchBar handleChange={ this.handleChange } />
        <PokeContainer pokemon={ this.state.pokemon } />
      </div>
    );
  }
}

export default App;
