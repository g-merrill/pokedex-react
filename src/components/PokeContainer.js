import React, { Component } from 'react';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Columns } from 'react-bulma-components';

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
        
        <Columns>
          { this.props.pokemon.length > 0 
            ? cards 
            : "No cards"
          }
        </Columns>
      </div>
    );
  }
}

export default PokeContainer;
