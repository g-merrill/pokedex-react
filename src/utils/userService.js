import tokenService from './tokenService';

const BASE_URL = '/api/users/';

function signup(user) {
	return fetch(BASE_URL + 'signup', {
		method: 'POST',
		headers: new Headers({'Content-Type': 'application/json'}),
		body: JSON.stringify(user)
	})
	.then(res => {
		if (res.ok) return res.json();
		// Probably a duplicate email
		throw new Error('Email already taken!');
	})
	.then(({token}) => {
		tokenService.setToken(token); // ??
	});
}


function login(creds) {
	return fetch(BASE_URL + 'login', {
		method: 'POST',
		headers: new Headers({'Content-Type': 'application/json'}),
		body: JSON.stringify(creds)
	})
	.then(res => {
		// Valid login if we have a status of 2xx (res.ok)
		if (res.ok) return res.json();
		throw new Error('Bad Credentials!');
	})
	.then(({token}) => {
		tokenService.setToken(token);
	});
}


function getUser() {
	return tokenService.getUserFromToken();
}

function logout() {
	tokenService.removeToken();
}

function getAllPokemon() {
	const options = {
		method: 'GET',
		headers: {
			'Authorization': 'Bearer ' + tokenService.getToken()
		}
	};
	return fetch(BASE_URL + 'pokemon', options).then(res => res.json());
}

function addPokemon(data) {
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + tokenService.getToken()
		},
		body: JSON.stringify(data)
	};
	return fetch(BASE_URL + 'pokemon', options).then(res => res.json());
}

function removePokemon(id) {
	// convert id to string to make sure
	id = id.toString();
	const options = {
		method: 'DELETE',
		headers: {
			'Authorization': 'Bearer ' + tokenService.getToken()
		}
	};
	return fetch(BASE_URL + 'pokemon/' + id, options).then(res => res.json());
}

export default {
	signup,
	getUser,
	login,
	logout,
	getAllPokemon,
	addPokemon,
	removePokemon
};