import React from 'react';
import './PokemonCard.css';

const PokemonCard = (props) => {
	// build lists for embedded object properties
	// fix card widths
	const typeList = props.pokemon.types.map((type) => (
		type.type.name[0].toUpperCase() + type.type.name.substring(1) + ' | '
	));
	const abilityList = props.pokemon.abilities.map((ability) => (
		ability.ability.name[0].toUpperCase() + ability.ability.name.substring(1) + ' | '
	));
	const statList = props.pokemon.stats.map((stat) => (
		stat.stat.name[0].toUpperCase() + stat.stat.name.substring(1) + ': ' + stat.base_stat + ' | '
	));

	return (
		<div className={"PokemonCard card " + props.pokemon.types[0].type.name}>
			<img className={"card-img-top " + props.pokemon.types[0].type.name} src={props.pokemon.imgURL} alt={props.pokemon.name} />
			<div className="card-body">
				<h5 className="card-title">Name:</h5>
				<p className="card-text">{props.pokemon.name.toUpperCase()}</p>
				<button className="btn btn-sm btn-danger" onClick={() => props.handleRemovePokemon(props.pokemon._id)}>Remove</button>
			</div>
			<ul className="list-group list-group-flush">
				<li className="list-group-item text-muted">No. {props.pokemon.idNum}</li>
				<li className="list-group-item"><strong>Types:</strong> | {typeList}</li>
				<li className="list-group-item"><strong>Abilities:</strong> | {abilityList}</li>
				<li className="list-group-item"><strong>Base Stats:</strong> | {statList}</li>
				<li className="list-group-item"><strong>Added:</strong> {props.pokemon.createdAt.substring(5,7)} / {props.pokemon.createdAt.substring(8,10)} / {props.pokemon.createdAt.substring(0,4)}</li>
			</ul>
		</div>
	);
};

export default PokemonCard;