import React from 'react';
import pokeball from '../../pokeball.svg';
import './PokemonCard.css';

const PokemonCard = (props) => {
	// build lists for embedded object properties
	const typeList = props.pokemon.types.map((type) => (
		type.type.name[0].toUpperCase() + type.type.name.substring(1) + ' | '
	));
	const abilityList = props.pokemon.abilities.map((ability) => (
		ability.ability.name[0].toUpperCase() + ability.ability.name.substring(1) + ' | '
	));
	const statList = props.pokemon.stats.map((stat) => (
		stat.stat.name[0].toUpperCase() + stat.stat.name.substring(1) + ': ' + stat.base_stat + ' | '
	));

	// build date
	const created = new Date(props.pokemon.createdAt);
	const month = created.getMonth() + 1;
	const day = created.getDate();
	const year = created.getFullYear();

	return (
		<div className={"PokemonCard card " + props.pokemon.types[0].type.name}>
			{props.pokemon.imgURL ?
				<img className={"card-img-top " + props.pokemon.types[0].type.name} src={props.pokemon.imgURL} alt={props.pokemon.name} />
				:
				<img className={"card-img-top " + props.pokemon.types[0].type.name} src={pokeball} alt={props.pokemon.name} />
			}
			<button className="btn btn-sm btn-outline-dark" onClick={() => props.handleRemovePokemon(props.pokemon._id)}>X</button>
			<div className="card-body">
				<h5 className="card-title">Name:</h5>
				<p className="card-text">{props.pokemon.name.toUpperCase()}</p>
			</div>
			<ul className="list-group list-group-flush">
				<li className="list-group-item text-muted">No. {props.pokemon.idNum}</li>
				{props.showTypes ? <li className="list-group-item"><strong>Types:</strong> | {typeList}</li> : null}
				{props.showAbilities ? <li className="list-group-item"><strong>Abilities:</strong> | {abilityList}</li> : null}
				{props.showStats ? <li className="list-group-item"><strong>Base Stats:</strong> | {statList}</li> : null}
				{props.showDate ? <li className="list-group-item"><strong>Added:</strong> {month} / {day} / {year}</li> : null}
			</ul>
		</div>
	);
};

export default PokemonCard;

