/**
 * This file will contain all the action that
 * will be requested via the containers to either
 * fetch or provide data and updateing the data
 * within the reducers.
 */

/**
* External Dependencies
*/
import axios from 'axios';

/**
 * Internal Dependencies
 */
import { FETCH_USER } from './types';

/**
 * Gets the information of the current user that is
 * logged in.
 */
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/user');
  dispatch({ type: FETCH_USER, payload: res.data });
};
