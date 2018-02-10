/**
 * @file: userRoutes.js
 * @desc: Contains routes to fetch user's information,
 * create a student, getting a list of students in a
 * class, fetching user by its username, and creating
 * a professor.
 */

/**
 * External Dependencies
 */
import mongoose from 'mongoose';
import crypto from 'crypto';

/**
 * Internal Dependencies
 */
import userIsLoggedIn from '../middlewares/userIsLoggedIn';

/**
 * Local Variables
 */
const User = mongoose.model('User');

const DEFAULT_USER_ICON = 'https://s3-us-west-1.amazonaws.com/homeroom-sjsu/user.png';

/**
 * Creates user routes
 * @param {Object} app
 */
const userRoutes = (app) => {
	/**
   * Get Current User's Information
   * @return User
   */
	app.get('/api/user', userIsLoggedIn, async (req, res) => {
		try {
			const user = await User.findById(req.user.id);

			res.send(user);
		} catch (err) {
			res.send({});
		}
	});

	/**
   * Creates a User
   * @return User
   */
	app.post('/api/user', async (req, res) => {
		const serializedUser = {
			name: 'Keshav Narula',
			email: 'narulakeshav13@gmail.com',
			password: 'Knarula97',
			username: 'keshav',
			photo: DEFAULT_USER_ICON
		};

		try {
			res.send(serializedUser);
		} catch (err) {
			res.status(500).send('Error occured during registeration.');
		}
	});

	/**
   * Creates a reset password token for user and sends it to them
   * in an email
   *
   * @return User
   */
	app.post('/api/user/reset/password', async (req, res) => {
		try {
			const hashedToken = crypto.randomBytes(20);
			const token = hashedToken.toString('hex');

			// Find User
			const userExists = await User.findOne({
				email: req.body.email
			});

			// Reset Password, Update User
			userExists.resetPasswordToken = token;
			await userExists.save();
			res.send(userExists);
		} catch (err) {
			res.status(500).send('Something went wrong. Please Try Again.');
		}
	});
};

// Export
export default userRoutes;
