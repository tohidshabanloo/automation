import { Children, FC } from "react";
import styles from "./Button.module.css";

interface buttonType {
  Children?: string;
  onClick?: any;
}

const Button: FC <buttonType> = (props) => {
  return (
    <button onClick={props.onClick} className={styles.button}>
      {props.Children}{" "}
    </button>
  );
};

export default Button;
