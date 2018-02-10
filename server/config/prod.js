/**
 * @file: prod.js
 * @desc: contains production keys for any external 3rd party
 * package or library we use
 *
 * @see: dev.js for developer keys
 */

export default {
	MONGO_URI: process.env.MONGO_URI,
	COOKIE_SECRET: process.env.COOKIE_SECRET
};
