/**
 * Internal Dependencies
 */
import { FETCH_USER } from '../actions/types';

/**
 * Gets the current logged in user
 *
 * @param {Object} state
 * @param {Object} action
 */
export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload;
    default:
      return state;
  }
}
