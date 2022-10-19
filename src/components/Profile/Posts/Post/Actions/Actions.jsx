import styles from "./Actions.module.css";
import { Icon16LikeOutline } from "@vkontakte/icons";

export const Actions = (props) => {
  return (
    <div className={styles.actions}>
      <button className="like">
        {props.amountLikes}
        <Icon16LikeOutline />
      </button>
      <button className="commemt">commemt</button>
      <button className="follow">==..</button>
    </div>
  );
};
