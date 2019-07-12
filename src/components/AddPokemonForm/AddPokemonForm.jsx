import React, { Component } from 'react';
import userService from '../../utils/userService';
// add Bootstrap CDN

class AddPokemonForm extends Component {

	state = {
		name: ''
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	// add try catch block?
	handleSubmit = async (e) => {
		e.preventDefault();
		let pokemon = await userService.addPokemon(this.state);
		// add if block for below?
		this.props.handlePokemonListUpdate(pokemon);
		this.setState({ name: '' });
	}

	render() {
		return (
			<div>
				<header className="header-footer">Add a Pokémon!</header>
				<form className="form-horizontal" onSubmit={this.handleSubmit} autoComplete="off">
					<div className="form-group">
						<div className="col-sm-12">
							<input required type="text" className="form-control" placeholder="Pokémon Name" value={this.state.name} name="name" onChange={this.handleChange} />
						</div>
					</div>
					<div className="form-group">
						<div className="col-sm-12 text-center">
							<button className="btn btn-default">Add</button>&nbsp;&nbsp;
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default AddPokemonForm;

