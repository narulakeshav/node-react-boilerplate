/**
 * @file localStorage.js
 * @desc: Persists Redux data on refresh by storing
 * the defined data in the localStorage
 *
 * @since 11/1/2017
 */

/**
 * loadState from localStorage to redux store when
 * app reloads
 */
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Error has occured while loading state from localStorage');
  }
}

/**
 * Saves Data to localStorage object for later data
 * retrival
 *
 * @param {Object} state: Redux State
 */
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.error('Error has occured while saving to localStorage');
  }
}
