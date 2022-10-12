import styles from "./Actions.module.css";

export const Actions = (props) => {
  return (
      <div className={styles.actions}>
        <button className="like">{props.amountLikes} like</button>
        <button className="commemt">commemt</button>
        <button className="follow">==..</button>
      </div>
  );
};
