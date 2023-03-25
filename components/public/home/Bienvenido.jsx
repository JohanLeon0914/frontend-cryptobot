/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './Bienvenido.module.css'
import Cookies from 'universal-cookie'

function Bienvenido({ cookie }) {

  const cookies = new Cookies()
  const [cookieState, setCookieState] = useState(false)

  useEffect(() => {
    if (cookie.myTokenName) {
      cookies.set('token', cookie.myTokenName, { path: '/' })
      setCookieState(true)
    } else {
      cookies.remove('token', {path:'/'})
      setCookieState(false)
    }
  }, [])

  

  return (
    <div>
      <div className={styles.contenedorTitulo}>
        <h1>CryptoBot</h1>
        <hr className={styles.linea} />
      </div>

      <div className={styles.contenedorPrincipal}>
        <Image className={styles.imagen} src='/images/cryptobot.png' width={400} height={400} />
        <h2>Welcome user</h2>
        <hr className={styles.linea} />
        <p>
        Virtual assistant that will help manage relevant information and update prices and news about the crypto world,
        Focused on any type of user with or without experience in this field.
        Start learning more about the world of cryptocurrencies with CryptoBot.
        </p>
      </div>
    </div>
  )
}

export default Bienvenido
