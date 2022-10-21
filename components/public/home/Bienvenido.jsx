/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './Bienvenido.module.css'
import Cookies from 'universal-cookie'
import Header from '../header/Header'



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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ea dignissimos ipsa
          officia iste in maxime, at earum nisi id dolorem et repudiandae. Nesciunt quam voluptatibus
          suscipit velit quasi quae!
        </p>
      </div>
    </div>
  )
}

export default Bienvenido
