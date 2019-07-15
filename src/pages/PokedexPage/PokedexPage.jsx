import React, { Component } from 'react';
import AddPokemonForm from '../../components/AddPokemonForm/AddPokemonForm';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import userService from '../../utils/userService';
import './PokedexPage.css';


// more components to render the list of pokemon
class PokedexPage extends Component {
	state = {
		pokemon: [],
		message: ''
	};

	handlePokemonListUpdate = (pokemonArray) => {
		this.setState({ pokemon: pokemonArray, message: '' });
	}

	handleRemovePokemon = async (id) => {
		let pokemon = await userService.removePokemon(id);
		this.handlePokemonListUpdate(pokemon);
	}

	sendErrMsg = () => {
		this.setState({ message: 'Pokémon Does Not Exist' });
	}

	// check if idNum is a string or number? / check is array is not emptyXX / add to setState functions / update model properties
	sortPokemon = (arr) => {
		if (arr.length > 1) {
			arr.sort(function(a, b) {
				return a.idNum - b.idNum;
			});
		}
		return arr;
	}


	/*---------- Lifecycle Methods ----------*/

	async componentDidMount() {
		let foundPokemon = await userService.getAllPokemon();
		this.handlePokemonListUpdate(foundPokemon);
	}

	render() {
		const cards = this.state.pokemon.map((onePokemon) => (
			<PokemonCard key={onePokemon._id} pokemon={onePokemon} handleRemovePokemon={this.handleRemovePokemon} />
		));

		return (
			<div className="PokedexPage container">
				<AddPokemonForm handlePokemonListUpdate={this.handlePokemonListUpdate} sendErrMsg={this.sendErrMsg} />
				{this.state.message ? <p>{this.state.message}</p> : null}
				<hr />
				{this.state.pokemon.length ? <div className="PokemonCards">{cards}</div> : <h4 className="text-muted">No Pokémon Added</h4>}
			</div>
		);
	}
}

export default PokedexPage;

