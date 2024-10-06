import { Link } from "react-router-dom";
import { useTelegram } from "../../../hooks/useTelegram";
import { Button } from "../Button/Button";

import logo from '../../assets/logo.svg';

import styles from "./Header.module.scss";

export const Header = () => {
  const { onClose } = useTelegram();

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Link  to="/">
           <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className={styles.header__actions}>
       
        <div className={styles.header__link}>
            <Link
              to="/product"
            >
              Продукция
            </Link>
        </div>
      </div>
       <div>
        <Button className={styles.header__btn} onClick={onClose}>X</Button>
        </div>
    </header>
  );
};
