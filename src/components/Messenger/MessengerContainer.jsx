import { connect } from "react-redux";
import { addMessageActionCreator, updateNewMessageActionCreator } from "../../Redux/messenger-reducer";
import { Messenger } from "./Messenger";


  

  // let onSend = () => {
  //   dispatch(addMessageActionCreator());
  // };

  // let onChange = (text) => {
  //   dispatch(updateNewMessageActionCreator(text));
  // };


  //

  let mapStateToProps = (state) => {
    return {
      messages: state.messengerPage.messages,
      newMessageText: state.messengerPage.newMessageText,
      messengerPage: state.messengerPage
    }
  
  }
  
  let mapDispatchToProps = (dispatch) => {
    return {
      onAddMessage: () => {
        dispatch(addMessageActionCreator())
      },
      updateNewMessage: (text) => {
        let action = updateNewMessageActionCreator(text)
        dispatch(action); 
      }
    }
  }

  export let MessengerContainer = connect( mapStateToProps, mapDispatchToProps) (Messenger);


