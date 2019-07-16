import React, { Component } from 'react';
import AddPokemonForm from '../../components/AddPokemonForm/AddPokemonForm';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import userService from '../../utils/userService';
import './PokedexPage.css';


class PokedexPage extends Component {
	state = {
		pokemon: [],
		message: ''
	};

	handlePokemonListUpdate = (pokemonArray) => {
		let sortedArray = this.sortPokemon(pokemonArray);
		this.setState({ pokemon: sortedArray, message: '' });
	}

	handleRemovePokemon = async (id) => {
		let pokemon = await userService.removePokemon(id);
		this.handlePokemonListUpdate(pokemon);
	}

	sendErrMsg = () => {
		this.setState({ message: 'Pokémon Does Not Exist' });
	}

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
				{this.state.message ? <p className="alert alert-danger">{this.state.message}</p> : null}
				<hr />
				{this.state.pokemon.length ? <div className="PokemonCards">{cards}</div> : <h4 className="text-muted">No Pokémon Added</h4>}
			</div>
		);
	}
}

export default PokedexPage;

