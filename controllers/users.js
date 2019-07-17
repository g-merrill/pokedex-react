const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
	signup,
	login,
	index,
	create,
	dlte
};


async function signup(req, res) {
	const user = new User(req.body);
	try {
		await user.save();
		const token = createJWT(user);
		res.json({ token });
	} catch (err) {
		// Probably a duplicate email
		res.status(400).json(err);
	}
}


async function login(req, res) {
	try {
		const user = await User.findOne({email: req.body.email});
		if (!user) return res.status(401).json({err: 'bad credentials'});
		user.comparePassword(req.body.pw, (err, isMatch) => {
			if (isMatch) {
				const token = createJWT(user);
				res.json({token});
			} else {
				return res.status(401).json({err: 'bad credentials'});
			}
		});
	} catch (err) {
		return res.status(401).json(err);
	}
}


async function index(req, res) {
	try {
		let user = await User.findOne({_id: req.user._id});
		res.status(200).json(user.pokemon);
	} catch (err) {
		return res.status(400).json(err);
	}
}


async function create(req, res) {
	try {
		let user = await User.findOne({_id: req.user._id});
		user.pokemon.push(req.body);
		user.save(function(err, user) {
			if (err) return res.status(400).json(err);
			res.status(200).json(user.pokemon);
		});
	} catch (err) {
		return res.status(400).json(err);
	}
}

async function dlte(req, res) {
	try {
		let user = await User.findOne({_id: req.user._id});
		user.pokemon.id(req.params.id).remove();
		user.save(function(err, user) {
			if (err) return res.status(400).json(err);
			res.status(200).json(user.pokemon);
		});
	} catch (err) {
		return res.status(400).json(err);
	}
}


/*----- Helper Functions -----*/

function createJWT(user) {
	// delete user.pokemon;
	user.pokemon = [];
	return jwt.sign(
		{user}, // data payload
		SECRET,
		{expiresIn: '24h'}
	);
}

