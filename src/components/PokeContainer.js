import React, { Component } from 'react';
import SearchForm from './SearchForm';
import PokeCard from './PokeCard';

class PokeContainer extends Component {
  render() {
    let cards = this.props.pokemon.map((p, idx) => {
      return (
        <PokeCard 
          key={idx}
          name={p.name}
          types={p.types}
          avatar={p.sprites.front_shiny}
        />
      );
    })

    return (
      <div>
        <h3>Poke container</h3>
        <SearchForm 
          handleSearch={ this.props.handleSearch }
        />
        
        { cards }
      </div>
    );
  }
}

export default PokeContainer;
