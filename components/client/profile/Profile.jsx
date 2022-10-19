/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import styles from './Profile.module.css'

export default function Profile({ user }) {
  const router = useRouter()
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>Profile</h1>
      <hr />
      <div className={styles.username}>
        <b><p>{user.username}</p></b>
      </div>
      <Image className={styles.imagen} src={user.imageProfile} width={150} height={150} />
      <br />
      <div className={styles.userInformation}>
        <p className={styles.fullName}>{user.firstName}  {user.lastName}</p>
        <hr className={styles.line} />
        <p className={styles.email}>{user.emailAddress}</p>
        <hr className={styles.line} />
      </div>
      <div className={styles.buttonsContainer}>
        <button className={styles.editButton} onClick={() => router.push('/client/profile/edit-profile')}> Edit profile </button>
        <button className={styles.deleteButton}> Delete profile </button>
      </div>
    </div>
  )
}

