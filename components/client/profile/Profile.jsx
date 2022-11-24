/* eslint-disable jsx-a11y/alt-text */
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import styles from './Profile.module.css'

export default function Profile({ user }) {


  const deleteUser = async (e) => {
    console.log(user.telegramID)
    const response = await axios.post('https://944c-181-132-2-224.ngrok.io/accounts/delete/' + user.telegramID)
    if (response.status === 200) {
    }
  }

  const router = useRouter()
  console.log(user)
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>Profile</h1>
      <hr />
      <div className={styles.username}>
        <b><p>{user.username}</p></b>
      </div>
      {/* <Image className={styles.imagen} src={user.imageProfile} width={150} height={150} /> */}
      <br />
      <div className={styles.userInformation}>
        <p className={styles.fullName}>{user.firstname}  {user.lastname}</p>
        <hr className={styles.line} />
        <p className={styles.email}>{user.email}</p>
        <hr className={styles.line} />
      </div>
      <div className={styles.buttonsContainer}>
        <button className={styles.editButton} onClick={() => router.push('/client/profile/edit-profile')}> Edit profile </button>
        <button className={styles.deleteButton} onClick={() => deleteUser()} > Delete profile </button>
      </div>
    </div>
  )
}

