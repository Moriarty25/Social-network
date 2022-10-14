import { NavLink } from "react-router-dom";
import { Dialog } from "./Dialog/Dialog";
import { Message } from "./Message/Message";
import style from "./Messages.css";

export const Messages = () => {
  return (
    <div className="messages__wrapper">
      <div className="dialogs">
        <div className="dialogs__header">My dialogs</div>
        <NavLink to="1">
          <Dialog title="Shane Wright" content="Привет!!!" />
        </NavLink>
        <NavLink to="2">
          <Dialog title="Yuriy Surikat" content="Canada" />
        </NavLink>
        <NavLink to="3">
          <Dialog title="Petr Smart" content="Good day!!!" />
        </NavLink>
        <NavLink to="4">
          <Dialog title="Igor security" content="ahahahha" />
        </NavLink>
        <NavLink to="5">
          <Dialog title="Obi-Wan Kenobi" content="angree birfs" />
        </NavLink>
        <NavLink to="6">
          <Dialog title="John Snow" content="What's up?" />
        </NavLink>
        <NavLink to="7">
          <Dialog title="Dawson Mercer" content="Are you sure?" />
        </NavLink>
      </div>
      <div className="chat">
        <div className="chat__title">Yuriy Surikat</div>
        <div className="chat__wrapper">
          <Message text="Houston, State Texas" />
          <Message text="Seul" />
          <Message text="Boston, lalala" />
          <Message text="california, San-Jose" />
          <Message text="Hi !" />
        </div>
        <div className="chat__footer">
          <div className="chat__attach">S</div>
          <input className="chat__input" placeholder="Сообщение"></input>
          <button className="chat__btn-send">Send</button>
        </div>
      </div>
    </div>
  );
};
