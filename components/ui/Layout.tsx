import { FC } from "react";
import { Footer, Header } from ".";
import  s  from "../../styles/Layout.module.css";

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <main className={s.mainRoot}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
