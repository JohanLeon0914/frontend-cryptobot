import axios from "axios"
import { useRouter } from "next/router"
import { useState } from "react"
import styles from './CreateQA.module.css'

function CreateQA() {

  const [credentials, setCredentials] = useState({
    question: '',
    answer: ''
  })

  const router = useRouter()

  const handleChange = (e) => {
    setCredentials({
      ...credentials, // hago una copia de lo que tenga credentials hasta el momento
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await axios.post(process.env.QA + '/qa/create', credentials)
    if(response.status === 200) {
      router.push('/admin/qa')
    }
    console.log(credentials)
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create Q&A</h1>
      <form onSubmit={handleSubmit} >
        <input
              name='question'
               type='text'
               placeholder='question' 
               onChange={handleChange}
               className={styles.controls} 
                />
        <input 
                name='answer'
                type='text-area' 
                placeholder='answer' 
               onChange={handleChange}  
               className={styles.controls} 
                />
        <button className={styles.buttom}>
            Save Q&A
        </button>
      </form>
    </div>
  )
}

export default CreateQA

