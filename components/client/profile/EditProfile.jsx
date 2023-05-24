import React, { useState } from 'react'
import styles from './EditProfile.module.css'
import axios from 'axios'
import Swal from 'sweetalert2'

function EditProfile({ user }) {

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
        lastname: credentials.lastName,
        firstname: credentials.firstName,
        email: credentials.email,
        telegramID: user.telegramID,
        password: null,
      }
      console.log(user)
      console.log(data)
      const response = await axios.post(process.env.ACCOUNTS + '/accounts/edit', data)

      if(response.status === 200) {
        Swal.fire(
          'Ok!',
          'your profile was edited successfully!',
          'success'
        )
      }
    }  

    const deleteUser = async (e) => {
      console.log(user.telegramID)
      const response = await axios.delete(process.env.ACCOUNTS + '/accounts/delete/' + user.telegramID)
      if (response.status === 200) {
        Swal.fire(
          'Ok!',
          'your profile was delete successfully!',
          'success'
        )
      }
    }

  return (
    <div className={styles.cover}>
        <h1 className={styles.title}> Edit Profile </h1>
      <form onSubmit={handleSubmit}>
            <input  className={styles.input} 
               name='firstName'
               type='text'
               placeholder={user.firstname ? user.firstname : "First Name"}
               required
               onChange={handleChange}
            > 
              { user.firstname }
            </input>
            <input  className={styles.input} 
               name='lastName'
               type='text'
               placeholder={user.lastname ? user.lastname : "Last Name"}
               onChange={handleChange}
            >
              { user.lastname }
            </input>
            <input  className={styles.input} 
               name='email'
               type='email'
               placeholder={user.email ? user.email : "email"} 
               required
               onChange={handleChange}
            >
             { user.email }
            </input>
            <button className={styles.button}> Edit </button>
      </form>
      <button className={styles.deleteButton} onClick={() => deleteUser()} > Delete profile </button>
    </div>
  )
}

export default EditProfile
