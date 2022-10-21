
import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'
import Cookies from 'universal-cookie'

const cookies = new Cookies()



function Logout() {
    const router = useRouter()
    const logout = async () => {
        try {
         const response = await axios.post('/api/auth/logout')
         const cookie = cookies.get('token')
         console.log(cookie)
         router.push('/') //lo redirijo al login
        } catch (error) {
         router.push('/') //lo redirijo al login
        }
     }
    return (
        <button onClick={logout()}>
        Loggout
      </button>
    )
}

export default Logout
