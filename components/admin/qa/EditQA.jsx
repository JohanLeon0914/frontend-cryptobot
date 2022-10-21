import React, { useState } from 'react'
import styles from './EditQA.module.css'
import axios from 'axios'
import { useRouter } from 'next/router'

function EditQA({ id }) {
    const [credentials, setCredentials] = useState({
        question: '',
        answer: '',
    })

    const router = useRouter()

    const handleChange = (e) => {
        setCredentials({
            ...credentials, // hago una copia de lo que tenga credentials hasta el momento
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const idQA = parseInt(id)
        console.log(credentials)
        const response = await axios.put(`http://localhost:9000/qa/edit/${idQA}`, credentials)
        if(response.status === 200) {
          router.push('/admin/qa')
        }
        console.log(credentials)
    }
    return (
        <div className={styles.cover}>
        <h1 className={styles.title}> Edit Q&A </h1>
      <form onSubmit={handleSubmit}>
            <input  className={styles.input} 
               name='question'
               type='text'
               placeholder='Question' 
               onChange={handleChange}
            />
            <input  className={styles.input} 
               name='answer'
               type='text'
               placeholder='Answer' 
               onChange={handleChange}
            />
            <button className={styles.button}> Save </button>
      </form>
    </div>
    )
}

export default EditQA
