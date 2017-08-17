import React, {Component} from 'react';
import propTypes from 'prop-types';

class Provide extends Component {
  getChildContext() {
    return {store: this.props.store}
  }
  render() {
    return this.props.children;
  }
};

Provide.childContextTypes = {
  store: propTypes.object
};

export default Provide;