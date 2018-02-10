/**
 * @file: keys.js
 *
 * @desc: file stores the global variables for both the
 * development and production environment.
 *
 * Depending on the env, keys.js returns different
 * pair of keys and values.
 */
import devKeys from './dev';
import prodKeys from './prod';

// Decide which keys to use based on NODE_ENV
const envKeys = (process.env.NODE_ENV === 'production') ? prodKeys : devKeys;

// Export env keys
export default envKeys;
