/* eslint-disable no-console */

/**
 * External Dependencies
 */
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cookieSession from 'cookie-session';
import passport from 'passport';
import path from 'path';

/**
 * Interal Dependencies
 */
import keys from './config/keys';

/**
 * Mongoose Connection
 */
mongoose.Promise = global.Promise;

// Connect with the provided mongo URI
mongoose.connect(keys.MONGO_URI, {
	useMongoClient: true
});

// If connection fails, stop and show error
mongoose.connection.on('error', (err) => {
	console.error(`\nMongoose Connection Error: \n${err}`);
	process.exit(1);
});

/**
 * Require Models
 */
import './data/models/User';
import './services/auth';

/**
 * Local Variables
 */
const app = express();
const PORT = process.env.PORT || 8080;

// body parser middleware
app.use(bodyParser.json());

app.use(cookieParser(keys.COOKIE_SECRET));

// enable cookies here
app.use(
	cookieSession({
		resave: false,
		maxAge: 30 * (24 * 60 * 60 * 1000), // keep cookie for 30 days
		keys: [ keys.COOKIE_SECRET ] // encrypt cookie,
	})
);

// Make passport use our cookie
app.use(passport.initialize());
app.use(passport.session());

/**
 * Routes for App
 */
import routes from './routes';
routes(app);

/**
 * Handling React with Express
 *
 * In production, when the user makes a request for which the
 * routes above do not handle, we're going to send back files
 * from build as if the user is making a client side request.
 *
 * We return "index.html" file instead and from the path specified, the
 * react router will know what to show.
 */

if (process.env.NODE_ENV === 'production') {
	// Serve Production assets like css, js
	app.use(express.static('client/build'));

	// Serve index.html if it doesn't match any routes above
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html'));
	});
}

// Listen on PORT
app.listen(PORT, () => {
	console.log(`App is running on http://localhost:${PORT}`);
});
