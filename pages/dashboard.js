import axios from "axios"
import { useRouter } from "next/router"
import { useState } from "react"

function Dashboard() {

    const [user, setUser] = useState({
        email: '',
        username: ''
    })

    const router = useRouter()

    const getProfile = async () => {
        const response = await axios.get('/api/profile')
        setUser(response.data)
    }

    const logout = async () => {
       try {
        const response = await axios.post('/api/auth/logout')
        router.push('/login') //lo redirijo al login
       } catch (error) {
        router.push('/login') //lo redirijo al login
       }
    }

  return (
    <div>
      <h1>dashboard</h1>
      <pre>
        <h1>Name: {user.username}</h1>
        <p>Correo: {user.email}</p>
      </pre>

      <button onClick={() => getProfile()}>
        Get profile
      </button>
      <button onClick={() => logout()}>
        Loggout
      </button>
    </div>
  )
}

export default Dashboard
