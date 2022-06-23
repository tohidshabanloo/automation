import { FC } from "react";
import LoginHeader from "../sharedUI/LoginHeader/Header/LoginHeader";
import LoginTemplate from "../templates/LoginTemplate/LoginTemplate";

const LoginLayout: FC = () => {
  const clickHandler = () => {
    console.log("hello");
  };
  return (
    <div>
      <LoginHeader />
      <LoginTemplate />
    </div>
  );
};

export default LoginLayout;
