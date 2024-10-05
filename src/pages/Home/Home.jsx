import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../../api-clients";


import { useTelegram } from "../../../hooks/useTelegram";
import { Button } from "../../components/Button/Button"



const data = {
  email: "222@gmail.com",
  password: "123456",
  firstName: "vitto2",
  lastName: "gugu2",
};

export const Home = () => {
    const { onToggleButton, tg } = useTelegram();

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
       
        <div className="app-btn">
          <Button onClick={onSend}>Отправить данные</Button>
        </div>

        {/* <button onClick={onToggleButton}>toggle</button> */}
      </div>
    </div>
  )
}
