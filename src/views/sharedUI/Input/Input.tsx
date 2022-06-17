import { FC } from "react";
import styles from "./Input.module.css";

interface typeInput {
  type?: string;
  placeholder?: string;
}

const Input: FC<typeInput> = (props) => {
  return (
    <input
      className={styles.input}
      type={props.type}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
