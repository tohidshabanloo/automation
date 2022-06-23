import { FC } from "react";
import Header from "../sharedUI/Header/Header";
import AdminTemplate from "../templates/AdminTemplate/AdminTemplate";

const Layout: FC = () => {
  return (
    <div>
      <Header text={" اتوماسیون"} button={"صفحه ورود"} />
      <AdminTemplate />
    </div>
  );
};

export default Layout;
