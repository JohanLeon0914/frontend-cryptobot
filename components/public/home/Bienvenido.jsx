/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import React from 'react'
import styles from './Bienvenido.module.css'

function Bienvenido() {
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
