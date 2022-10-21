import axios from "axios"
import { useRouter } from "next/router"
import { useState } from "react"
import styles from './Login.module.css'

function Login() {


  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
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
    const response = await axios.post('/api/auth/login', credentials)
    if (response.status === 200) {
      router.push('/')
    }
  }

  return (
    <div className={styles.cover}>
      <h1 className={styles.title}>Login</h1>
      <form onSubmit={handleSubmit}>
        <input className={styles.input}
          name='email'
          type='email'
          placeholder='email'
          onChange={handleChange}
        />
        <input className={styles.input}
          name='password'
          type='password'
          placeholder='password'
          onChange={handleChange}
        />
        <button className={styles.loginBtn}>
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
