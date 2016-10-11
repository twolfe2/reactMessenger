import * as types from '../actions/actionTypes';

const initialState = {
  messages: [
    {
      sender: 'A',
      reciever: 'B',
      message: 'Test this is a test ',
    },
    {
      sender: 'B',
      reciever: 'A',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus neque urna, eget fringilla ex ultricies ut. Nullam metus dui, lobortis id sem a, volutpat ullamcorper neque.',
    },
    {
      sender: 'B',
      reciever: 'A',
      message: 'Hello World ',
    },
  ],
};

export default function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_MESSAGE:
      return Object.assign({}, state, { messages: [...state.messages, action.message] });
    default:
      return state;
  }
}
