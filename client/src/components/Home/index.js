/**
 * External Dependencies
 */
import React from 'react';

/**
 * Internal Dependencies
 */
// Styles
import './styles.css';

/**
 * Home Stateless Component
 * @param {Object} props
 */
const Home = ({ user }) => (
  <div className="column home">
    <div className="columns is-multiline">
      <div className="column is-10 is-offset-1">
        <h1>Hello There!</h1>
        <p>
          This is a <code>node-react</code> boilerplate to get you started with the right way to setup your Node/Express, React/Redux, and Mongo projects.
        </p>
      </div>
    </div>
  </div>
);

// Export
export default Home;
