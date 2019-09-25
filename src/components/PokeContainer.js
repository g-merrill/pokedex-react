import React, { Component } from 'react';
import PokeCard from './PokeCard';

class PokeContainer extends Component {
  render() {
    let pokemon = this.props.pokemon.map(poke => {
      return(
        <PokeCard
          key={poke.id}
          id={poke.id}
          name={poke.name}
          typesArray={poke.types}
          height={poke.height}
          weight={poke.weight}
          backImage={poke.sprites.back_shiny}
          frontImage={poke.sprites.front_shiny}
        />
      )
    });

    return (
      <div>
        PokeContainer  

        { pokemon }
      </div>
    );
  }
}

export default PokeContainer;