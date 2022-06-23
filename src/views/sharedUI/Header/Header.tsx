import { useRouter } from "next/router";
import { Children, FC } from "react";
import Button from "../Button";
import styles from "./Header.module.css";

// interface buttonType {
//   Children?: string;
//   onClick?: any;
// }
const Header: FC = (props) => {
  const router = useRouter();

  const clickHandler = () => {
    router.push("/login");
  };
  return (
    <>
      <div className={styles.container}>
        <h3>{props.text}</h3>
        <button className={styles.btn} onClick={clickHandler}>
          {props.button}
        </button>
      </div>
    </>
  );
};

export default Header;
