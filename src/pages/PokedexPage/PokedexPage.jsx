import React, { Component } from 'react';
import AddPokemonForm from '../../components/AddPokemonForm/AddPokemonForm';

// add componentDidMount method for main getAll() && components to render the list of pokemon
class PokedexPage extends Component {
	state = {
		pokemon: []
	};

	handlePokemonListUpdate = (pokemonArray) => {
		this.setState({ pokemon: pokemonArray });
	}

	render() {
		const pokemonTiles = this.state.pokemon.map((onePokemon) => (
			<div key={onePokemon._id}>
				{onePokemon.name}
			</div>
		));

		return (
			<div className="PokedexPage">
				<AddPokemonForm handlePokemonListUpdate={this.handlePokemonListUpdate} />
				<hr />
				{this.state.pokemon.length ?
					<div>{pokemonTiles}</div>
					:
					<h4>No Pokémon Added</h4>
				}
			</div>
		);
	}
}

export default PokedexPage;