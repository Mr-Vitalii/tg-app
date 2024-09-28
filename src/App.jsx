
import { useEffect } from 'react';
import './App.scss'

import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "./api-clients";
import { useTelegram } from '../hooks/useTelegram';

import { Button } from './components/Button/Button';
import { Header } from './components/Header/Header';

useTelegram

const data = {
    "email": "222@gmail.com",
    "password": "123456",
    "firstName": "vitto2",
    "lastName": "gugu2"
}

function App() {
    
  const {onToggleButton, tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [])
    
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
    
  }
  

  return (
    <>
      <div className='App'>
        <Header />
        <div className='app-btn'>
          <Button onClick={onSend}>Отправить данные</Button>
        </div>
        
        {/* <button onClick={onToggleButton}>toggle</button> */}
      </div>
    </>
  )
}

export default App
