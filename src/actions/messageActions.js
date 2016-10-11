import * as types from './actionTypes';

export default {
  addMessage(message) {
    return { type: types.ADD_MESSAGE, message };
  },
};
