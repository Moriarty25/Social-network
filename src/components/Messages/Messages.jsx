import "react-router-dom";
import { Dialog } from "./Dialog/Dialog";
import { Message } from "./Message/Message";
import "./Messages.css";

export const Messages = () => {
  let dialogs = [
    { id: 1, name: "Shane Wright", content: "Привет!" },
    { id: 2, name: "Yuriy Surikat", content: "Canada" },
    { id: 3, name: "Petr Smart", content: "Good day!!!" },
    { id: 4, name: "Igor security", content: "ahahahha" },
    { id: 5, name: "Obi-Wan Kenobi", content: "angree birfs" },
    { id: 6, name: "John Snow", content: "What's up?" },
    { id: 7, name: "Dawson Mercer", content: "Are you sure?" },
  ];

  let messages = [
    { id: 1, message: "Houston, State Texas" },
    { id: 2, message: "Seul" },
    { id: 3, message: "Boston, lalala" },
    { id: 4, message: "california, San-Jose" },
    { id: 5, message: "Hi !" },
  ];

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

  function onSend() {
    messages.push({ id: messages[messages.length - 1].id + 1, message: "New" });
  }

  return (
    <div className="messages__wrapper">
      <div className="dialogs">
        <div className="dialogs__header">My dialogs ...</div>
        {dialogElements}
      </div>
      <div className="chat">
        <div className="chat__name">Yuriy Surikat</div>
        <div className="chat__wrapper">{messageElements}</div>
        <div className="chat__footer">
          <div className="chat__attach">S</div>
          <input className="chat__input" placeholder="Сообщение"></input>
          <button className="chat__btn-send" onClick={onSend}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
