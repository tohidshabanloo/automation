import { useRouter } from "next/router";
import { Children, FC } from "react";

import styles from "./LoginHeader.module.css";

// interface buttonType {
//   Children?: string;
//   onClick?: any;
// }
const LoginHeader: FC = (props) => {
  const router = useRouter();

  const clickHandler = () => {
    router.push("/firstPage");
  };
  return (
    <>
      <div className={styles.container}>
        <h3>اتوماسیون</h3>
      </div>
    </>
  );
};

export default LoginHeader;
