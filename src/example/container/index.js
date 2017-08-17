import React, {Component} from 'react';
import {configStore} from '../store/index';
import {reducer} from '../reducers/index';
import {connect} from 'react-redux';
import * as Types from '../actions-types/Types';
import {actions} from '../actions/action';

class App extends Component {
  render() {
    return (
      <div>
        <p>{this.props.count}</p>
        <button onClick={this.props.onIncrease}>+</button>
        <button onClick={this.props.onDecrease}>-</button>
      </div>
    )
  }
};

export default connect(
  state => {
    return {
      count: state.reducer.count
    }
  },
  dispatch => {
    return {
      onIncrease: () => dispatch({type: Types.ADD, data: 3}),
      onDecrease: () => dispatch({type: Types.DECREASE, data: -2})
    }
  }
)(App);