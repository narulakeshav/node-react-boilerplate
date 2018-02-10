/**
 * External Dependencies
 */
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

/**
 * Internal Reducers
 */
import userReducer from './userReducer';

/**
 * Any key provided here will be represented
 * in the Redux Store which can be accessed
 * by Containers via the connect wrapper with
 * the mapStateToProps function parameter.
 */
const rootReducer = combineReducers({
  user: userReducer,
  form: formReducer
});

// Exporting root reducer
export default rootReducer;
