import { POST_MESSAGE } from './constants';
import { combineReducers } from 'redux';

function messages(state = [{ text: 'whats ur name kid?', author: 'bully' }], action) {
  switch (action.type) {
    case POST_MESSAGE:
      return [...state, action];
    default:
      return state;
  }
}

const rootReducer = combineReducers({ messages });

export default rootReducer;
