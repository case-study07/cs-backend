import { FC } from "react";
import s from "../../styles/Footer.module.css";

const Footer: FC = () => {
  return (
    <>
      <footer className={s.footerBar}>
        <small>Copyright &copy</small>
      </footer>
    </>
  );
};

export default Footer;
