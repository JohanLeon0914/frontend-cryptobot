import axios from "axios"
import { useRouter } from "next/router"
import { useState } from "react"
import styles from './CHP.module.css'
import Swal from 'sweetalert2'

function Login() {

    const [credentials, setCredentials] = useState({
        password: '',
        confirmPassword: ''
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
        if (credentials.password != credentials.confirmPassword) {
            Swal.fire(
                'Oops', 'Passwords do not match', 'error'
            )
        } else {
            console.log(credentials)
            // const response = await axios.post('/api/auth/login', credentials)
            // if(response.status === 200) {
            //   router.push('/dashboard')
            // }
        }

    }

    return (
        <div className={styles.cover}>
            <h1 className={styles.title}>Password change</h1>
            <form onSubmit={handleSubmit}>
                <input className={styles.input}
                    name='password'
                    type='password'
                    placeholder='Password'
                    onChange={handleChange}
                />
                <input className={styles.input}
                    name='confirmPassword'
                    type='password'
                    placeholder='Confirm password'
                    onChange={handleChange}
                />
                <button className={styles.confirmBtn}>
                    Confirm
                </button>
            </form>
        </div>
    )
}

export default Login
