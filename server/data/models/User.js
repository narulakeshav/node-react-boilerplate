/**
 * @file: Student.js
 * @desc: Creates a Student schema. Creates a Student
 * instance of the user.
 */

/**
 * External Dependencies
 */
import mongoose from 'mongoose';
import timestamp from 'mongoose-timestamp';
import bcrypt from 'bcrypt';

/**
 * Local Variables
 */
const Schema = mongoose.Schema;

// Schema
const userSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	username: {
		type: String,
		lowercase: true,
		unique: true,
		required: true
	},
	email: {
		type: String,
		lowercase: true,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	photo: String,
	bio: String,
	resetPasswordToken: {
		type: String,
		default: null
	}
});

/**
 * The user's password is never saved in plain text. Prior to saving the
 * user model, we 'salt' and 'hash' the users password. This is a one way
 * procedure that modifies the password - the plain text password cannot be
 * derived from the salted + hashed version. See 'comparePassword' to understand
 * how this is used.
 */
userSchema.pre('save', function save(next) {
  const student = this; // eslint-disable-line

	if (!student.isModified('password')) {
		return next();
	}

	bcrypt.genSalt(10, (err, salt) => {
		if (err) {
			return next(err);
		}

    bcrypt.hash(student.password, salt, (err, hash) => { // eslint-disable-line
			if (err) {
				return next(err);
			}
			student.password = hash;
			next();
		});
	});
});

/**
 * We need to compare the plain text password (submitted whenever logging in)
 * with the salted + hashed version that is sitting in the database.
 * 'bcrypt.compare' takes the plain text password and hashes it, then compares
 * that hashed password to the one stored in the DB.  Remember that hashing is
 * a one way process - the passwords are never compared in plain text form.
 */
userSchema.methods.comparePassword = function (candidatePassword) {
	return bcrypt.compareSync(candidatePassword, this.password);
};

/**
 * Updates the password
 */
userSchema.methods.changePassword = async function (oldPassword, newPassword, cb) {
  const user = this; // eslint-disable-line
	const isRightPassword = user.comparePassword(oldPassword);

	if (isRightPassword) {
		user.password = newPassword;
		await user.save();

		cb(null, user);
	} else {
		cb('Password was incorrect. Please try again.');
	}
};

// Add timestamp during creation
userSchema.plugin(timestamp);

// Create the Model & Export
mongoose.model('User', userSchema);
