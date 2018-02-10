/**
 * @file: index.js
 * @desc: Exports all the routing files for the
 * backend into an object
 */

/**
 * Internal Dependencies
 */
import userRoutes from './userRoutes';

/**
 * List of all routes handled by Express
 * @param {Object} app: Express Object
 */
const routes = (app) => {
	userRoutes(app);
};

// Export
export default routes;
