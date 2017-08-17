import React from 'react';
import {render} from 'react-dom';
import App from './container/index';
import {configStore} from './store';
import {Provider} from 'react-redux';
const store = configStore();

// console.log(store.getState().count.number);

render(<Provider store={store}><App/></Provider>, document.querySelector('#root'));