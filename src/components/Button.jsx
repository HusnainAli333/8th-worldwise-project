/* eslint-disable react/prop-types */

import styles from "../css/components/Button.module.css";

function Button({ children, type, onclick }) {
  return (
    <button className={`${styles.btn} ${styles[type]}`} onClick={onclick}>
      {children}
    </button>
  );
}

export default Button;
