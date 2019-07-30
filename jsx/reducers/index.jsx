import { combineReducers } from 'redux';

const message = (state, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        message: action.message,
      }
    default:
      return state;
  }
  return state;
}
const messages = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [
        ...state,
        message(undefined, action)
      ]
    default:
      return state
  }
}
export default combineReducers({ messages });
