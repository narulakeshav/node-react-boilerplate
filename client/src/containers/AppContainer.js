/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

/**
 * Internal Dependencies
 */
import { fetchUser } from '../actions';
import ScrollTop from '../utils/ScrollTop';

// Components/Containers
import HomeContainer from '../containers/HomeContainer';

/**
 * AppContainer Container
 * @desc: provide all the routes using react-router-dom
 */
class AppContainer extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <Router>
        <ScrollTop>
          <div>
            <Switch>
              <Route path="/" component={HomeContainer} />
            </Switch>
          </div>
        </ScrollTop>
      </Router>
    );
  }
}

// Map Redux State to Props
const mapStateToProps = ({ user }) => ({ user });

// Export
export default connect(mapStateToProps, { fetchUser })(AppContainer);
