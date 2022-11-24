import React, { useState } from 'react'
import styles from './EditProfile.module.css'
import axios from 'axios'

function EditProfile({ id }) {

  const [credentials, setCredentials] = useState({
    username: '',
    lastName: '',
    firstName: '',
    email: '',
  })

    const handleChange = (e) => {
        setCredentials({
          ...credentials, // hago una copia de lo que tenga credentials hasta el momento
          [e.target.name] : e.target.value
        })
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      const data = {
        username: credentials.username,
        lastname: credentials.lastName,
        firstname: credentials.firstName,
        email: credentials.email,
        telegramID: id
      }
      const response = await axios.post('https://944c-181-132-2-224.ngrok.io/accounts/edit', data)
      if(response.status === 200) {
        alert('edit succefully')
      }
    }  

  return (
    <div className={styles.cover}>
        <h1 className={styles.title}> Edit Profile </h1>
      <form onSubmit={handleSubmit}>
            <input  className={styles.input} 
               name='firstName'
               type='text'
               placeholder='first name' 
               onChange={handleChange}
            />
            <input  className={styles.input} 
               name='lastName'
               type='text'
               placeholder='last name' 
               onChange={handleChange}
            />
            <input  className={styles.input} 
               name='username'
               type='text'
               placeholder='username' 
               onChange={handleChange}
            />
            <input  className={styles.input} 
               name='email'
               type='email'
               placeholder='email' 
               onChange={handleChange}
            />
            <button className={styles.button}> Send </button>
      </form>
    </div>
  )
}

export default EditProfile
