import React from 'react'
import styles from './Message.module.css'
import { useRouter } from "next/router"
import { useState } from "react"
import axios from 'axios'
import Swal from 'sweetalert2'

function Message() {

  const [credentials, setCredentials] = useState({
    title: '',
    body: '',
    image_link: ''
  })

  const router = useRouter()

  const handleChange = (e) => {
    setCredentials({
      ...credentials, // hago una copia de lo que tenga credentials hasta el momento
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(credentials)
    const url = "https://28ad-181-132-0-23.ngrok.io/messaging/message/diffuse"
    const response = await axios.post(url, credentials)
    if(response.status === 200) {
      Swal.fire(
        'Ok!',
        'Message was send successfully!',
        'success'
      )
    }
    
    // fetch(url, {
    //   method: 'POST', // or 'PUT'
    //   body: credentials, // data can be `string` or {object}!
    //   headers:{
    //     'Content-Type': 'application/json'
    //   }
    // }).then(res => res.json())
    // .catch(error => console.error('Error:', error))
    // .then(response => console.log('Success:', response));
  }

  return (
    <div className={styles.cover}>
        <h1 className={styles.title}>Send message</h1>
      <form onSubmit={handleSubmit}>
        <input  className={styles.input} 
              name='title'
               type='text'
               placeholder='title' 
               onChange={handleChange}
                />
        <textarea className={styles.input} 
                name='body'
                placeholder='Body' 
                onChange={handleChange}  
                />
        <textarea className={styles.input} 
                name='image_link'
                placeholder='Image link' 
                onChange={handleChange}  
                />

        <button className={styles.loginBtn}>
            Send
        </button>
        </form>
    </div>
  )
}

export default Message
