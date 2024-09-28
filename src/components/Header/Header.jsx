import { useTelegram } from "../../../hooks/useTelegram";
import { Button } from "../Button/Button";
import styles from "./Header.module.scss"

export const Header = () => {

     const {user, onClose} = useTelegram();


    return (
        <header className={styles.header}>
            <div className={styles.header__btn}>
                 <Button onClick={onClose}>Закрыть</Button>
            </div>
        
              <p className={styles.username}>
               Приветсвуем Вас,  <span className={styles.header__userName}>{user?.username}</span> .
               Мы рады что вы выбрали наш сервис.
            </p>
    </header>
    )
}
