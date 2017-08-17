import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Types from '../types';

class Count extends Component {
  render() {
    return (
      <div>
        <p>{this.props.number}</p>
        <button onClick={this.props.onIncrease}>+</button>
        <button onClick={this.props.onDecrease}>-</button>
      </div>
    )
  }
}

export default connect(
  state => {
    return {
      number: state.count.number
    }
  },
  dispatch => {
    return {
      onIncrease: () => dispatch({type: Types.ADD, data: 3}),
      onDecrease: () => dispatch({type: Types.DECREASE, data: -2})
    }
  }
)(Count);