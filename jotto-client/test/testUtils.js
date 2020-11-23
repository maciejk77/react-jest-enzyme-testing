import rootReducer from '../src/reducers';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
};

export const findByTestAttr = (wrapper, value) =>
  wrapper.find(`[data-test="${value}"]`);
