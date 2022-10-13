import React from 'react'
import styles from './Message.module.css'

function Message() {

    const handleChange = (e) => {
        setCredentials({
          ...credentials, // hago una copia de lo que tenga credentials hasta el momento
          [e.target.name] : e.target.value
        })
      }

  return (
    <div className={styles.cover}>
        <h1 className={styles.title}>Send message</h1>
      <form>
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
                   <label className={styles.label}> Message image </label>

                   <label className={styles.labelFile}> Select a file </label>  
                    <input className={styles.fileInput} 
                    type="file" 
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
