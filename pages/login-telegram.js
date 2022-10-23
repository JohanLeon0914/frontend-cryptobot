import React from 'react'
import TelegramLoginButton from 'react-telegram-login';
 
const handleTelegramResponse = response => {
  console.log(response);
};

function loginTelegram() {
  return (
    <div>
      <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="ngrok" />
    </div>
  )
}

export default loginTelegram
