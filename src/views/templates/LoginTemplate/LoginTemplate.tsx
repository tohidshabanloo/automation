import { FC } from "react";
import styles from "./LoginTemplate.module.css";
import Input from "../../sharedUI/Input/Input";
import Button from "../../sharedUI/Button";
import Link from "next/link";
import { useRouter } from "next/router";

const Login: FC = () => {
  const router = useRouter();

  const registerHandler = () => {
    router.push("/dashboard");
  };
  const loginHandler = () => {
    router.push("/dashboard");
  };

  return (
    <>
      {/* <h1>صفحه لاگین</h1> */}
      <div className={styles.formContainer}>
        <h1 className={styles.text}>فرم ثبت نام</h1>
        <div className={styles.form}>
          <h2 className={styles.dataInput}>ایمیل</h2>
          <Input type="ایمیل" placeholder="ایمیل را وارد کنید" />
          <h2 className={styles.dataInput}>رمز عبور</h2>
          <Input type="پسورد" placeholder="پسورد را وارد کنید" />
          <span className={styles.buttons}>
            <Button onClick={registerHandler} Children="ثبت نام" />
            <Button onClick={loginHandler} Children="ورود" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Login;
