const BASE_URL = 'https://pokeapi.co/api/v2';

export function getPokemonInfo(nameInput) {
	nameInput = nameInput.toLowerCase();
	return fetch(`${BASE_URL}/pokemon/${nameInput}/`, { mode: 'cors' })
	.then(res => {
		if (res.ok) return res.json();
	})
	.catch(function(err) {
		// check
		console.log('Pokémon Not Found');
	});
}