/**
 * External Dependencies
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk'; // allows us to use async/await


/**
 * Internal Dependencies
 */
import './scss/bulma.min.css';
import './scss/app.css';
import App from './containers/AppContainer';
import reducers from './reducers/';
import { loadState, saveState } from './utils/localStorage';

/**
 * Local Variables
 */
// Create Instance of Redux Store
// In the params, pass in reducers
const persistedState = loadState();
const store = createStore(
  reducers,
  persistedState,
  applyMiddleware(reduxThunk)
);

// Every time state changes, update localStorage value
store.subscribe(() => {
  saveState({
    user: store.getState().user,
  });
});

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('app')
);
