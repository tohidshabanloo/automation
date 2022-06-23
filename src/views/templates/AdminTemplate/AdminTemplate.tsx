import React from "react";
import Button from "../../sharedUI/Button";
import Input from "../../sharedUI/Input";
import styles from "./AdminTemplate.module.css";
import Table from "../../sharedUI/Table/Table";

const AdminTemplate = () => {
  return (
    <>
      <div className={styles.adminContainer}>
        {/* <h1>صفحه لاگین</h1> */}
        <div className={styles.formContainer}>
          <h1 className={styles.text}>صفحه ادمین</h1>
          <div className={styles.form}>
            <h2 className={styles.dataInput}>ایمیل</h2>
            <Input type="ایمیل" placeholder="ایمیل را وارد کنید" />
            <h2 className={styles.dataInput}>رمز عبور</h2>
            <Input type="پسورد" placeholder="پسورد را وارد کنید" />
            <span className={styles.buttons}>
              <Button Children="انتخاب کنید" />
              <Button Children="ورود" />
            </span>
          </div>
        </div>
      </div>
      <div className={styles.tableContainer}>
        <Table />
      </div>
    </>
  );
};

export default AdminTemplate;
