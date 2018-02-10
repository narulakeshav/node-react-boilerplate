/**
 * External Dependencies
 */
import { Component } from 'react';
import { withRouter } from 'react-router-dom';

/**
 * ScrollToTop Component
 *
 * Scrolls the page to top on route change
 */
class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

// Export
export default withRouter(ScrollToTop);
