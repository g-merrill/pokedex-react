import React, { Component } from 'react';
import AddPokemonForm from '../../components/AddPokemonForm/AddPokemonForm';
import userService from '../../utils/userService';


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
		const pokemonTiles = this.state.pokemon.map((onePokemon) => (
			<div key={onePokemon._id}>
				<img src={onePokemon.imgURL} alt={onePokemon.name} />
				<ul>
					<li>Name: {onePokemon.name}</li>
					<li>Type (one): {onePokemon.types[0].type.name}</li>
					<li>Ability (one): {onePokemon.abilities[0].ability.name}</li>
				</ul>
				<button className="btn btn-danger" onClick={() => this.handleRemovePokemon(onePokemon._id)}>Remove</button>
			</div>
		));

		return (
			<div className="PokedexPage">
				<AddPokemonForm handlePokemonListUpdate={this.handlePokemonListUpdate} sendErrMsg={this.sendErrMsg} />
				{this.state.message ? <p>{this.state.message}</p> : null}
				<hr />
				{this.state.pokemon.length ? <div>{pokemonTiles}</div> : <h4>No Pokémon Added</h4>}
			</div>
		);
	}
}

export default PokedexPage;

