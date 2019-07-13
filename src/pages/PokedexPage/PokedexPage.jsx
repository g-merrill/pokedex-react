import React, { Component } from 'react';
import AddPokemonForm from '../../components/AddPokemonForm/AddPokemonForm';

// add componentDidMount method for main getAll() && components to render the list of pokemon
class PokedexPage extends Component {
	state = {
		pokemon: [],
		message: ''
	};

	handlePokemonListUpdate = (pokemonArray) => {
		this.setState({ pokemon: pokemonArray, message: '' });
	}

	sendErrMsg = () => {
		this.setState({ message: 'Pokémon Does Not Exist' });
	}

	render() {
		const pokemonTiles = this.state.pokemon.map((onePokemon) => (
			<div key={onePokemon._id}>
				<img src={onePokemon.imgURL} alt={onePokemon.name} />
				<ul>
					<li>Name: {onePokemon.name}</li>
					<li>Type (one): {onePokemon.types[0].type.name}</li>
					<li>Ability (one): {onePokemon.abilities[0].ability.name}</li>
				</ul>
			</div>
		));

		return (
			<div className="PokedexPage">
				<AddPokemonForm handlePokemonListUpdate={this.handlePokemonListUpdate} sendErrMsg={this.sendErrMsg} />
				{this.state.message ? <p>{this.state.message}</p> : }
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

