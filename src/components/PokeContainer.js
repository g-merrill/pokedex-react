import React, { Component } from 'react';
import SearchBar from './SearchBar';
import PokeCard from './PokeCard';

class PokeContainer extends Component {
  render() {
    let pokemon = this.props.pokemon.map(poke => <PokeCard />);

    return (
      <div>
        PokeContainer  
        <SearchBar />
        
        { pokemon }
      </div>
    );
  }
}

export default PokeContainer;