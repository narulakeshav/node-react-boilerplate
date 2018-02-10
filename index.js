/**
 * index.js file
 * Requiring files from server folder. The index.js
 * file is declared here because when we start up
 * the project, the yarn script requires an index.js
 * file to load up. Thus, by requiring the server
 * directory, we're essentially loading up the backend
 * for the project.
 */

require('babel-core/register'); // allows import/export in node
require('babel-polyfill');

require('./server');
