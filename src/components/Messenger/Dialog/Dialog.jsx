import { NavLink } from "react-router-dom";
import "./Dialog.css";

export const Dialog = ({ id, name, content }) => {
  return (
    <NavLink
      to={String(id)}
      className={(navData) => (navData.isActive ? "dialog__and__active" : "")}
    >
      <div className="dialog dialog--active">
        <div className="dialog__avatar"></div>
        <div className="dialog__title">{name}</div>
        <div className="dialog__content">{content}</div>
      </div>
    </NavLink>
  );
};
