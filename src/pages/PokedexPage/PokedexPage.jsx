import React, { Component } from 'react';
import AddPokemonForm from '../../components/AddPokemonForm/AddPokemonForm';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import userService from '../../utils/userService';
import './PokedexPage.css';


class PokedexPage extends Component {
	state = {
		pokemon: [],
		message: '',
		showTypes: false,
		showAbilities: false,
		showStats: false,
		showDate: false
	};

	handlePokemonListUpdate = (pokemonArray) => {
		let sortedArray = this.sortPokemon(pokemonArray);
		this.setState({ pokemon: sortedArray, message: '' });
	}

	handleRemovePokemon = async (id) => {
		let pokemon = await userService.removePokemon(id);
		this.handlePokemonListUpdate(pokemon);
	}

	handleToggle = (e) => {
		let toggle = !this.state[e.target.name];
		this.setState({ [e.target.name]: toggle });
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
			<PokemonCard
				key={onePokemon._id}
				pokemon={onePokemon}
				handleRemovePokemon={this.handleRemovePokemon}
				showTypes={this.state.showTypes}
				showAbilities={this.state.showAbilities}
				showStats={this.state.showStats}
				showDate={this.state.showDate}
			/>
		));

		return (
			<div className="PokedexPage container">
				<AddPokemonForm handlePokemonListUpdate={this.handlePokemonListUpdate} sendErrMsg={this.sendErrMsg} />
				{this.state.message ? <p className="alert alert-danger">{this.state.message}</p> : null}
				<hr />
				{this.state.pokemon.length ?
					<>
						<div className="ToggleButtons">
							<h6>Toggle Fields:</h6>
							<button className={this.state.showTypes ? "btn btn-sm btn-outline-secondary active" : "btn btn-sm btn-outline-secondary"} name="showTypes" onClick={this.handleToggle}>Types</button>
							<button className={this.state.showAbilities ? "btn btn-sm btn-outline-secondary active" : "btn btn-sm btn-outline-secondary"} name="showAbilities" onClick={this.handleToggle}>Abilities</button>
							<button className={this.state.showStats ? "btn btn-sm btn-outline-secondary active" : "btn btn-sm btn-outline-secondary"} name="showStats" onClick={this.handleToggle}>Base Stats</button>
							<button className={this.state.showDate ? "btn btn-sm btn-outline-secondary active" : "btn btn-sm btn-outline-secondary"} name="showDate" onClick={this.handleToggle}>Date Added</button>
						</div>
						<div className="PokemonCards">{cards}</div>
					</>
					:
					<h4 className="text-muted">No Pokémon Added</h4>
				}
			</div>
		);
	}
}

export default PokedexPage;

