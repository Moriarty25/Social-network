import "./Dialog.css";

export const Dialog = (props) => {
  return (
    <div className="dialog dialog--active">
      <div className="dialog__avatar"></div>
      <div className="dialog__title">{props.title}</div>
      <div className="dialog__content">{props.content}</div>
    </div>
  );
};
