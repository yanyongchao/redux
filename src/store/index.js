import {createStore} from 'redux';
import reducers from '../reducer/index';

export function configStore(initState) {
  return createStore(reducers, initState);
}