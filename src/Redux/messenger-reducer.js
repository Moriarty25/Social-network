const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  dialogs: [
    { id: 1, name: "Shane Wright", content: "Привет!" },
    { id: 2, name: "Yuriy Surikat", content: "Canada" },
    { id: 3, name: "Petr Smart", content: "Good day!!!" },
    { id: 4, name: "Igor security", content: "ahahahha" },
    { id: 5, name: "Obi-Wan Kenobi", content: "angree birfs" },
    { id: 6, name: "John Snow", content: "What's up?" },
    { id: 7, name: "Dawson Mercer", content: "Are you sure?" },
  ],
  messages: [
    { id: 1, message: "Houston, State Texas" },
    { id: 2, message: "Seul" },
    { id: 3, message: "Boston, lalala" },
    { id: 4, message: "california, San-Jose" },
    { id: 5, message: "Hi !" },
  ],
  newMessageText: "",
}

export const messengerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {

      let newMessage = {
        id: 0,
        message: state.newMessageText,
      };

      // if (stateClone.newMessageText !== "") {
        return  {
          ...state,
          newMessageText:  "",
          messages: [...state.messages, newMessage ]
        // };
      }
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      return  {
        ...state,
        newMessageText: action.newMessage
      };
    }
    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage: text,
});