import { addMessageActionCreator, updateNewMessageActionCreator } from "../../Redux/messenger-reducer";
import { Messenger } from "./Messenger";

export const MessengerContainer = ({state, dispatch}) => {
  

  let onSend = () => {
    dispatch(addMessageActionCreator());
  };

  let onChange = (text) => {
    dispatch(updateNewMessageActionCreator(text));
  };


  return <Messenger state={state} onAddMessage={onSend} updateNewMessageText={onChange}/>;
};


