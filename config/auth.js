const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

// added return keyword
module.exports = function(req, res, next) {
	// Check for the token being sent in three different ways
	let token = req.get('Authorization') || req.query.token || req.body.token;
	if (token) {
		// Remove the 'Bearer ' if it was included in the token header
		token = token.replace('Bearer ', '');
		// Check if token is valid and not expired
		jwt.verify(token, SECRET, function(err, decoded) {
			if (err) {
				return next(err);
			} else {
				// It's a valid token, so add user to req
				req.user = decoded.user;    
				return next();
			}
		});
	} else {
		return next();
	}
};