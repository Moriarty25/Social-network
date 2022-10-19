import "react-router-dom";
import { Dialog } from "./Dialog/Dialog";
import { Message } from "./Message/Message";
import "./Messenger.css";
import { Icon20Attach } from '@vkontakte/icons';

export const Messenger = ({ state}) => {
  const { dialogs, messages } = state;

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
        <div className="chat__wrapper">{messageElements}
        <div className="chat__message chat__message--me">OTTAWA</div>
        </div>
        <div className="chat__footer">
          <button className="chat__attach"><Icon20Attach/></button>
          <input className="chat__input" placeholder="Сообщение"></input>
          <button className="chat__btn-send">Send</button>
        </div>
      </div>
    </div>
  );
};
