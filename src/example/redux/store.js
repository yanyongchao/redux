const createStore = (reducer) => {
  let state;
  let getState = () => state;
  let listeners = [];
  let dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(l => {
      l();
    });
  }
  let subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(_ => {
        _ !== listener;
      });
    }
  }
  return {
    getState,
    subscribe,
    dispatch
  }
};

export {createStore};