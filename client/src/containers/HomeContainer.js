/**
 * External Dependencies
 *
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * Internal Dependencies
 *
 */
import { fetchUser } from '../actions';
import Home from '../components/Home';

/**
 * HomeContainer
 * Displays the Home Screen
 */
class HomeContainer extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const { user } = this.props;
    return (
      <Home
        user={user || {}}
      />
    );
  }
}

// Map Redux State to Props
const mapStateToProps = ({ user }) => ({ user });

// Export
export default connect(mapStateToProps, { fetchUser })(HomeContainer);
