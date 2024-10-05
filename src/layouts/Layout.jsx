import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import styles from "./Layout.module.scss";

export const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
       <div className={styles.container}>
        {children}
      </div>
      <Footer />
    </div>
  );
};
