
//action type
const ADD = 'ADD';

//action creator
const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};


//reducer
const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};


//initializing the store
const store = Redux.createStore(messageReducer);