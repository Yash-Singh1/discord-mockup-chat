import { POST_MESSAGE } from './constants';

function postMessage(message) {
  return {
    type: POST_MESSAGE,
    ...message,
  };
}

export default postMessage;
