/**
 * @file: dev.js
 * @desc: contains developer keys for any external 3rd party
 * package or library we use
 *
 * @see: prod.js for production keys
 */

/**
 * Local Variables
 */
const MONGO_URI = 'mongodb://homeroom-dev:h0m3r88m1234!@ds115035.mlab.com:15035/homeroom-dev';
const COOKIE_SECRET = 'helloworld';

export default {
	MONGO_URI,
	COOKIE_SECRET
};
