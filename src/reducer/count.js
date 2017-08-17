import * as Types from '../types';

export function count(state = {number: 0}, action) {
  switch (action.type) {
    case Types.ADD:
      return {number: state.number + action.data};
      break;
    case Types.DECREASE:
      return {number: state.number + action.data}
      break;
    default:
      return {number: state.number}
      break
  }
}