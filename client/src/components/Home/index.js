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
      <div className="column is-8 is-offset-2">
        <h1>Getting Started</h1>
        <p>
          This is a <code>node-react-boilerplate</code> to get you started with the right way to setup your Node/Express, React/Redux, and Mongo projects.
          <br/><br/>
          Read the <a href="https://github.com/narulakeshav/node-react-boilerplate/blob/master/README.md" target="_blank" rel="noopener noreferrer">README.md file on GitHub</a> to understand how the boilerplate works.
        </p>
      </div>
    </div>
  </div>
);

// Export
export default Home;
