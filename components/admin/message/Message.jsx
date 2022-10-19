import React from 'react'
import styles from './Message.module.css'
import { useRouter } from "next/router"
import { useState } from "react"

function Message() {

  const [credentials, setCredentials] = useState({
    title: '',
    description: '',
    image: ''
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
    // const response = await axios.post('/api/auth/login', credentials)
    // if(response.status === 200) {
    //   router.push('/dashboard')
    // }
    console.log(credentials)
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
                name='description'
                placeholder='description' 
                onChange={handleChange}  
                />
                <div className={styles.fileContainer}>

                   <label> Message image </label>  
                    <input 
                    type="file" 
                    name='image'
                    placeholder='image' 
                    onChange={handleChange} 
                    />
                </div>
        

        <button className={styles.loginBtn}>
            Send
        </button>
        </form>
    </div>
  )
}

export default Message
