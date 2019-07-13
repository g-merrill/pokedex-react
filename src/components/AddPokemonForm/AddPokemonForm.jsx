import React, { Component } from 'react';
import { getPokemonInfo } from '../../utils/pokeAPI';
import userService from '../../utils/userService';

class AddPokemonForm extends Component {

	state = {
		name: '',
		abilities: [],
		types: [],
		imgURL: ''
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	// add try catch block?
	handleSubmit = async (e) => {
		e.preventDefault();
		// will error if pokemon is bad?
		let singlePokemonInfo = await getPokemonInfo(this.state.name);
		if (singlePokemonInfo) {
			// will there be pokémon without these attributes?
			this.setState({
				abilities: singlePokemonInfo.abilities,
				types: singlePokemonInfo.types,
				imgURL: singlePokemonInfo.sprites.front_default
			});
			let pokemon = await userService.addPokemon(this.state);
			this.props.handlePokemonListUpdate(pokemon);
		} else {
			this.props.sendErrMsg();
		}
		// if found pokemon info, then set state with pertinent info --> add to db --> update Schema and delete current subdocs in ATLAS --> render on page
		// add more calls to fetch
		// add if block for below handle update? [x]
		this.setState({
			name: '',
			abilities: [],
			types: [],
			imgURL: ''
		});
	}

	render() {
		return (
			<div>
				<form className="form-horizontal" onSubmit={this.handleSubmit} autoComplete="off">
					<div className="form-group">
						<div className="col-sm-12">
							<label for="name">Add a Pokémon:</label>
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

