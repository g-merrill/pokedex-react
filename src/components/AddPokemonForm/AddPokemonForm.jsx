import React, { Component } from 'react';
import { getPokemonInfo } from '../../utils/pokeAPI';
import userService from '../../utils/userService';

class AddPokemonForm extends Component {

	state = {
		name: '',
		idNum: null,
		abilities: [],
		types: [],
		imgURL: '',
		location: '',
		species: '',
		stats: []
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	// add try catch block?
	handleSubmit = async (e) => {
		e.preventDefault();
		// 404 Error for not found pokemon
		let singlePokemonInfo = await getPokemonInfo(this.state.name);
		if (singlePokemonInfo) {
			// will there be pokémon without these attributes? [x]
			this.setState({
				idNum: singlePokemonInfo.id,
				abilities: singlePokemonInfo.abilities,
				types: singlePokemonInfo.types,
				imgURL: singlePokemonInfo.sprites.front_default,
				location: singlePokemonInfo.location_area_encounters,
				species: singlePokemonInfo.species.url,
				stats: singlePokemonInfo.stats
			});
			let pokemon = await userService.addPokemon(this.state);
			this.props.handlePokemonListUpdate(pokemon);
		} else {
			this.props.sendErrMsg();
		}
		// add more calls to fetch
		this.setState({
			name: '',
			idNum: null,
			abilities: [],
			types: [],
			imgURL: '',
			location: '',
			species: '',
			stats: []
		});
	}

	render() {
		return (
			<div>
				<form className="form-horizontal" onSubmit={this.handleSubmit} autoComplete="off">
					<div className="form-group">
						<div className="col-sm-12">
							<label>Add a Pokémon:</label>
							<input required type="text" className="form-control" placeholder="Pokémon Name" value={this.state.name} name="name" onChange={this.handleChange} />
						</div>
					</div>
					<div className="form-group">
						<div className="col-sm-12">
							<button className="btn btn-primary">Add</button>&nbsp;&nbsp;
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default AddPokemonForm;

