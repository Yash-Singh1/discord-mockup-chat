import React from 'react';
import { POST_MESSAGE } from './constants';
import { combineReducers } from 'redux';

function messages(state = [{ text: 'whats ur name kid?', author: 'yash bully' }], action) {
  switch (action.type) {
    case POST_MESSAGE:
      if (state[state.length - 1].author === action.author) {
        return [
          ...state.slice(0, -1),
          {
            ...state[state.length - 1],
            text: [
              <React.Fragment key={state.length - 1}>{state[state.length - 1].text}</React.Fragment>,
              <br key={state.length} />,
              <React.Fragment key={state.length + 1}>{action.text}</React.Fragment>,
            ],
          },
        ];
      }
      return [...state, action];
    default:
      return state;
  }
}

const rootReducer = combineReducers({ messages });

export default rootReducer;
