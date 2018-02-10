/**
 * @file userIsLoggedIn.js
 * @desc: determines if the user requesting info
 * is authenticated/logged in or not. If it is,
 * then proceed to complete request
 */

export default function(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}

	return res.send({});
}
