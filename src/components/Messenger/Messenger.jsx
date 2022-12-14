import "react-router-dom";
import { Dialog } from "./Dialog/Dialog";
import { Message } from "./Message/Message";
import "./Messenger.css";
import { Icon20Attach } from "@vkontakte/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessageActionCreator, updateNewMessageActionCreator } from "../../Redux/messenger-reducer";

export const Messenger = ({newMessageText, onAddMessage, updateNewMessage, messengerPage}) => {
  // const { dialogs, messages, newMessageText} = useSelector((state) => state.messengerPage);
  // const dispatch = useDispatch()
  // HOOKS
  const { dialogs, messages } = messengerPage;

  let dialogElements = dialogs.map((dialog) => (
    <Dialog
      key={dialog.id}
      name={dialog.name}
      id={dialog.id}
      content={dialog.content}
    />
  ));

  let messageElements = messages.map((message) => (
    <Message key={message.id} message={message.message} />
  ));

  let newMessageElement = React.createRef();

 

  let onSend = () => {
    onAddMessage();
  };

  let onChange = () => {
    let text = newMessageElement.current.value;
    updateNewMessage(text);
  };
  // function onSend() {
  //   messages.push({ id: messages[messages.length - 1].id + 1, message: "New" });
  // }

  return (
    <div className="messages__wrapper">
      <div className="dialogs">
        <div className="dialogs__header">My dialogs ...</div>
        {dialogElements}
      </div>
      <div className="chat">
        <div className="chat__name">Yuriy Surikat</div>
        <div className="chat__wrapper">
          {messageElements}
          <div className="chat__message chat__message--me">OTTAWA</div>
        </div>
        <div className="chat__footer">
          <button className="chat__attach">
            <Icon20Attach />
          </button>
          <input
            className="chat__input"
            onChange={onChange}
            value={newMessageText}
            placeholder="Сообщение"
            ref={newMessageElement}
          ></input>
          <button onClick={onSend} className="chat__btn-send">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
