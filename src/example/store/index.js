import reducers from '../reducers/index';
import {createStore} from 'redux';

// let combineReducers = (reducers) => (state={}, action) => {
//   let newState = {};
//   for (let key in reducers) {
//     newState[key] = reducers[key](state[key], action);
//   }
//   return newState;
// };
//
// let reducer1 = combineReducers({
//   reducer
// });
//
// const store = createStore(reducer1);
//
// export {store};

export function configStore(initState) {
  return createStore(reducers, initState);
}