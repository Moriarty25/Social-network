import styles from "./Button.module.css";
import PropTypes from "prop-types";


export const Button = ({ children, onClick, disabled }) => {
  return (
    <button disabled={disabled} className={styles.button} onClick={onClick}> 
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
