import React, { useState } from 'react'
import styles from './EditProfile.module.css'

function EditProfile() {

  const [credentials, setCredentials] = useState({
    username: '',
    lastName: '',
    firstName: '',
    emailAddress: '',
  })

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
