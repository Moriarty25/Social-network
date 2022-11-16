const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let inisialState = {
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

export const messengerReducer = (state = inisialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 0,
        message: state.newMessageText,
      };
      if (state.newMessageText !== "") {
        state.messages.push(newMessage);
        state.newMessageText = "";
      }
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newMessage;
      return state;
    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage: text,
});