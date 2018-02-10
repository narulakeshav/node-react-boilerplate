/**
 * External Dependencies
 */
import mongoose from 'mongoose';
import passport from 'passport';
import LocalStrategy from 'passport-local';

/**
 * Local Variables
 */
const User = mongoose.model('User');

/**
 * SerializeUser is used to provide some identifying token that can be saved
 * in the users session.  We traditionally use the 'ID' for this.
 */
passport.serializeUser((user, done) => {
	done(null, user.id);
});

/**
 * The counterpart of 'serializeUser'.  Given only a user's ID, we must return
 * the user object.  This object is placed on 'req.user'.
 */
passport.deserializeUser((user, done) => {
	User.findById(user.id, (err, userFound) => {
		done(err, userFound);
	});
});

/**
 * Instructs Passport how to authenticate a user using a locally saved email
 * and password combination. This strategy is called whenever a user attempts to
 * log in. We first find the user model in MongoDB that matches the submitted email,
 * then check to see if the provided password matches the saved password. There
 * are two obvious failure points here: the email might not exist in our DB or
 * the password might not match the saved one. In either case, we call the 'done'
 * callback, including a string that messages why the authentication process failed.
 * This string is provided back to the GraphQL client.
 */
passport.use(new LocalStrategy({
	usernameField: 'email',
	passReqToCallback: true
},
async (req, email, password, done) => {
	const userFound = await Student
		.findOne({ email: email.toLowerCase() });

	// If User not found or password isn't correct, return false
	if (!userFound || !userFound.comparePassword(password)) {
		return done(null, false);
	}

	// If found & password is correct, return user
	done(null, userFound);
}));
