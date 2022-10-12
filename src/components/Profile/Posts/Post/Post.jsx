import { Actions } from "./Actions/Actions";
import styles from "./Post.module.css";

export const Post = (props) => {
  return (
    <div className={styles.post__wrap}>
      <img
        src="data:image/jpeg;base64,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"
        alt="ava"
        className={styles.avatar}
      />
      <div className={styles.name}>Cheburashka</div>
      <div className={styles.content}>{props.message}</div>
      <Actions amountLikes = {props.amountLikes}/> 
    </div>
  );
};
