import React from 'react';
import './PokemonCard.css';

const PokemonCard = (props) => {
	// build a list for an object property?
	// CSS FLEX Row and wrap and fix width
	const typeList = props.pokemon.types.map((type) => (
		type.type.name[0].toUpperCase() + type.type.name.substring(1) + ' | '
	));
	const abilityList = props.pokemon.abilities.map((ability) => (
		ability.ability.name[0].toUpperCase() + ability.ability.name.substring(1) + ' | '
	));

	return (
		<div className="PokemonCard card">
			<img className={"card-img-top " + props.pokemon.types[0].type.name} src={props.pokemon.imgURL} alt={props.pokemon.name} />
			<div className="card-body">
				<h5 className="card-title">Name:</h5>
				<p className="card-text">{props.pokemon.name.toUpperCase()}</p>
				<button className="btn btn-sm btn-danger" onClick={() => props.handleRemovePokemon(props.pokemon._id)}>Remove</button>
			</div>
			<ul className="list-group list-group-flush">
				<li className="list-group-item">Types: | {typeList}</li>
				<li className="list-group-item">Abilities: | {abilityList}</li>
			</ul>
		</div>
	);
};

export default PokemonCard;