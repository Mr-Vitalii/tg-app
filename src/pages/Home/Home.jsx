import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../../api-clients";
import styles from "./Home.module.scss"

import { useTelegram } from "../../../hooks/useTelegram";
import { Button } from "../../components/Button/Button"







const data = {
  email: "222@gmail.com",
  password: "123456",
  firstName: "vitto2",
  lastName: "gugu2",
};

export const Home = () => {
    const { user, onToggleButton, tg } = useTelegram();

    const mutation = useMutation(apiClient.register, {
    onSuccess: async () => {
      // await queryClient.invalidateQueries("validateToken");
    console.log("registration succsfull");
    },
    onError: (error) => {
      console.log(error.message);
    },
      });
    
    const onSend = () => {
    // mutation.mutate(data);
    console.log(data);
  };


  return (
      <div>
      <div className="home">
        
         <p className={styles.greetings}>
        Приветсвуем Вас,{" "}
        <span className={styles.header__userName}>{user?.username}</span> . Мы
        рады что вы выбрали наш сервис.
      </p>
       
        <div className="app-btn">
          <Button onClick={onSend}>Отправить данные</Button>
        </div>

        {/* <button onClick={onToggleButton}>toggle</button> */}
      </div>
    </div>
  )
}
