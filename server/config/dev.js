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
const MONGO_URI = 'mongodb://admin:node-react-boilerplate@ds131258.mlab.com:31258/node-react-boilerplate';
const COOKIE_SECRET = 'helloworld';

export default {
	MONGO_URI,
	COOKIE_SECRET
};
