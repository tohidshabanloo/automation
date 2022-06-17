import React from "react";
import Input from "../../sharedUI/Input";
import styles from "./AdminTemplate.module.css";

const AdminTemplate = () => {
  return (
    <div className={styles.adminContainer}>
      <div style={{ width: "50%", margin: "auto" }}>
        <Input placeholder="کاربر مورد نظر را انتخاب کنید" />
      </div>
    </div>
  );
};

export default AdminTemplate;
