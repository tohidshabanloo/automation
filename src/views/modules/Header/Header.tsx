import type { FC } from "react";
import styles from "./Header.module.css";

const Header: FC = () => {
  return (
    <div className={styles.bg}>
      <header className={styles.headerRoot}>
        <div className={styles.headerTitle}>
          <h3>اطلاعات پرواز فرودگاه‌های کشور</h3>
          <p className={styles.details}>
            فرودگاه شهر مورد نظر را پیدا کنید تا از آخرین اطلاعات پروازهای آن
            مطلع شوید
          </p>
        </div>
      </header>
    </div>
  );
};

export default Header;
